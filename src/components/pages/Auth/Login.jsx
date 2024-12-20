import React, { useState, useEffect } from 'react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] dark:bg-[#1F2937] p-4">
      <div
        className={`w-full max-w-md transform transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Form Card */}
        <div className="bg-white dark:bg-[#374151] rounded-xl shadow-lg overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-[#6366F1] to-[#14B8A6] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white text-center">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-[#FACC15] text-center mt-2">
              {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 md:p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#111827] dark:text-white" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#14B8A6]/20
                    focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20
                    transition-all duration-300 bg-[#FFFFFF] dark:bg-[#374151] text-[#111827] dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#111827] dark:text-white" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#14B8A6]/20
                    focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20
                    transition-all duration-300 bg-[#FFFFFF] dark:bg-[#374151] text-[#111827] dark:text-white"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Confirm Password Field (Sign Up only) */}
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#111827] dark:text-white" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#14B8A6]/20
                      focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20
                      transition-all duration-300 bg-[#FFFFFF] dark:bg-[#374151] text-[#111827] dark:text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#14B8A6]
                  text-white font-medium text-lg shadow-sm
                  transform transition-all duration-300
                  hover:shadow-md hover:scale-[1.02] active:scale-[0.98]
                  disabled:opacity-70 disabled:cursor-not-allowed
                  ${isLoading ? 'animate-pulse' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            {/* Toggle Sign In/Sign Up */}
            <div className="text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#14B8A6] hover:text-[#6366F1] transition-colors duration-300"
              >
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
