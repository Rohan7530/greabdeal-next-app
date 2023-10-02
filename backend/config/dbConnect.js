import mongoose from "mongoose";

const dbConnect = () => {
    if(mongoose.connect.readystate >= 1){
        return
    }

    // mongoose.set("strictQuery", false)
    mongoose.connect(process.env.DB_URI)
}

export default dbConnect