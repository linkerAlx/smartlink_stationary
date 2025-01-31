import React from 'react';
import { navLinks } from '../Constants';
import { FaAddressBook, FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram, FaPhone } from 'react-icons/fa';
import { MdDiscount, MdEmail, MdInsertInvitation } from 'react-icons/md';
import { BsMegaphone } from 'react-icons/bs';
import { CgShoppingBag, CgShoppingCart } from 'react-icons/cg';

const Footer = () => {
  return (
    <footer className="bg-[#A4B5C4] text-[#071739] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8"> {/* Added lg:grid-cols-4 */}

          {/* Get to Know Us Section */}
          <div className='flex flex-col'>
            <div>
              <h4 className="font-bold mb-4">Get to Know Us</h4>
              <ul>
                {navLinks
                  .filter((link) => link.title === "About Us" || link.title === "Contact Us")
                  .map((link) => (
                    <li key={link.id} className="mb-2">
                      <a href={link.url} className="hover:text-gray-300">
                        {link.title}
                      </a>
                    </li>
                  ))}
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Services</a></li>
              </ul>
            </div>

            {/* Stay Connected Section */}
            <div className="mt-4">
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <div className="flex space-x-4 font-bold">
                <FaWhatsapp className='text-green-950 w-10 h-10' />
                <FaInstagram className='text-pink-800 w-10 h-10' />
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="mb-2 flex items-center"> <FaPhone className="mr-2" /> +250-783-653-651</p>
            <p className="mb-2 flex items-center"> <MdEmail className="mr-2" /> inezalinkera@gmail.com</p>
            <p className="mt-2 flex items-center"> <FaAddressBook className="mr-2" /> Rwanda, Southern province, Muhanga District</p>
          </div>

          {/* Subscription Section */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-5"> <BsMegaphone className='text-[#4B6382] w-10 h-10' /> Subscription</h4>
            <div className="flex flex-col sm:flex-row items-center justify-between bg-[#CDD5DB] px-4 py-2 w-full">
  <input
    type="text"
    placeholder="Enter your Email Address"
    className="bg-transparent text-black outline-none text-sm flex-1 sm:w-auto mb-2 sm:mb-0 sm:mr-2" // Added responsive width and margin
  />
  <button className="bg-[#A68868] font-bold px-2 py-1">
    Subscribe
  </button>
</div>
            <p className='font-bold mt-2 flex items-center gap-1'>Sign up now to receive exclusive deals and discounts! <span> <MdDiscount className='w-10 h-10 text-[#A68868]' /></span></p>
           
          </div>
          
          <div className="mt-4 flex items-center justify-center">
          <h4 className="font-bold ">Shop Now!</h4>
              <CgShoppingBag className='w-20 h-20 ' />
              <CgShoppingCart className='w-20 h-20 '/>
            </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-2 border-gray-600">
          <p>&copy; 2025 SmartLink Station. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;