import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import Footer from "../Footer";
import { Link } from "react-router-dom";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_77902d12fd11c2a5169d038b59f7b75c5d30a&q=blog"
        );
        const data = await response.json();
        setBlogs(data.results || []); // Ensure results exist
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
  <motion.h1
    className="text-5xl md:text-6xl font-bold mb-4 animate-pulse"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Share Your Thoughts, Inspire the World
  </motion.h1>
  <motion.p
    className="text-lg md:text-xl mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    Read insightful blogs or create your own. Connect, express, and inspire.
  </motion.p>
  <Link
  to="/CreateBlog" // Ensure correct route path
  className="px-6 py-3 rounded-lg text-white font-semibold transition bg-gradient-to-br from-[#0BA7B4] to-[#006D81]"
  whileHover={{ scale: 1.1 }}
>
  Create Blog
</Link>

</section>


      {/* Latest Blogs */}
      <section id="latest-blogs" className="container mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {blogs.length > 0 ? (
      blogs.map((blog, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-60 overflow-hidden rounded-md mb-4">
            {blog.image_url ? (
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-700 text-gray-400">
                No Image Available
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="text-blue-400 text-sm">{blog.category || "Uncategorized"}</p>
          <div className="flex justify-center mt-2">
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition"
            >
              Read More
            </a>
          </div>
        </motion.div>
      ))
    ) : (
      <p className="text-center text-gray-400">Loading blogs...</p>
    )}
  </div>
</section>

      
    </div>
  );
};

export default Home