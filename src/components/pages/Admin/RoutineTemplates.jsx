import React, { useState, useEffect } from 'react';

const TemplateLibrary = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const templates = [
    {
      id: 1,
      name: "Morning Wellness Routine",
      duration: "8 weeks",
      category: "Wellness",
      description: "A comprehensive morning routine focusing on mindfulness and energy",
      milestoneCount: 6
    },
    {
      id: 2,
      name: "Strength Training Program",
      duration: "12 weeks",
      category: "Fitness",
      description: "Progressive strength building routine with weekly milestones",
      milestoneCount: 8
    },
    // Add more templates as needed
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1F2937] p-4 md:p-6">
      {/* Header Section */}
      <div className="max-w-7xl bg-[#F9FAFB] dark:bg-[#1F2937] mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-transparent bg-clip-text">
              Template Library
            </h1>
            <p className="text-[#6B7280] mt-1">
              Manage and customize your routine templates
            </p>
          </div>

          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-white rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Template
          </button>
        </div>
      </div>

      {/* Template Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <div
            key={template.id}
            className={`transform transition-all duration-500 ${
              isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#6366F1]/20 overflow-hidden">
              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#F9FAFB] text-[#111827] mb-3">
                      {template.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#111827] mb-2">
                      {template.name}
                    </h3>
                  </div>
                  <span className="text-[#14B8A6]">{template.duration}</span>
                </div>

                <p className="text-[#6B7280] mb-4">
                  {template.description}
                </p>

                <div className="flex items-center text-sm text-[#6B7280]">
                  <svg className="w-5 h-5 mr-2 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {template.milestoneCount} Milestones
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="px-6 py-2 bg-white text-[#6366F1] rounded-lg hover:bg-[#F9FAFB] transition-colors duration-200 font-medium">
                    Edit Template
                  </button>
                  <button className="block px-6 py-2 text-white hover:text-[#14B8A6] transition-colors duration-200">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;


























// import React, { useState, useEffect } from 'react';

// const TemplateLibrary = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const templates = [
//     {
//       id: 1,
//       name: "Morning Wellness Routine",
//       duration: "8 weeks",
//       category: "Wellness",
//       description: "A comprehensive morning routine focusing on mindfulness and energy",
//       milestoneCount: 6
//     },
//     {
//       id: 2,
//       name: "Strength Training Program",
//       duration: "12 weeks",
//       category: "Fitness",
//       description: "Progressive strength building routine with weekly milestones",
//       milestoneCount: 8
//     },
//     // Add more templates as needed
//   ];

//   return (
//     <div className="min-h-screen bg-[#faf7f2] p-4 md:p-6">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold text-[#2c4a34]">
//               Template Library
//             </h1>
//             <p className="text-[#4a6741] mt-1">
//               Manage and customize your routine templates
//             </p>
//           </div>

//           <button className="inline-flex items-center px-4 py-2 bg-[#2c4a34] 
//             text-white rounded-lg hover:bg-[#86a789] transition-colors duration-300
//             shadow-sm hover:shadow focus:outline-none focus:ring-2 
//             focus:ring-[#86a789]/50">
//             <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//             </svg>
//             Create Template
//           </button>
//         </div>
//       </div>

//       {/* Template Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {templates.map((template, index) => (
//           <div
//             key={template.id}
//             className={`transform transition-all duration-500 ${
//               isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
//             }`}
//             style={{ transitionDelay: `${index * 100}ms` }}
//           >
//             <div className="group relative bg-white rounded-xl shadow-sm 
//               hover:shadow-md transition-all duration-300 hover:-translate-y-1 
//               border border-[#86a789]/20 overflow-hidden">
              
//               {/* Card Content */}
//               <div className="p-6">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <span className="inline-block px-3 py-1 rounded-full text-sm 
//                       bg-[#faf7f2] text-[#4a6741] mb-3">
//                       {template.category}
//                     </span>
//                     <h3 className="text-xl font-semibold text-[#2c4a34] mb-2">
//                       {template.name}
//                     </h3>
//                   </div>
//                   <span className="text-[#86a789]">{template.duration}</span>
//                 </div>

//                 <p className="text-[#4a6741] mb-4">
//                   {template.description}
//                 </p>

//                 <div className="flex items-center text-sm text-[#4a6741]">
//                   <svg className="w-5 h-5 mr-2 text-[#86a789]" fill="none" 
//                     viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" 
//                       strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                   {template.milestoneCount} Milestones
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-[#2c4a34]/90 opacity-0 
//                 group-hover:opacity-100 transition-opacity duration-300 
//                 flex items-center justify-center">
//                 <div className="space-y-3 transform translate-y-2 
//                   group-hover:translate-y-0 transition-transform duration-300">
//                   <button className="px-6 py-2 bg-white text-[#2c4a34] rounded-lg 
//                     hover:bg-[#faf7f2] transition-colors duration-200 font-medium">
//                     Edit Template
//                   </button>
//                   <button className="block px-6 py-2 text-white hover:text-[#86a789] 
//                     transition-colors duration-200">
//                     Preview
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TemplateLibrary;
