import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.png'; // ✅ Correct import
import githubIcon from '../../public/assets//git.jpg'; // ✅ Correct import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 🔄 Toggle state

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 font-sans">
      {/* Top section: Logo, Links (desktop), Toggle button (mobile) */}
      <div className="flex items-center justify-between">
        {/* Left: Logo and brand name */}
        <a href="/">
          <div className="flex items-center space-x-2">
          <img src={logo} alt="Hero.IO Logo" className="h-7" />
          <span className="text-purple-600 font-semibold">HERO.IO</span>
        </div></a>
        

        {/* Center: Navigation Links (desktop only) */}
        <div className="hidden md:flex space-x-6">
          
          <Link to="/" className="text-sm text-gray-800 hover:text-purple-600">Home</Link>
          <Link to="/Apps" className="text-sm text-gray-800 hover:text-purple-600">Apps</Link>
          <Link to="/Installation" className="text-sm text-gray-800 hover:text-purple-600">Installation</Link>
          
        </div>

        {/* Right: Contribute Button (desktop only) */}
        <div className="hidden md:block">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded"
          >
            <img src={githubIcon} alt="GitHub" className="h-4" />
            <span>Contribute</span>
          </a>
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="/" className="block text-sm text-purple-600 underline">Home</a>
          <a href="/apps" className="block text-sm text-gray-800 hover:text-purple-600">Apps</a>
          <a href="/installation" className="block text-sm text-gray-800 hover:text-purple-600">Installation</a>
          <a
            href="https://github.com/DipuGH/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded"
          >
            <img src={githubIcon} alt="GitHub" className="h-4" />
            <span>Contribute</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
