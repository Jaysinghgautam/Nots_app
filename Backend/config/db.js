import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        // mongoose.connect("mongodb://localhost:27017/Notes_App")
         mongoose.connect(process.env.MONGODB_URI)
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon