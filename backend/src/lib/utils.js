import jwt from "jsonwebtoken"
export const generateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.cookie("jwt",token,{
        maxAge:9*24*60*60*1000,
        httpOnly:true, // prevent csrf attack
        sameSite:"strict", // prevent csrf attack
        secure:process.env.NODE_ENV !== "development",

    })
    return token;
}