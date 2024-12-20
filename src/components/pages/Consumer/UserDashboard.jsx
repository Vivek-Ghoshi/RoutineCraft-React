import React, { useState, useEffect } from 'react';
import ProgressTracker from './ProgressTracker';
import RoutineCard from './RoutineCard';
import NotificationPanel from './Notification';

const UserDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1F2937] p-4 md:p-6">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent  font-bold text-[#111827]">
              Welcome back, Sarah
            </h1>
            <p className="text-[#6B7280] mt-1">
              Track your progress and stay motivated
            </p>
          </div>
          <NotificationPanel />
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Routines Widget */}
        <div className={`transform transition-all duration-500 ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md 
            transition-all duration-300 hover:scale-[1.02] border border-[#14B8A6]/20">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                Active Routines
              </h2>
              <div className="space-y-4">
                {['Morning Wellness', 'Evening Meditation'].map((routine, index) => (
                  <div key={index} className="flex items-center justify-between 
                    p-3 bg-[#F9FAFB] rounded-lg">
                    <span className="text-[#6B7280] font-medium">{routine}</span>
                    <button className="text-[#14B8A6] hover:text-[#6366F1] 
                      transition-colors duration-200">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Summary Widget */}
        <div className={`transform transition-all duration-500 delay-100 ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md 
            transition-all duration-300 hover:scale-[1.02] border border-[#14B8A6]/20">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                Weekly Progress
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#6B7280]">Completion Rate</span>
                  <span className="text-[#6366F1] font-semibold">85%</span>
                </div>
                <div className="h-2 bg-[#F9FAFB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#14B8A6] rounded-full" 
                    style={{ width: '85%' }} />
                </div>
                <div className="pt-4 mt-4 border-t border-[#14B8A6]/10">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-[#111827]">12</p>
                      <p className="text-sm text-[#6B7280]">Days Streak</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#111827]">3</p>
                      <p className="text-sm text-[#6B7280]">Milestones</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Milestones Widget */}
        <div className={`transform transition-all duration-500 delay-200 ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md 
            transition-all duration-300 hover:scale-[1.02] border border-[#14B8A6]/20">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                Upcoming Milestones
              </h2>
              <div className="space-y-4">
                {[{
                  name: 'Complete Week 4',
                  date: '2 days left'
                }, {
                  name: 'Strength Goal',
                  date: '5 days left'
                }, {
                  name: 'Monthly Review',
                  date: '1 week left'
                }].map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#14B8A6] rounded-full" />
                    <div className="flex-1">
                      <p className="text-[#111827] font-medium">
                        {milestone.name}
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        {milestone.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
