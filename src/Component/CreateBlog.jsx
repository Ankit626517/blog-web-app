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
  console.log(user);
  // const [name, setName] = useState("");
  const [createdBlog, setCreatedBlog] = useState(null);

  const [blog, setBlog] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });
  console.log(blog)

  useEffect(() => {
    if (user) {
      
      setBlog((prevBlog) => ({
        ...prevBlog,
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        userId: user.id || "",
        userImageURL : user.imageUrl || "",
        
      }));
    }
  }, [user]);
  // console.log(user)

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
    // console.log(setBlog)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!blog.title || !blog.category || !blog.content) {
      toast.error("❌ Please fill all required fields!");
      return;
    }

    // const updatedBlog = { ...blog, name: name };

    try {
      axios
        .post("http://localhost:9000/createBlog", blog)
        .then((res) => {
          console.log("Blog sent successfully:", res.data);
        })
        .catch((err) => {
          console.error("Error sending blog:", err);
        });

      toast.success(`✅ ${name}, your blog was submitted successfully!`);
      console.log("Blog submitted:");
      

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

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9000/register")
  //     .then((res) => {
  //       console.log(res.data);
  //       console.log("API is running");
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching blogs:", err);
  //     });
  // }, []);

  return (
    <div className="max-w-3xl mt-20 mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
      <ToastContainer position="top-right" autoClose={3000} />

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
          <label className="block font-bold text-2xl text-gray-700 dark:text-white">
            Blog Content
          </label>
          <ReactQuill
            theme="snow"
            value={blog.content}
            onChange={(value) => setBlog({ ...blog, content: value })}
            className="bg-white mt-2 text-white-700"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          ✨ Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
