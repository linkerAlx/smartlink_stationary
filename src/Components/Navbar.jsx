import { FaLanguage } from "react-icons/fa6";
import { navLinks } from "../Constants";
import { BsPersonCircle } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#071739] text-white px-6 py-3 flex justify-between items-center">
      {/* Left Section: Logo */}
      <h1 className="text-xl  text-[#CDD5DB] font-semibold"><span className="text-[#A68868] ">SmartLink </span> Station</h1>

      {/* Search Bar */}
      <div className="flex items-center bg-[#CDD5DB] rounded-full px-4 py-2 w-1/3">

        <span className="text-black text-lg mr-2">🔍</span>
        <input
          type="text"
          placeholder="WHAT ARE YOU LOOKING FOR?"
          className="bg-transparent text-black outline-none text-sm flex-1"
        />
        <button className="bg-[#A68868] text-white font-bold px-4 py-1 rounded-full ml-2">
          SEARCH
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-[#CDD5DB]">
        {navLinks.map((link) => (
          <a key={link.id} href={link.url} className="hover:text-gray-300">
            {link.title}
          </a>
        ))}
      </div>

      {/* Icons and Sign Up */}
      <div className="flex items-center gap-4">
      <span className="text-2xl"><FaHome/></span>
        <span className="text-2xl"><FaLanguage/></span>
        <span className="text-2xl"><CgShoppingCart/></span>
        <span className="text-2xl"><BsPersonCircle/></span>
        <button className="bg-[#CDD5DB] text-black font-bold px-4 py-1 rounded-full">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
