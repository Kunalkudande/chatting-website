import express from "express";
import dotenv from "dotenv";
import cookieParse from "cookie-parse";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import usersRoute from "./routes/usersRoute.js";
import connectToDB from "./db/connectToMongoDb.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParse());    //to access the cookies

// app.get("/", (req, res)=>{
//     res.send("Hello world");
// })

app.use("/api/auth", authRoute)
app.use("/api/message", messageRoute)
app.use("/api/Users", usersRoute);

app.listen(PORT, ()=>{
    connectToDB();
    console.log(`server is running on port ${PORT}`)
})