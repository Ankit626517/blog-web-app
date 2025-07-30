import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../../images/logo3.png";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Navbar appearing animation
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 }, // Start state
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // End state
    );

    // Change background on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(31, 41, 55, 0.9)",
          duration: 0.3,
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          duration: 0.3,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-transparent p-4 shadow-md border-b-2 border-blue-950 font-serif text-[18px] z-50 transition-colors duration-300"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img className="w-40" src={logo} alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white items-center">
          <Link to="/" className="hover:border-b-2">
            Home
          </Link>
          <Link to="/categories" className="hover:border-b-2">
            Categories
          </Link>
          <Link to="/about" className="hover:border-b-2">
            About Us
          </Link>
          <Link to="/contact" className="hover:border-b-2">
            Contact
          </Link>
         
        </div>
         <div className="hidden md:flex">
            <SignedOut>
              <SignInButton  className="bg-gradient-to-br font-mono from-[#0BA7B4] to-[#006D81] py-1 px-3 rounded-xl"/>
            </SignedOut>
            <SignedIn >
              <UserButton />
            </SignedIn>
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
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-gradient-to-t from-gray-950 to-blue-950 text-white flex flex-col p-4 space-y-2 border-t-2 border-blue-950 items-center w-2xs rounded-3xl font-bold gap-0.5 absolute top-17 right-0 opacity-0 transform translate-x-52"
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/categories" className="hover:underline">
          Categories
        </Link>
        <Link to="/about" className="hover:underline">
          About Us
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
         <div className="">
            <SignedOut>
              <SignInButton  className="bg-gradient-to-br font-mono from-[#0BA7B4] to-[#006D81] py-1 px-3 rounded-xl"/>
            </SignedOut>
            <SignedIn >
              <UserButton />
            </SignedIn>
          </div>
          
      </div>
    </nav>
  );
};

export default Navbar;
