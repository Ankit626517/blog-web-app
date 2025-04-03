import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  // Fetch News using Axios
  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ae7642f828144b6f9c4ec93d84707011")
      .then((response) => {
        setNews(response.data.articles.slice(0, 6)); // Show only first 6 news articles
      })
      .catch((error) => console.error("Error fetching news:", error))
      .finally(() => setLoadingNews(false));
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white scroll-smooth">
      
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <motion.h1 className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to My Blog
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Explore the latest articles, trends, and insights.
        </motion.p>
        <motion.a href="#latest-news" className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
          whileHover={{ scale: 1.1 }}>
          Read News
        </motion.a>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="container mx-auto px-4 py-10 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>

        {loadingNews ? (
          <p className="text-center text-gray-400">Loading news...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {news.map((article, index) => (
              <motion.div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition h-[500px] flex flex-col"
                whileHover={{ scale: 1.05 }}>
                
                {/* Image Section */}
                <div className="w-full h-[300px] overflow-hidden rounded-md mb-4">
                  <img src={article.urlToImage || "https://via.placeholder.com/400"} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{article.source.name}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Login Prompt */}
      <section className="text-center py-10">
        <h3 className="text-xl mb-4">Want to read more exclusive news?</h3>
        <a href="/login" className="bg-green-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-600 transition">
          Login to Access More
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400">© 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
