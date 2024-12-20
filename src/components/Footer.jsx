import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
      url: 'https://facebook.com',
    },
    {
      name: 'Twitter',
      icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
      url: 'https://twitter.com',
    },
    {
      name: 'Instagram',
      icon: <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a3 3 0 013 3v11a3 3 0 01-3 3h-11a3 3 0 01-3-3v-11a3 3 0 013-3z" />,
      url: 'https://instagram.com',
    },
    {
      name: 'LinkedIn',
      icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" />,
      url: 'https://linkedin.com',
    },
  ];

  return (
    <footer className="bg-blue-gray-900 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
          <span className='bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent text-2xl font-extrabold'> RoutineCraft </span>
            <p className="text-gray-300 max-w-xs">
              Empowering your daily routines with structured guidance and motivation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-teal-400 hover:text-indigo-500 hover:bg-teal-500 rounded-lg transition-all duration-200 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-teal-400 focus:border-gradient-to-r from-[#6366F1] to-[#14B8A6] focus:ring-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-white text-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-white rounded-lg transform transition-all duration-300 hover:bg-indigo-500 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© {currentYear} RoutineCraft. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
