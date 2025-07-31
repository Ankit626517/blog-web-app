import React, { useState , useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

function CreateBlog() {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", blog);
    // 🔁 Yahan API call karna hoga
  };

  const { user } = useUser();
const[name , setName] = useState()
useEffect(() => {
  if (user) {
    console.log("User ID:", user.id);
      setName( user.fullName);
    console.log("Email:", user.emailAddresses[0].emailAddress);
  }
}, [user]);

  return (
    <div className="max-w-3xl mt-25 mx-auto  p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
      <h1 className="text-white font-bold text-2xl text-center">{name}</h1>
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-white">

        📝 Create a New Blog
      
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={blog.category}
            onChange={handleChange}
            placeholder="e.g. Tech, Food, Travel"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={blog.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-white"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Blog Content
          </label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            rows="6"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          ✨ Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
