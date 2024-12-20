import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Templates', path: '/admin/routine/template' },
    { name: 'New Routine', path: '/admin/routine/create' },
    { name: 'Analytics', path: '/admin/analysis' }
  ];

  const profileMenuItems = [
    { name: 'My Account', path: '/account' },
    { name: 'Settings', path: '/settings' },
    { name: 'Logout', path:'/', action: () => console.log('Logout clicked') }
  ];

  return (
    <nav
      className={`relative z-50 ${
        isDarkMode
          ? 'bg-gradient-to-r from-indigo-900 to-teal-700'
          : 'bg-gradient-to-r from-indigo-500 to-teal-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-white hover:scale-105 transform transition-transform">
             <span className='bg-gradient-to-r from-[#F1F5F9] to-[#14B8A6] bg-clip-text text-transparent'> RoutineCraft </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium text-white transition-colors duration-200
                  ${
                    location.pathname === link.path
                      ? 'after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-300'
                      : 'hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-300 hover:after:transition-all'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-white hover:bg-teal-600 bg-teal-400 transition-colors duration-200"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg text-white transition-colors duration-200"
              >
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://via.placeholder.com/32"
                  alt="Profile"
                />
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-xl shadow-lg border py-1">
                  {profileMenuItems.map((item) => (
                    item.path ? (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={item.action}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
