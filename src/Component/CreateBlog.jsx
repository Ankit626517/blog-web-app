import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";
import axios from "axios";

function CreateBlog() {
  const { user } = useUser();
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  useEffect(() => {
    if (user) {
      setBlog((prev) => ({
        ...prev,
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        userId: user.id || "",
        userImageURL: user.imageUrl || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog.title || !blog.category || !blog.content) {
      toast.error("❌ Please fill all required fields!");
      return;
    }

    try {
      await axios.post("http://localhost:9000/createBlog", blog);
      toast.success("✅ Blog submitted successfully!");

      setBlog({
        title: "",
        category: "",
        image: "",
        content: "",
        name: "",
      });
    } catch (error) {
      toast.error("⚠️ Error submitting blog!");
      console.error(error);
    }
  };

  return (
   <div className="px-3 bg-gray-800 mt-16 md:mt-20 mx-auto  sm:px-6 lg:px-8">
  <ToastContainer position="top-right" autoClose={3000} />

  <div className="bg-white dark:bg-gray-900 p-6 md:p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
    <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-700 dark:text-white">
      📝 Create New Blog
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Category
        </label>
        <input
          type="text"
          name="category"
          value={blog.category}
          onChange={handleChange}
          placeholder="e.g., Tech, Food, Travel"
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          value={blog.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Blog Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Blog Content
        </label>
        <ReactQuill
          theme="snow"
          value={blog.content}
          onChange={(value) => setBlog({ ...blog, content: value })}
          className="bg-white text-black dark:bg-gray-100"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
        >
          ✨ Publish Blog
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

export default CreateBlog;
