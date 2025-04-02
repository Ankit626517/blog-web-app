import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              Welcome to our blogging website, where we share insightful articles on various topics. Stay connected!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
              <a href="#" className="hover:text-blue-500 transition"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-600 transition"><FaLinkedin size={24} /></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} YourBlogName. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

