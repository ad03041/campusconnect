import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // Check if already connected
    if (mongoose.connections[0].readyState) {
      console.log("Using existing database connection");
      return;
    }
    
    // Connect to MongoDB (use your connection string here)
    await mongoose.connect(process.env.MONGODB_URI || 'your-mongodb-uri-here');
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectMongoDB;
