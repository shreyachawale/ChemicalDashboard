import React, { useState } from 'react';
import { Trophy, Target, MessageCircle, ChevronDown } from 'lucide-react';

const TopMetrics = () => {
  const [showConversionsDropdown, setShowConversionsDropdown] = useState(false);
  const [showSentimentDropdown, setShowSentimentDropdown] = useState(false);
  const [selectedSalesPerson, setSelectedSalesPerson] = useState<string | null>(null);
  const [selectedSentiment, setSelectedSentiment] = useState<string | null>(null);

  const salesPeople = ['All Sales Reps', 'John Smith', 'Sarah Johnson', 'Mike Chen'];
  const sentimentTypes = ['All Sentiments', 'Positive', 'Neutral', 'Negative'];

  const handleSalesPersonSelect = (person: string) => {
    setSelectedSalesPerson(person === 'All Sales Reps' ? null : person);
    setShowConversionsDropdown(false);
  };

  const handleSentimentSelect = (sentiment: string) => {
    setSelectedSentiment(sentiment === 'All Sentiments' ? null : sentiment);
    setShowSentimentDropdown(false);
  };

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Top Conversions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Trophy className="text-yellow-500" size={20} />
          <h3 className="text-base font-semibold text-gray-900">Top Actions</h3>
        </div>
        <div className="space-y-3">
          {(selectedSalesPerson 
            ? conversionData.filter(item => item.salesman === selectedSalesPerson)
            : conversionData).map((item, index) => (
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <MessageCircle className="text-blue-500" size={20} />
            <h3 className="text-base font-semibold text-gray-900">Sentiment Alerts</h3>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowSentimentDropdown(!showSentimentDropdown)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-150 flex items-center space-x-1
                ${selectedSentiment ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              <span>Sentiment</span>
              <span className="text-xs ml-1">
                {selectedSentiment ? `(${selectedSentiment})` : ''}
              </span>
              <ChevronDown 
                size={14} 
                className={`ml-1 transition-transform duration-200 ${showSentimentDropdown ? 'transform rotate-180' : ''}`} 
              />
            </button>

            {showSentimentDropdown && (
              <div className="absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1 max-h-48 overflow-auto" role="menu" aria-orientation="vertical">
                  {sentimentTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleSentimentSelect(type)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        selectedSentiment === type ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-3">
          {(selectedSentiment
            ? sentimentAlerts.filter(alert => alert.sentiment === selectedSentiment)
            : sentimentAlerts).map((alert, index) => (
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