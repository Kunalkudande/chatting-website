import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(400).json({
                message: "No token provided",
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(400).json({
                message: "Invalid Token",
            })
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(400).json({
                message: "User not found",
            })
        }

        res.user = user;

        next();
    }
    catch(e){
        console.log("Error in protect Route controller", e.message);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export default protectRoute;    