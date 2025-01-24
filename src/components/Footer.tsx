'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Shopee-Shopee</h2>
            <p className="text-gray-400">
              Discover the latest in fashion, home decor, and more. Quality products, amazing prices.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates, offers, and trends directly in your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-800"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 text-gray-400">
          <p>&copy; 2025 shopee-shopee. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
