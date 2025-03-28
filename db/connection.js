// db/connection.js
import dotenv from "dotenv";
dotenv.config(); // 🔥 must be before using process.env

import mongoose from "mongoose";

const uri = process.env.MONGO_URI;
console.log("🔍 MONGO_URI:", uri); // Add this debug line

mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log(`✅ Connected to MongoDB: ${mongoose.connection.name}`);
});
