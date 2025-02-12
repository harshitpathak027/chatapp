import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"



const app = express();
dotenv.config()
app.use(cookieParser());
app.use(express.json()); 
app.use("/api/auth",authRoutes)
const PORT = process.env.PORT;
// Use cookie-parser middleware
app.listen(5001,()=>{
    console.log("backend server is running")
    connectDB();
})