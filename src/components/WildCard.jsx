import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1F2937] flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">
        {/* Animated 404 Icon */}
        <div className="mb-8 animate-bounce-slow">
          <svg 
            className="w-32 h-32 mx-auto text-[#6366F1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              className="animate-draw"
            />
          </svg>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-[#111827] dark:text-[#FFFFFF] animate-fade-in-up">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#6B7280] dark:text-[#D1D5DB] animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Page Not Found
          </h2>
          <p className="text-[#6B7280] max-w-sm mx-auto animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Oops! The page you're looking for seems to have wandered off the path.
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-white
              rounded-lg transform transition-all duration-300
              hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-[#F9FAFB] text-[#111827] dark:bg-[#374151] dark:text-[#FFFFFF]
              rounded-lg border-2 border-[#FACC15]/20 transform transition-all duration-300
              hover:border-[#FACC15] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FACC15]/50"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" 
              />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

// Add these custom animations to your Tailwind config
const customAnimations = {
  'bounce-slow': {
    '0%, 100%': {
      transform: 'translateY(-5%)',
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
    },
    '50%': {
      transform: 'translateY(0)',
      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  'fade-in-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(10px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  'draw': {
    '0%': {
      strokeDasharray: '1000',
      strokeDashoffset: '1000',
    },
    '100%': {
      strokeDasharray: '1000',
      strokeDashoffset: '0',
    },
  },
};

export default NotFound;
