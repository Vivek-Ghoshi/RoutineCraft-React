import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProgressTracker = ({ currentWeek, totalWeeks, milestones }) => {
  const [progress, setProgress] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    // Animate progress on load
    const percentage = (currentWeek / totalWeeks) * 100;
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentWeek, totalWeeks]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#F9FAFB] dark:bg-[#1F2937] rounded-xl shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[#111827] text-xl font-semibold mb-2">
          Your Progress
        </h2>
        <p className="text-[#6B7280]">
          Week {currentWeek} of {totalWeeks}
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="relative pt-8 pb-12">
        {/* Main Progress Bar */}
        <div className="h-3 bg-[#E5E7EB] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6366F1] transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Milestone Markers */}
       <div className="absolute top-0 left-0 w-full">
          {milestones.map((milestone, index) => {
            const position = (milestone.week / totalWeeks) * 100;
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2"
                style={{ left: `${position}%` }}
              >
                {/* Milestone Dot */}
                <button
                  className={`w-6 h-6 rounded-full border-4 
                    transition-all duration-300 relative
                    ${milestone.week <= currentWeek
                      ? 'border-[#14B8A6] bg-[#FFFFFF]'
                      : 'border-[#FACC15] bg-[#F9FAFB]'
                    }
                    hover:scale-110 focus:outline-none focus:ring-2 
                    focus:ring-[#14B8A6] focus:ring-offset-2`}
                  onMouseEnter={() => setActiveTooltip(index)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(index)}
                >
                  {/* Tooltip */}
                  <div
                    className={`absolute bottom-full mb-2 w-48 
                      transform -translate-x-1/2 left-1/2
                      ${activeTooltip === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                      transition-opacity duration-200`}
                  >
                    <div className="bg-[#6366F1] text-white p-3 rounded-lg shadow-lg text-sm">
                      <p className="font-medium mb-1">Week {milestone.week}</p>
                      <p className="text-[#D1D5DB]">{milestone.description}</p>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-3 h-3 bg-[#6366F1] transform rotate-45 
                      translate-x-[90px] -mt-1.5"
                    />
                  </div>
                </button>

                {/* Week Label */}
                <div className="absolute top-8 transform -translate-x-1/2 
                  w-max text-sm text-[#6B7280] mt-2"
                >
                  Week {milestone.week}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Milestone Info */}
      <div className="mt-6 p-4 bg-[#F9FAFB] rounded-lg">
        <h3 className="text-[#111827] font-medium mb-2">
          Current Milestone
        </h3>
        <p className="text-[#6B7280]">
          {milestones.find((m) => m.week >= currentWeek)?.description}
        </p>
      </div>
    </div>
  );
};

ProgressTracker.propTypes = {
  currentWeek: PropTypes.number.isRequired,
  totalWeeks: PropTypes.number.isRequired,
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgressTracker;
