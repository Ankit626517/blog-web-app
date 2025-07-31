import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Categories() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [category, setCategory] = useState("general"); // Default category

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  // Fetch Global News by Category
  useEffect(() => {
    setLoadingNews(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&language=en&apiKey=ae7642f828144b6f9c4ec93d84707011`
      )
      .then((response) => {
        setNews(response.data.articles.slice(0, 6)); // Show only first 6 news items
      })
      .catch((error) => console.error("Error fetching news:", error))
      .finally(() => setLoadingNews(false));
  }, [category]); // Runs whenever category changes

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white scroll-smooth min-h-screen">
      {/* Hero Section */}

      {/* Category Filter */}
      <div className="text-center py-4 pt-26">
        <h2 className="text-2xl font-bold mb-4">Select Blogs Category</h2>
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Latest News Section */}
      <section id="latest-news" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest {category.charAt(0).toUpperCase() + category.slice(1)} Blogs
        </h2>

        {loadingNews ? (
          <p className="text-center text-gray-400">Loading news...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {news.map((article, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition h-[500px] flex flex-col"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image Section */}
                <div className="w-full h-[300px] overflow-hidden rounded-md mb-4">
                  <img
                    src={
                      article.urlToImage || "https://via.placeholder.com/400"
                    }
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {article.source.name}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400">© 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Categories;
