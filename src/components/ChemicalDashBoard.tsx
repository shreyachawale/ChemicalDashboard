import React from "react";
import {
  ClipboardList,
  Users,
  Beaker,
  AlertTriangle,
  ThumbsUp,
  Smile,
  PieChart,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: any;
  color: "blue" | "green" | "orange" | "purple" | "red";
}

const colorClasses = {
  blue: {
    bg: "from-blue-50 to-blue-100",
    icon: "bg-blue-500 text-white",
    text: "text-blue-700",
  },
  green: {
    bg: "from-green-50 to-green-100",
    icon: "bg-green-500 text-white",
    text: "text-green-700",
  },
  orange: {
    bg: "from-orange-50 to-orange-100",
    icon: "bg-orange-500 text-white",
    text: "text-orange-700",
  },
  purple: {
    bg: "from-purple-50 to-purple-100",
    icon: "bg-purple-500 text-white",
    text: "text-purple-700",
  },
  red: {
    bg: "from-red-50 to-red-100",
    icon: "bg-red-500 text-white",
    text: "text-red-700",
  },
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon, color }) => {
  const classes = colorClasses[color];

  return (
    <div className={`bg-gradient-to-br ${classes.bg} p-6 rounded-xl shadow-sm border border-white/60 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className={`text-2xl font-bold ${classes.text}`}>{value}</p>
        </div>
        <div className={`${classes.icon} p-3 rounded-lg shadow-sm`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
};

export default function Preview() {
  const metrics = [
    {
      title: "Total Visits",
      value: 318,
      icon: ClipboardList,
      color: "blue",
    },
    {
      title: "Sales Reps",
      value: 76,
      icon: Users,
      color: "blue",
    },
    {
      title: "Chemicals Discussed",
      value: 248,
      icon: Beaker,
      color: "blue",
    },
    {
      title: "Negative Sentiment Counts",
      value: 42,
      icon: AlertTriangle,
      color: "red",
    },
    {
      title: "Good CVR Quality %",
      value: "71.7%",
      icon: ThumbsUp,
      color: "orange",
    },
    {
      title: "Positive Sentiment %",
      value: "69.2%",
      icon: Smile,
      color: "green",
    },
    {
      title: "New Customers",
      value: "15.7%",
      icon: PieChart,
      color: "purple",
    },
  ] as const;

  return (
    <div>
      {/* Remove min-h-screen, bg-gray-50, and p-8 for tighter layout */}
      <h1 className="text-2xl font-semibold mb-2">Metric Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} {...metric} />
        ))}
      </div>
    </div>
  );
}