import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
   
    senderdId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true,
    },
    text:{
        type:String,
    },
    image:{
        type:String,
    },
},
{timestamps:true}
);