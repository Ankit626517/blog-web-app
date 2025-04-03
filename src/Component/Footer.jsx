import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left ">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              Welcome to our MyBlog website, where we share insightful articles on various topics. Stay connected!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link to = "/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to = "/categories" className="hover:text-blue-400 transition">Categories</Link></li>
              <li><Link to = "/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to = "/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
              <Link to="#" className="hover:text-blue-500 transition"><FaFacebook size={24} /></Link>
              <Link to =" #" className="hover:text-blue-400 transition"><FaTwitter size={24} /></Link>
              <Link to =" #" className="hover:text-pink-500 transition"><FaInstagram size={24} /></Link>
              <Link to =" #" className="hover:text-blue-600 transition"><FaLinkedin size={24} /></Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyBlog. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

