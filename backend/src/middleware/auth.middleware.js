import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

export const protectRoute = async(req,res,next)=>{
try{
    // console.log("Cookies: ", req.cookies); 
const token = req?.cookies?.jwt;
if(!token){
    // console.log(req.cookies);
    return res.status(401).json({message:"Unauthorized - No token is found"})
}

const decoded = jwt.verify(token,process.env.JWT_SECRET)
if(!decoded){
    return res.status(401).json({message:"token is invalid"})
}
const user = await User.findById(decoded.userId).select("-password")
req.user = user
next();
}
catch(error){
    console.log(error)
}
}