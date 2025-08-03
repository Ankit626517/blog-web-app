import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";


import { useUser } from "@clerk/clerk-react";
import GetBlogData from "../BlogDataGet/GetBlogData";
const MotionLink = motion(Link); 

const Home = () => {
  const [blogs, setBlogs] = useState([]);


  const { user } = useUser();
  const [name, setName] = useState();
  useEffect(() => {
    if (user) {
      // console.log(user)
      // console.log("User ID:", user.imageUrl);
      setName(user.fullName);
      // console.log("Email:", user.emailAddresses[0].emailAddress);
    }
  }, [user]);

  return (
    <div className="bg-gradient-to-r pt-25 from-gray-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 animate-pulse"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome <span className="text-blue-700">{name}</span>
        </motion.h1>
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
          Read insightful blogs or create your own. Connect, express, and
          inspire.
        </motion.p>
        <MotionLink
          to="/CreateBlog"
          className="px-6 py-3 rounded-lg text-white font-semibold transition bg-gradient-to-br from-[#0BA7B4] to-[#006D81]"
          whileHover={{ scale: 1.1 }}
        >
          Create Blog
        </MotionLink>
      </section>

    
      <GetBlogData />
    </div>
  );
};

export default Home;
