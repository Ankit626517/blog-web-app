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
          `http://localhost:9000/getUserBlogs/${user.id}`
        );
        setBlogs(res.data.blogs);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      }
    };

    fetchUserBlogs();
  }, [user]);

  return (
    <div className=" pt-30 px-15 bg-gray-800 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
       <span className="text-blue-500">{user.fullName}</span> your Blog Posts
      </h1>

      {blogs.length === 0 ? (
        <p className="text-blue-600 text-center">
          You haven't written any blogs yet.
        </p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col md:flex-row  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Blog Image */}
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-1/3 h-64 object-cover"
                />
              )}

              <div className="p-6 flex flex-col bg-gray-600 text-white justify-between w-full">
                {/* Title */}
                <h2 className="text-2xl font-semibold  mb-2">{blog.title}</h2>

                

                {/* Short Description */}
                <div
                  className="text-gray-50 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      blog.content.slice(0, 200) + "..."
                    ),
                  }}
                />

                {/* Read More Button */}
                <div className="mt-4 text-right">
                  <Link
                    to={`/fullblogcontent/${blog._id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Read More
                  </Link>
                  
                </div>
                {/* Author Info */}
                <div className="flex ml-auto items-center gap-3 text-sm  mb-4">
                    <div>
                  <img
                    src={user?.imageUrl}
                    alt="Author"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  
                  </div>
                    <span className="font-medium">{blog.name}</span>
                  
                  <span className="  text-gray-100">
                   
                   
                    {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                 
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
