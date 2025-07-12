

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-70 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-yellow-400 transition-colors">Windlight Island</Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/features" className="hover:text-yellow-400">Features</Link></li>
          <li><Link to="/media" className="hover:text-yellow-400">Media</Link></li>
          <li><Link to="/download" className="hover:text-yellow-400">Download</Link></li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-yellow-400 hover:border-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-4 pb-4 pt-2">
          <ul className="flex flex-col space-y-4 items-center">
            <li><Link to="/features" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Features</Link></li>
            <li><Link to="/media" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Media</Link></li>
            <li><Link to="/download" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Download</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
