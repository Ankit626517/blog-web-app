import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 animate-pulse "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Blog
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the latest trends, insights, and stories.
        </motion.p>
        <motion.a
          href="#latest-blogs"
          className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Explore Blogs
        </motion.a>
      </section>
      
      {/* Latest Blogs */}
      <section id="latest-blogs" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                <p className="text-gray-400">Image Placeholder</p>
              </div>
              <h3 className="text-xl font-semibold">Blog Title {id}</h3>
              <p className="text-blue-400 text-sm">Category</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
