import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br w-full from-gray-950 to-blue-950 p-4 shadow-md border-b-2 border-blue-950 font-serif text-[18px]">
      <div className="container mx-auto flex  justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">MyBlog</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <div className="relative group">
            <button className="hover:underline">Categories</button>
            <div className="absolute left-0 hidden group-hover:block bg-gradient-to-br from-gray-950 to-blue-950 text-white shadow-md mt-1 rounded-lg border border-blue-400">
              <Link to="/categories" className="block px-4 py-2 hover:bg-gray-950">Tech</Link>
              <Link to="/categories" className="block px-4 py-2 hover:bg-gray-950">Lifestyle</Link>
              <Link to="/categories" className="block px-4 py-2 hover:bg-gray-950">Food</Link>
            </div>
          </div>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>

          {/* Search Bar */}
          {/* <div className="relative flex items-center bg-gradient-to-r from-gray-950 to-gray-650 border border-blue-400 rounded-md p-1">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-3 py-1 text-white focus:none" 
            />
            {/* <Search size={20} className="text-white ml-2" /> 
          </div> */}

          <Link to="/register" className="hover:underline hover:text-gra-200 hover:bg-black  px-5 py-2 border-2 rounded-3xl">Creat Account </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-t from-gray-950 to-blue-950 text-white flex flex-col p-4 space-y-2 border-t-2 border-blue-950 items-center w-2xs rounded-3xl font-bold gap-0.5 absolute top-17 right-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/categories" className="hover:underline">Categories</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>

          {/* Search Bar for Mobile */}
          {/* <div className="relative flex items-center bg-gradient-to-r from-gray-500 to-black border border-blue-400 rounded-md p-1">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-auto px-3 py-1 bg-transparent text-white focus:outline-none" 
            />
            <Search size={20} className="text-white ml-2" />
          </div> */}

          <Link to="/login" className="hover:underline border-blue-950 bg-gradient-to-br from-gray-950 to-blue-950 border-2 p-3.5 rounded-2xl">
            Hello
          </Link>
        </div>
      )}
      {/* <Register/> */}
    </nav>
  );
};

export default Navbar;
