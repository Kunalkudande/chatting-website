import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import connectToDB from "./db/connectToMongoDb.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello world");
})

app.use("/api/auth", authRoute)

app.listen(PORT, ()=>{
    connectToDB();
    console.log(`server is running on port ${PORT}`)
})