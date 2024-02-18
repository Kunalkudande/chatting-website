import Users from "../models/userModel.js";

export const getUsers = async (req, res)=>{
    try{
        const logedIn = req.user._id;
        const filter = await Users.find().select("-password");

        res.status(200).json(filter);
    }
    catch(e){
        console.log("Error in getting users controller", e.message);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}