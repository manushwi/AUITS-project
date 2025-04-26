import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

  return (
    <footer className="bg-primary text-white">
      {/* Top Text */}
      <div className="border-b border-gray-700 px-6 py-8 max-w-7xl mx-auto text-center md:text-left">
        <p className="text-sm md:text-base">
          Whether you’re looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help. Contact us today to start saving on your energy bills and enjoy reliable connectivity from the leading solar and cable companies in the north India and Uttar Pradesh area. Snag the best deals with us and embrace a brighter and more connected future.
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12 max-w-7xl mx-auto text-sm border-b border-gray-700">
        {/* Left About */}
        <div className="space-y-4">
          <p>
            Contact us today to explore our services and take advantage of the great deals available from the leading solar and cable companies in the north India and Uttar Pradesh area. Let us be your trusted partner in finding the best solutions for your energy and connectivity needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
          <NavLink to={'/'} onClick={()=>{scrollTo(0,0)}}>
                <li className='py-1 hover:text-white ease-in'>Home</li>
            </NavLink>
            <NavLink to={'/About'} onClick={()=>{scrollTo(0,0)}}>
                <li className='py-1 hover:text-white ease-in'>About Us</li>
            </NavLink>
            <NavLink to={'/Blog'}  onClick={()=>{ scrollTo(0,0)}} >
                <li className='py-1 hover:text-white ease-in'>Blogs</li>
            </NavLink>
            <NavLink to={'/Products'} onClick={()=>{scrollTo(0,0)}}>
                <li className='py-1 hover:text-white ease-in'>Products</li>
            </NavLink>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300 ">
            <li className='hover:text-white ease-in'>Solar Solution</li>
            <li className='hover:text-white ease-in'>Cable Services</li>
            <li className='hover:text-white ease-in'>Deals and Promotions</li>
            <li className='hover:text-white ease-in'>Consultation and Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="flex space-x-4 text-white text-lg">
            <FaFacebookF className="hover:text-red-600 cursor-pointer" />
            <FaTwitter className="hover:text-red-600 cursor-pointer" />
            <FaInstagram className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} AUITS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;