import React from 'react';
import { 
  Beaker, 
  Users,
  AlertTriangle,
  ThumbsUp,
  Target,
  PieChart,
  Smile,
  ClipboardList
} from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  unit?: string;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'stable';
  priority?: 'high' | 'medium' | 'low';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  icon, 
  value, 
  label, 
  unit, 
  change, 
  changeType,
  priority = 'medium'
}) => {
  const getPriorityStyles = () => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-l-red-500';
      case 'low':
        return 'border-l-4 border-l-green-500';
      default:
        return 'border-l-4 border-l-blue-500';
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-green-700';
      case 'decrease':
        return 'text-red-700';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className={`bg-white rounded-none shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out p-6 ${getPriorityStyles()} group`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
          {icon}
        </div>
        {change && (
          <span className={`text-xs font-mono ${getChangeColor()}`}>
            {change}
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-light text-gray-900 tracking-tight group-hover:text-black transition-colors duration-200">
            {value}
          </span>
          {unit && (
            <span className="text-sm text-gray-500 font-mono">
              {unit}
            </span>
          )}
        </div>
        <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
          {label}
        </div>
      </div>
    </div>
  );
};

const ChemicalDashboard: React.FC = () => {
  const metrics = [
  {
    icon: <ClipboardList size={24} />,
    value: "318",
    label: "Total Visits",
    change: null,
    changeType: null,
    priority: null
  },
  {
    icon: <Users size={24} />,
    value: "76",
    label: "Sales Reps",
    change: null,
    changeType: null,
    priority: null
  },
  {
    icon: <Beaker size={24} />,
    value: "248",
    label: "Chemicals Discussed",
    change: null,
    changeType: null,
    priority: null
  },
  {
    icon: <AlertTriangle size={24} />,
    value: "42",
    label: "Negative Sentiment Counts",
    change: null,
    changeType: null,
    priority: "high"
  },
  {
    icon: <ThumbsUp size={24} />,
    value: "71.7",
    label: "Good CVR Quality %",
    unit: "%",
    change: null,
    changeType: null,
    priority: "high"
  },
  {
    icon: <Smile size={24} />,
    value: "69.2",
    label: "Positive Sentiment %",
    unit: "%",
    change: null,
    changeType: null,
    priority: "medium"
  },
  {
    icon: <PieChart size={24} />,
    value: "15.7",
    label: "New Customers",
    unit: "%",
    change: null,
    changeType: null,
    priority: "high"
  },
  {
      icon: <Target size={24} />,
      value: '8',
      label: 'Quality Targets Met',
      change: '+2',
      changeType: 'increase' as const,
      priority: 'high' as const
  }
  ];

  return (
    <div className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* <div className="mb-12 animate-in fade-in duration-500">
          <div className="flex items-center space-x-4 mb-3">
            <div className="w-1 h-8 bg-blue-500"></div>
            <h1 className="text-2xl font-light text-gray-900 tracking-tight">
              Chemical Operations
            </h1>
          </div>
          <p className="text-gray-600 font-mono text-sm">
            Real-time laboratory metrics and performance indicators
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-700 delay-200">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="animate-in slide-in-from-bottom-4 fade-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MetricCard
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                unit={metric.unit}
                change={metric.change}
                changeType={metric.changeType}
                priority={metric.priority}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ChemicalDashboard;