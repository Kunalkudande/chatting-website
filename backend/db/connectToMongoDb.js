import mongoose from "mongoose";

const connectToMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected to mongodb");
    }
    catch(error){

    }
}

export default connectToMongoDb;