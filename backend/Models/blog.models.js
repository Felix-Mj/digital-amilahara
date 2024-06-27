import mongoose from 'mongoose'

const blogShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Blog = mongoose.model("Blog",blogShema)