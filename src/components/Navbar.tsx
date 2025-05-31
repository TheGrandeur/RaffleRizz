import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/legal', label: 'Legal & Fairness' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold font-['Poppins'] gradient-text"
            onClick={() => setIsMobileMenuOpen(false)} // close mobile menu on logo click
          >
            Rafflerizz 🎲
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-purple-500 ${
                  location.pathname === item.path
                    ? 'text-purple-500'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-purple-500 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 font-medium transition-all duration-300 hover:text-purple-500 ${
                  location.pathname === item.path
                    ? 'text-purple-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)} // close after click
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;