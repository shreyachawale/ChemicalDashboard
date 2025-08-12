import React from 'react';
import { Trophy, Target, MessageCircle } from 'lucide-react';

const TopMetrics = () => {
  const conversionData = [
    { salesman: 'John Smith', conversion: '92%'},
    { salesman: 'Sarah Johnson', conversion: '94%'},
    { salesman: 'Mike Chen', conversion: '96%'},
    // { salesman: 'Mike Chen', date: '2025-01-13', purpose: 'Follow-up', conversion: '96%', company : 'ChemTech Ltd' },
  ];

  const sentimentAlerts = [
    { customer: 'Acme Corp', date: '2025-01-15', purpose: 'Quality Review', sentiment: 'Positive', color: 'text-green-600' },
    { customer: 'TechChem Ltd', date: '2025-01-14', purpose: 'Price Discussion', sentiment: 'Neutral', color: 'text-yellow-600' },
    { customer: 'Global Inc', date: '2025-01-13', purpose: 'Complaint', sentiment: 'Negative', color: 'text-red-600' },
  ];

  return (
    <div className="space-y-4">
      {/* Top Conversions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Trophy className="text-yellow-500" size={20} />
          <h3 className="text-base font-semibold text-gray-900">Top Actions</h3>
        </div>
        <div className="space-y-3">
          {conversionData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors duration-150">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{item.salesman}</div>
                {/* <div className="text-xs text-gray-600">{item.purpose} • {new Date(item.date).toLocaleDateString()}</div> */}
                <div className="text-xs font-medium text-gray-700">{item.company}</div>
              </div>
              <div className="text-sm font-bold text-green-600">{item.conversion}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sentiment Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <MessageCircle className="text-blue-500" size={20} />
          <h3 className="text-base font-semibold text-gray-900">Sentiment Alerts</h3>
        </div>
        <div className="space-y-3">
          {sentimentAlerts.map((alert, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors duration-150">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{alert.customer}</div>
                <div className="text-xs text-gray-600">{alert.purpose} • {new Date(alert.date).toLocaleDateString()}</div>
              </div>
              <div className={`text-xs font-semibold ${alert.color}`}>
                {alert.sentiment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMetrics;