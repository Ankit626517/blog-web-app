// In your Express backend
const Blogs = require("../Models/userBlog_model");

const getUserBlogs = async (req, res) => {
  try {
    const userId = req.params.id;
    const userBlogs = await Blogs.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, blogs: userBlogs });
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getUserBlogs };
