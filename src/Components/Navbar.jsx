import { useState } from "react";
import { FaLanguage, FaBars, FaTimes, FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { navLinks } from "../Constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#071739] text-white px-6 py-4 shadow-lg fixed top-0 w-full z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto">

        {/* Left Section: Logo */}
        <h1 className="text-lg flex gap-1 font-bold text-[#CDD5DB]">
          <span className="text-[#A68868]">SmartLink</span> Station
        </h1>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden lg:flex items-center bg-[#CDD5DB] rounded-full px-4 py-2 w-1/3 shadow-md">
          <span className="text-black text-lg mr-2">🔍</span>
          <input
            type="text"
            placeholder="WHAT ARE YOU LOOKING FOR?"
            className="bg-transparent text-black outline-none text-sm flex-1"
          />
          <button className="bg-[#A68868] text-white font-bold px-4 py-1 rounded-full ml-2 hover:bg-[#8f725a] transition">
            SEARCH
          </button>
        </div>

        {/* Navigation + Icons + Sign Up (On Large Screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="flex gap-6 text-[#CDD5DB] text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.id} href={link.url} className="hover:text-[#A68868] transition">
                {link.title}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5 text-2xl">
            <a href="/"> <FaHome className="hover:text-[#A68868] transition cursor-pointer" /></a>           
            <FaLanguage className="hover:text-[#A68868] transition cursor-pointer" />
            <CgShoppingCart className="hover:text-[#A68868] transition cursor-pointer" />
            <BsPersonCircle className="hover:text-[#A68868] transition cursor-pointer" />
          </div>

          {/* Sign Up Button */}
          <button className="bg-[#CDD5DB] text-black font-bold px-4 py-2 rounded-full hover:bg-[#B5C1C8] transition">
            SIGN UP
          </button>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (Dropdown) */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4 bg-[#091c3f] p-4 rounded-lg shadow-lg">
          {navLinks.map((link) => (
            <a key={link.id} href={link.url} className="hover:text-[#A68868] transition text-lg">
              {link.title}
            </a>
          ))}
           <a href="/" className="hover:text-[#A68868] transition text-lg cursor-pointer"> Home</a>
        </div>
      )}

      {/* Bottom Navbar (Fixed for Small Screens) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#071739] flex justify-around items-center py-3 lg:hidden shadow-md">
      <a href="/"> <FaHome className="hover:text-[#A68868] transition cursor-pointer" /></a>  
        <FaLanguage className="text-2xl hover:text-[#A68868] transition cursor-pointer" />
        <CgShoppingCart className="text-2xl hover:text-[#A68868] transition cursor-pointer" />
        <BsPersonCircle className="text-2xl hover:text-[#A68868] transition cursor-pointer" />
      
      </div>
    </nav>
  );
};

export default Navbar;
