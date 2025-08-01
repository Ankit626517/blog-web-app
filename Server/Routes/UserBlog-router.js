const express = require('express');
const router = express.Router();


const { Userblog } = require("../Controller/Userblog");

// ✅ Test route
router.get("/", (req, res) => {
  res.send("Welcome to routes world with 9000 port");
});

// ✅ Create Blog route
router.post("/createBlog", Userblog);

// ✅ Register route


module.exports = router;
