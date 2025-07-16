require("dotenv").config();
const mongoose = require("mongoose");

// const URL ="mongodb+srv://Ankit9343:Ankit123@ankit.xgfednb.mongodb.net/?retryWrites=true&w=majority&appName=Ankit"
// console.log(URL)
const M_URL = process.env.MONGO_URI;
// console.log(M_URL)

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
