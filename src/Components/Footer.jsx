import React from 'react';
import logo from '../../public/assets/logo.png'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-8 text-sm font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Logo and Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Hero.IO Logo" className="h-6" />
          <span className="text-purple-600 font-semibold">HERO.IO</span>
        </div>

        {/* Center: Footer Links */}
        <div className="flex space-x-6">
          <a href="/" className="text-gray-800 hover:text-purple-600">Home</a>
          <a href="/apps" className="text-gray-800 hover:text-purple-600">Apps</a>
          <a href="/installation" className="text-gray-800 hover:text-purple-600">Installation</a>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-500 text-xs text-center md:text-right">
          © {new Date().getFullYear()} HERO.IO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
