import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import messageRoutes from "./routes/message.route.js"


const app = express();
dotenv.config()
app.use(cookieParser());
app.use(express.json()); 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}
));
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
const PORT = process.env.PORT;
// Use cookie-parser middleware
app.listen(5001,()=>{
    console.log("backend server is running")
    connectDB();
})