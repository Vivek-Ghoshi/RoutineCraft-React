import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminAnalytics = () => {
  const [counts, setCounts] = useState({
    totalRoutines: 0,
    activeUsers: 0,
    completionRate: 0
  });

  // Animate counter on load
  useEffect(() => {
    const targetCounts = {
      totalRoutines: 45,
      activeUsers: 128,
      completionRate: 76
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        totalRoutines: Math.round((targetCounts.totalRoutines * step) / steps),
        activeUsers: Math.round((targetCounts.activeUsers * step) / steps),
        completionRate: Math.round((targetCounts.completionRate * step) / steps)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const barChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'User Engagement',
      data: [65, 78, 86, 82],
      backgroundColor: '#6366F1',
      hoverBackgroundColor: '#4F46E5'
    }]
  };

  const pieChartData = {
    labels: ['Completed', 'In Progress', 'Abandoned'],
    datasets: [{
      data: [63, 28, 9],
      backgroundColor: ['#14B8A6', '#6366F1', '#FACC15']
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  return (
    <div className="min-h-screen   bg-[#F9FAFB] dark:bg-[#1F2937] p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] text-transparent bg-clip-text mb-8">
        Dashboard Analytics
      </h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#6366F1]/20">
          <h3 className="text-[#111827] text-sm font-medium mb-2">
            Total Routines
          </h3>
          <p className="text-3xl font-bold text-[#6366F1]">
            {counts.totalRoutines}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#14B8A6]/20">
          <h3 className="text-[#111827] text-sm font-medium mb-2">
            Active Users
          </h3>
          <p className="text-3xl font-bold text-[#14B8A6]">
            {counts.activeUsers}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#FACC15]/20">
          <h3 className="text-[#111827] text-sm font-medium mb-2">
            Completion Rate
          </h3>
          <p className="text-3xl font-bold text-[#FACC15]">
            {counts.completionRate}%
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#6366F1]/20">
          <h3 className="text-[#6366F1] font-medium mb-4">
            Weekly Engagement
          </h3>
          <div className="h-[300px]">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#14B8A6]/20">
          <h3 className="text-[#14B8A6] font-medium mb-4">
            Routine Completion Status
          </h3>
          <div className="h-[300px]">
            <Pie data={pieChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;






























// import React, { useEffect, useState } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AdminAnalytics = () => {
//   const [counts, setCounts] = useState({
//     totalRoutines: 0,
//     activeUsers: 0,
//     completionRate: 0
//   });

//   // Animate counter on load
//   useEffect(() => {
//     const targetCounts = {
//       totalRoutines: 45,
//       activeUsers: 128,
//       completionRate: 76
//     };

//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const interval = duration / steps;

//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       setCounts({
//         totalRoutines: Math.round((targetCounts.totalRoutines * step) / steps),
//         activeUsers: Math.round((targetCounts.activeUsers * step) / steps),
//         completionRate: Math.round((targetCounts.completionRate * step) / steps)
//       });

//       if (step >= steps) clearInterval(timer);
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const barChartData = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//     datasets: [{
//       label: 'User Engagement',
//       data: [65, 78, 86, 82],
//       backgroundColor: '#86a789',
//       hoverBackgroundColor: '#2c4a34'
//     }]
//   };

//   const pieChartData = {
//     labels: ['Completed', 'In Progress', 'Abandoned'],
//     datasets: [{
//       data: [63, 28, 9],
//       backgroundColor: ['#2c4a34', '#86a789', '#d4c9a8']
//     }]
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom'
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#faf7f2] p-6">
//       {/* Header */}
//       <h1 className="text-2xl font-semibold text-[#2c4a34] mb-8">
//         Dashboard Analytics
//       </h1>

//       {/* Metrics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white rounded-xl p-6 shadow-sm border border-[#86a789]/20">
//           <h3 className="text-[#4a6741] text-sm font-medium mb-2">
//             Total Routines
//           </h3>
//           <p className="text-3xl font-bold text-[#2c4a34]">
//             {counts.totalRoutines}
//           </p>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm border border-[#86a789]/20">
//           <h3 className="text-[#4a6741] text-sm font-medium mb-2">
//             Active Users
//           </h3>
//           <p className="text-3xl font-bold text-[#2c4a34]">
//             {counts.activeUsers}
//           </p>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm border border-[#86a789]/20">
//           <h3 className="text-[#4a6741] text-sm font-medium mb-2">
//             Completion Rate
//           </h3>
//           <p className="text-3xl font-bold text-[#2c4a34]">
//             {counts.completionRate}%
//           </p>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-sm border border-[#86a789]/20">
//           <h3 className="text-[#2c4a34] font-medium mb-4">
//             Weekly Engagement
//           </h3>
//           <div className="h-[300px]">
//             <Bar data={barChartData} options={chartOptions} />
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm border border-[#86a789]/20">
//           <h3 className="text-[#2c4a34] font-medium mb-4">
//             Routine Completion Status
//           </h3>
//           <div className="h-[300px]">
//             <Pie data={pieChartData} options={chartOptions} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAnalytics; 