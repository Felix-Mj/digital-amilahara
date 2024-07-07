import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:Number,
        default:91
    },
    password:{
        type:String,
        required:true
    },
    avator:{
        type:String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
    },
    roll:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }

},{timestamps:true})

export const User= mongoose.model("User",userSchema)