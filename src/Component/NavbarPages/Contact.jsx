import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#dbeaff] dark:from-[#0f172a] dark:to-[#1e293b] px-6 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-[#1e293b] p-10 md:p-16 rounded-3xl shadow-2xl w-full max-w-5xl"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          📬 Contact Us
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a question, feedback or just want to chat? Fill the form or use the info below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <FaEnvelope className="text-blue-500 dark:text-blue-400 text-3xl mb-2" />
              <p className="text-gray-800 dark:text-white font-semibold">Email</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">contact@example.com</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <FaPhoneAlt className="text-green-500 dark:text-green-400 text-3xl mb-2" />
              <p className="text-gray-800 dark:text-white font-semibold">Phone</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">+91 12345 67890</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <FaMapMarkerAlt className="text-red-500 dark:text-red-400 text-3xl mb-2" />
              <p className="text-gray-800 dark:text-white font-semibold">Location</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Indore, MP, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-xl font-semibold text-lg"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
