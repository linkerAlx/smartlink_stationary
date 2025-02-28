// Signuppage.js 
import React, { useState } from 'react';
import { SIGNUP_FIELDS } from '../Constants';
import { Link } from 'react-router-dom'; // Make sure to import Link for navigation

const Signuppage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle backend submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071739] py-6 px-4  mt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg sm:w-full md:w-3/4 lg:w-1/2">
        {/* SmartLink Stationary Title */}
        <div className="text-center mb-2">
          <h1 className="text-3xl font-extrabold text-[#A68868]">SmartLink Stationary</h1>
          <p className="text-lg font-light text-[#071739]">Where Creativity Meets Innovation</p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4 text-[#071739]">Sign Up</h2>

        {/* Sign-up form */}
        <form onSubmit={handleSubmit}>
          {SIGNUP_FIELDS.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-medium text-[#071739]">{field.placeholder.split(' ')[0]}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full p-3 border border-[#A68868] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#A68868] transition-all duration-300"
                required
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-[#A68868] text-white font-bold py-2 px-4 rounded-full hover:bg-[#8f725a] transition-all duration-300">
            Sign Up
          </button>
        </form>

        {/* Login Option Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-[#071739]">
            Already have an account?{' '}
            <Link to="/loginpg" className="text-[#A68868] hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
