import mongoose from "mongoose"

const connectDB = async() => {
    try {
        //await mongoose.connect('process.env.Mongo_DB_Api');
        
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log("MongoDB has been connected ..... ");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
    
};


export default connectDB;