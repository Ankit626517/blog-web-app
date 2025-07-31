import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaLightbulb,
  FaPenNib,
  FaUser,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2f7ff] to-[#dbe9ff] dark:from-[#0f172a] dark:to-[#1e293b] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-[#1e293b] max-w-6xl w-full p-14 mt-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-center"
      >
        <motion.h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-8 tracking-tight">
          📝 About This Blog
        </motion.h2>

        <motion.p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
          Welcome to our blog — your go-to space for everything web development,
          creative insights, and practical tech guides. We bring you
          well-crafted tutorials, thoughtful ideas, and inspiring content to
          help you grow as a developer and thinker.
        </motion.p>

        {/* 🔹 Blog Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-[#eaf4ff] dark:bg-[#334155] p-6 rounded-2xl shadow-md"
          >
            <FaBookOpen
              size={42}
              className="text-blue-600 dark:text-blue-400 mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              In-Depth Tutorials
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Learn web dev, tools, and frameworks with step-by-step guides.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-[#fff7e6] dark:bg-[#3f3f46] p-6 rounded-2xl shadow-md"
          >
            <FaLightbulb
              size={42}
              className="text-yellow-500 dark:text-yellow-400 mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Creative Ideas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Explore project ideas, side-hustles, and developer inspiration.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-[#ffe6f1] dark:bg-[#4b5563] p-6 rounded-2xl shadow-md"
          >
            <FaPenNib
              size={42}
              className="text-pink-500 dark:text-pink-400 mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Quality Writing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Read thoughtful posts that connect tech with real-life learning.
            </p>
          </motion.div>
        </div>

        {/* 🔹 More About the Blog Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-[#f1f5f9] dark:bg-[#2d3748] p-6 rounded-2xl"
          >
            <FaUser
              size={38}
              className="text-indigo-600 dark:text-indigo-400 mb-3"
            />
            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              Who Am I?
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              I'm Ankit Rathore, a passionate full-stack developer dedicated to
              simplifying complex topics and building meaningful web
              experiences.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-[#fef9f3] dark:bg-[#3a3a3c] p-6 rounded-2xl"
          >
            <FaGlobe
              size={38}
              className="text-green-600 dark:text-green-400 mb-3"
            />
            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              Our Mission
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              To empower students and self-learners with easy-to-understand tech
              content, tools, and a platform to grow together.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-[#e6fffa] dark:bg-[#374151] p-6 rounded-2xl"
          >
            <FaRocket
              size={38}
              className="text-red-500 dark:text-red-400 mb-3"
            />
            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              Vision Ahead
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              We're building a community for learners and creators — join us and
              be part of the journey.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
