import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetBlogData() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://blog-web-app-c0bg.onrender.com/getBlogs");
        setBlogs(res.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 to-black px-4 py-10">
      <h1 className="text-3xl font-bold text-white text-center mb-8">All Blogs</h1>

      {loading ? (
        <p className="text-white text-center">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-white text-center">No blogs found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog._id} to={`/fullblogcontent/${blog._id}`}>
              <div className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                {/* Blog Image */}
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 sm:h-52 object-cover"
                  />
                )}

                {/* Blog Content */}
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <h2 className="text-lg font-bold mb-2 line-clamp-2">{blog.title}</h2>

                  {/* User info and Read more */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                      {/* User Image */}
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center font-semibold">
                        {blog.userImageURL ? (
                          <img
                            src={blog.userImageURL}
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>U N</span>
                        )}
                      </div>

                      {/* User Name and Date */}
                      <div>
                        <p className="text-sm font-medium">{blog.name}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Read More */}
                    <Link
                      to={`/fullblogcontent/${blog._id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetBlogData;
