const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // URL of the image
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    name: {
      type: String, // Full name from Clerk
      required: true,
    },
    email: {
      type: String, // Email from Clerk
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: String, // Clerk user ID
      required: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
 
);

module.exports = mongoose.model("UserBlog", blogSchema);


// module.exports = mongoose.model("Blog", blogSchema);


  // {
  //   timestamps: true, // automatically adds createdAt and updatedAt
  // }