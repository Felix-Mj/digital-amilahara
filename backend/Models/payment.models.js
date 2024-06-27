import mongoose from "mongoose";
const paymentShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        required:true
    }
})

export const userPayment = mongoose.model("Payment", paymentShema);