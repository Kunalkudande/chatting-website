import bcrypt from "bcryptjs"
import User from "../models/userModel.js";
import generateTokenAndCookie from "../utils/genrateToken.js";

export const signup = async (req, res)=>{
    try{
        const { fullName, username, password, confirmPassword, gender}  = req.body;

        if(confirmPassword !== password){
            return res.status(400).json({
                message: "password do not match",
            })
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({
                message: "User Already Exist",
            })
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //for profile pic from api
        const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === "male" ? boysProfilePic : girlsProfilePic
        })

        if(newUser){
            generateTokenAndCookie(newUser._id, res);   // this for jwttoken and cookies 
            await newUser.save();                          // saving to database

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else{
            res.status(400).json({
                message: "Invaild Users Data",
            })
        }
    }
    catch(e){
        console.log("Error in signup controller", e.message);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const login = async (req, res)=>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPassword = await bcrypt.compare(password, user?.password || "" );

        if(!user || !isPassword){
            res.status(400).json({
                message: "Invalid username or password",
            })
        }

        generateTokenAndCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    }
    catch(e){
        console.log("Error in Logout controller", e.message);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const logout = async (req, res)=>{
    try{
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({
            message: "Successfully Logout"
        });
    }
    catch(e){
        console.log("Error in Login controller", e.message);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}