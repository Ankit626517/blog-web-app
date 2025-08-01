require("dotenv").config();
const mongoose = require("mongoose");

const M_URL = process.env.MONGO_URI;
// console.log(M_URL)

const connectDb = async () => {
  try {
    await mongoose.connect(M_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ something went wrong:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
