import React from 'react';
import { AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';

const AlertsPanel = () => {
  const alerts = [
    { 
      type: 'urgent', 
      message: 'Quality complaint from Global Chemicals Inc', 
      time: '10 min ago',
      icon: XCircle,
      bgColor: 'bg-red-50 border-red-200',
      iconColor: 'text-red-500'
    },
    { 
      type: 'warning', 
      message: 'Payment overdue from TechChem Solutions', 
      time: '2 hours ago',
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50 border-yellow-200',
      iconColor: 'text-yellow-500'
    },
    { 
      type: 'success', 
      message: 'Contract signed with Acme Chemical Corp', 
      time: '1 day ago',
      icon: CheckCircle,
      bgColor: 'bg-green-50 border-green-200',
      iconColor: 'text-green-500'
    },
    { 
      type: 'info', 
      message: 'Meeting scheduled with Industrial Solutions', 
      time: '2 days ago',
      icon: Clock,
      bgColor: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-3">
        <AlertTriangle className="text-orange-500" size={20} />
        <h3 className="text-base font-semibold text-gray-900">Alerts</h3>
        <div className="ml-auto">
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
            Red
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full ml-1">
            Green
          </span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full ml-1">
            Yellow
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => {
          const IconComponent = alert.icon;
          return (
            <div key={index} className={`p-3 border rounded transition-all duration-200 hover:shadow-sm ${alert.bgColor}`}>
              <div className="flex items-start space-x-2">
                <IconComponent className={alert.iconColor} size={16} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-medium">{alert.message}</p>
                  <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlertsPanel;