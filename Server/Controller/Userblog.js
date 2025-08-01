const Blog = require("../Models/userBlog_model");

const Userblog = async (req, res) => {
  try {
    const { title, category, image, content, name, email, userId } = req.body;

    // Create new blog
    const newBlog = new Blog({
      title,
      category,
      image,
      content,
      name,
      email,
      userId,
    });

    // Save to MongoDB
    const savedBlog = await newBlog.save();

    // Logging the incoming data (optional)
    console.log("Received blog data:", req.body);

    // Send only one response
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (e) {
    console.error("Error while saving blog:", e.message);

    // Only send error response if not already sent
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: "Something went wrong" });
    }
  }
};

module.exports = { Userblog };
