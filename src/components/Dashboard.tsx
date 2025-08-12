import React from 'react';
import FilterHeader from './FilterHeader';
import LatestVisits from './LatestVisits';
import PerformanceCharts from './PerformanceCharts';
import TopMetrics from './TopMetrics';
import AlertsPanel from './AlertsPanel';
import UpcomingTasks from './UpcomingTasks';
import ChemicalDashboard from './ChemicalDashBoard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto p-6 space-y-6">
        {/* Header with Filters */}
        <FilterHeader />

        <ChemicalDashboard />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Charts */}
          <div className="lg:col-span-2">
            <PerformanceCharts />
          </div>
          
          {/* Alerts Panel */}
          <div className="lg:col-span-1">
            <AlertsPanel />
          </div>
        </div>
        
        {/* Latest Visits - Full Width */}
        <div className="w-full mb-6">
          <LatestVisits />
        </div>

        {/* Top Metrics - Full Width */}
        <div className="w-full">
          <TopMetrics />
        </div>

        {/* Bottom Section - Upcoming Tasks (Full Width) */}
        <UpcomingTasks />
      </div>
    </div>
  );
};

export default Dashboard;