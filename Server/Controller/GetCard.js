const BlogModel = require("../Models/userBlog_model");

const GetCard = async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);  // ✅ Fix here

    console.log("Fetching blog with ID:", req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { GetCard };
