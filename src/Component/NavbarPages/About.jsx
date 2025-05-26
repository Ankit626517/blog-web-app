import { motion } from 'framer-motion';
import { FaBookOpen, FaLightbulb, FaPenNib } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2f7ff] to-[#dbe9ff] dark:from-[#0f172a] dark:to-[#1e293b] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-[#1e293b] max-w-5xl w-full p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-center"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-10 tracking-tight"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          📝 About This Blog
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to our blog — your go-to space for everything web development, creative insights,
          and practical tech guides. We bring you well-crafted tutorials, thoughtful ideas, and inspiring
          content to help you grow as a developer and thinker.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-[#eaf4ff] dark:bg-[#334155] p-6 rounded-2xl shadow-md"
          >
            <FaBookOpen size={42} className="text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">In-Depth Tutorials</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">Learn web dev, tools, and frameworks with step-by-step guides.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-[#fff7e6] dark:bg-[#3f3f46] p-6 rounded-2xl shadow-md"
          >
            <FaLightbulb size={42} className="text-yellow-500 dark:text-yellow-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Creative Ideas</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">Explore project ideas, side-hustles, and developer inspiration.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-[#ffe6f1] dark:bg-[#4b5563] p-6 rounded-2xl shadow-md"
          >
            <FaPenNib size={42} className="text-pink-500 dark:text-pink-400 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Quality Writing</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">Read thoughtful posts that connect tech with real-life learning.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
