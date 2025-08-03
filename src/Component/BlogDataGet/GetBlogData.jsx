import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import DOMPurify from "dompurify";

function GetBlogData() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:9000/getBlogs");
        setBlogs(res.data.blogs);
        console.log("Fetched Blogs:", res.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  // console.log(setBlogs);

  return (
    <div className="px-25  bg-gradient-to-t  from-gray-900 to-blackmin-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>

      {loading ? (
        <p className="text-center">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center">No blogs found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {blogs.map((blog) => (
            <div>
              {" "}
              <Link to={`/fullblogcontent/${blog._id}`}>
                {" "}
                <div className="bg-gray-900 text-amber-50 h-[400px] rounded-4xl overflow-hidden shadow-md border hover:shadow-lg transition duration-300">
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">
                      {blog.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        {blog.userImageURL ? (
                          <img
                            src={blog.userImageURL}
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="bg-blue-600 text-white w-full h-full flex items-center justify-center font-semibold">
                            U N
                          </div>
                        )}
                      </div>

                      <div className=" flex gap-25">
                        <div>
                          <p className="text-sm font-medium text-gray-100">
                            {blog.name}
                          </p>
                          <span className="font-bold gap-8  text-gray-100">
                            {new Date(blog.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <div>
                          <Link
                            className="text-blue-900 font-bold"
                            to={`/fullblogcontent/${blog._id}`}
                          >
                            Read More...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetBlogData;
