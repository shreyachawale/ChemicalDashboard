import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

const PerformanceCharts = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="text-blue-600" size={20} />
        <h3 className="text-base font-semibold text-gray-900">Business Analytics</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Trend Line Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Visits Trend</h4>
          <div className="h-48 flex items-end justify-center space-x-6">
            {/* Simulated line chart with bars */}
            {[
              { month: 'Jan', value: 65 },
              { month: 'Feb', value: 78 },
              { month: 'Mar', value: 82 },
              { month: 'Apr', value: 74 },
              { month: 'May', value: 88 },
            ].map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm mb-2 transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${data.value * 1.5}px` }}
                ></div>
                <span className="text-xs text-gray-600">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Chemicals Bar Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Top Chemicals</h4>
          <div className="space-y-3">
            {[
              { name: 'Toluene', percentage: 85, color: 'bg-teal-500' },
              { name: 'Tergada', percentage: 72, color: 'bg-blue-500' },
              { name: 'XYZ Compound', percentage: 58, color: 'bg-purple-500' },
              { name: 'Benzene', percentage: 45, color: 'bg-orange-500' },
            ].map((chemical, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs font-medium text-gray-700 mb-1">
                  <span>{chemical.name}</span>
                  <span>{chemical.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${chemical.color} h-2 rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${chemical.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;