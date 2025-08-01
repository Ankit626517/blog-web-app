require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/db");
const router = require("./Routes/UserBlog-router");

const app = express();
const PORT = process.env.PORT || 9000;

// ✅ Middleware order matters!
app.use(cors());
app.use(express.json());  // ✅ JSON parser must be before routes
app.use("/", router);     // ✅ Routes

// ✅ Connect to DB and start server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
});
