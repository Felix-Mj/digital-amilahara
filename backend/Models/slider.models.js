import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    meassage:{
        type:String,
        required:true
    }
})

export const Slider = mongoose.model("Slider", sliderSchema);