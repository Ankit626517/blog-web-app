import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo3.png";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed   top-0 left-0 w-full bg-gray-900 p-4 shadow-md border-b-2 border-blue-950 font-serif text-[18px] z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img className="w-40" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white items-center">
          <Link to="/" className="hover:border-b-2">Home</Link>
          
          <Link to="/about" className="hover:border-b-2">About Us</Link>
          <Link to="/contact" className="hover:border-b-2">Contact</Link>
          <Link to="/yourpost" className="hover:border-b-2">YourPost</Link>


        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <SignedOut>
            <SignInButton className="bg-gradient-to-br font-mono from-[#0BA7B4] to-[#006D81] py-1 px-3 rounded-xl text-white" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col p-4 space-y-2 border-t border-blue-800 items-center rounded-b-xl mt-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
          {/* <Link to="/categories" onClick={() => setIsOpen(false)} className="hover:underline">Categories</Link> */}
          <Link to="/yourpost" className="hover:border-b-2">YourPost</Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</Link>
          <div className="mt-2">
            <SignedOut>
              <SignInButton className="bg-gradient-to-br font-mono from-[#0BA7B4] to-[#006D81] py-1 px-3 rounded-xl text-white" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
