import React from 'react';
import PropTypes from 'prop-types';

const RoutineCard = ({ routine }) => {
  return (
    <div 
      className="bg-white bg-[#F9FAFB] dark:bg-[#1F2937]  rounded-xl shadow-sm overflow-hidden
        transform transition-all duration-300 hover:shadow-md
        animate-fade-in border border-teal-500/20"
    >
      {/* Card Header */}
      <div className=" px-6 py-4 border-b border-teal-500/20">
        <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-1">
          Routine Name
        </h3>
        <span className="inline-block px-3 py-1 rounded-full text-sm 
          bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white">
          Routine Duration Weeks
        </span>
      </div>

      {/* Card Body */}
      <div className="px-6 py-4">
        <h4 className="text-[#111827] dark:text-gray-300 font-medium mb-3">Benefits</h4>
        {/* <ul className="space-y-2 mb-6">
          {routine.benefits.map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start text-[#6B7280] dark:text-gray-400"
            >
              <svg 
                className="w-5 h-5 mr-2 text-teal-500 flex-shrink-0 mt-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul> */}

        {/* Action Button */}
        <button
          className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg
            transform transition-all duration-200
            hover:bg-indigo-600 hover:scale-[1.02] active:scale-[0.98]
            focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Explore Routine
        </button>
      </div>
    </div>
  );
};

RoutineCard.propTypes = {
  routine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RoutineCard;
