const Blogs = require("../Models/userBlog_model");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find().sort({ createdAt: -1 });
    // console.log(blogs)
    // console.log(blogs.map(b => b._id));
    res.status(200).json({ success: true, blogs });
    // console.log(blogs)
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blogs" });
  }
};

module.exports = { getAllBlogs };
