import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

function FullBlogContent() {
  const { id } = useParams(); // 👈 Get blog id from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/getBlogs/${id}`);
        setBlog(res.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!blog) return <p className="p-4">Blog not found</p>;

  return (
    <div className="p-4 text-blue-900 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-2 text-blue-700">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-md mb-4"
        />
      )}
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(blog.content),
        }}
      ></div>
      <p className="mt-4 text-right font-medium">— {blog.name}</p>
    </div>
  );
}

export default FullBlogContent;
