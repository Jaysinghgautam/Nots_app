// import mongoose from "mongoose";

// const DbCon=async()=>{
//     try {
//         // mongoose.connect("mongodb://localhost:27017/Notes_App")
//          mongoose.connect(process.env.MONGODB_URI)
//         console.log('Mongodb is connected')
        
//     } catch (error) {
//         console.log("Error in mongodb connection",error)
//     }
// }
// export default DbCon

import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI in env");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB || undefined
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
