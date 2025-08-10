import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

function FullBlogContent() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://blog-web-app-c0bg.onrender.com/getBlogs/${id}`);
        setBlog(res.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-white p-8">Loading...</p>;
  if (!blog) return <p className="text-white p-8">Blog not found</p>;

  return (
    <div className="min-h-screen pt-25 bg-gray-600 py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="bg-gray-700 shadow-lg rounded-lg max-w-3xl w-full p-6 text-white">

        {/* Back to home */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-blue-100 hover:underline hover:text-blue-100 transition"
          >
            ← Back To Home
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-2">{blog.title}</h1>

        {/* Category */}
        <p className="text-sm text-gray-300 mb-4">{blog.category}</p>

        {/* Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
        )}

        {/* Content */}
        <div
          className="prose prose-invert max-w-none text-gray-100"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.content),
          }}
        />

        {/* Author and Date */}
        <div className="flex justify-between items-center mt-8 text-sm text-gray-300">
          <p className="font-medium">— {blog.name}</p>
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FullBlogContent;
