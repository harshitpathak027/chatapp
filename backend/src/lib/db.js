import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("not connected the db",error); 
    }
}