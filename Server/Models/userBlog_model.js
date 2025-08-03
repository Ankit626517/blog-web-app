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

   userImageURL: {
  type: String, // URL of the user's profile image
  required: false,
  trim: true,
},
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

const Blogs = mongoose.model("UserBlog", blogSchema);
module.exports = Blogs;

// module.exports = mongoose.model("Blog", blogSchema);

// {
//   timestamps: true, // automatically adds createdAt and updatedAt
// }
