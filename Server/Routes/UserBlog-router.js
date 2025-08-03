const express = require('express');
const router = express.Router();


const { Userblog } = require("../Controller/Userblog");
const {getAllBlogs} = require("../Controller/GetAllBlog")
const {GetCard} = require("../Controller/GetCard")
const {getUserBlogs} = require("../Controller/GetUserBlog")


// ✅ Test route
router.get("/", (req, res) => {
  res.send("Welcome to routes world with 9000 port");
});

// ✅ Create Blog route
router.post("/createBlog", Userblog);

// get blog details
router.get("/getBlogs", getAllBlogs);

router.get("/getBlogs/:id",GetCard );

router.get("/getUserBlogs/:id", getUserBlogs);

module.exports = router;
