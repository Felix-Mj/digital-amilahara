import mongoose from "mongoose";

const connectDB = async () =>{
  const DB = await mongoose.connect(process.env.MOGODB_URL)
  if (DB) {
    console.log("DB is connceted")
  }else{

    console.log("DB is nod connected")
  }

}

export default connectDB;