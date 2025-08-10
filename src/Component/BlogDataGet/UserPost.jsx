import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

function UserPost() {
  const { user } = useUser();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        if (!user) return;
        const res = await axios.get(
          `https://blog-web-app-c0bg.onrender.com/getUserBlogs/${user.id}`
        );
        setBlogs(res.data.blogs);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      }
    };

    fetchUserBlogs();
  }, [user]);

  return (
    <div className="pt-25 pb-16 px-4 sm:px-6 lg:px-20 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        <span className="text-blue-500">{user?.fullName}</span> — Your Blog Posts
      </h1>

      {blogs.length === 0 ? (
        <p className="text-blue-400 text-center text-lg">
          You haven't written any blogs yet.
        </p>
      ) : (
        <div className="space-y-10">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Blog Image */}
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                />
              )}

              {/* Content Section */}
              <div className="flex flex-col justify-between p-5 md:p-6 w-full text-white">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>

                  {/* Short Content */}
                  <div
                    className="text-gray-300 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        blog.content.slice(0, 200) + "..."
                      ),
                    }}
                  />
                </div>

                {/* Footer - Author, Date, Read More */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <img
                      src={user?.imageUrl}
                      alt="Author"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{blog.name}</p>
                      <p className="text-gray-400 text-xs">
                        {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/fullblogcontent/${blog._id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPost;
