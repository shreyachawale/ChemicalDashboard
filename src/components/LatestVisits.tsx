import React, { useState } from "react";
import { Calendar, User, AlertCircle, FileText, Target, Clock } from "lucide-react";

const LatestVisits = () => {
  const visits = [
    {
      customerName: "Acme Chemical Corp",
      date: "2025-01-15",
      sentiment: "Positive",
      action: "Follow-up",
      purpose: "Product Demo",
      notes: "Interested in bulk orders",
      sentimentColor: "text-green-600 bg-green-100",
      latestSummary: "Toulene, Benzene, Tergada",
      alerts: "No immediate alerts.",
      sentimentAction: "Send proposal and discount structure.",
      nextVisitReport: "Schedule follow-up by Jan 25."
    },
    {
      customerName: "Industrial Solutions Ltd",
      date: "2025-01-14",
      sentiment: "Neutral",
      action: "Quote Sent",
      purpose: "Price Inquiry",
      notes: "Comparing competitors",
      sentimentColor: "text-yellow-600 bg-yellow-100",
      latestSummary: "Toulene, Benzene, Tergada",
      alerts: "Might consider competitor pricing.",
      sentimentAction: "Follow up with revised quote.",
      nextVisitReport: "Check-in call next week."
    },
    {
      customerName: "ChemTech Industries",
      date: "2025-01-13",
      sentiment: "Positive",
      action: "Contract Review",
      purpose: "Contract Negotiation",
      notes: "Ready to close deal",
      sentimentColor: "text-green-600 bg-green-100",
      latestSummary: "Toulene, Benzene, Tergada",
      alerts: "None.",
      sentimentAction: "Finalize contract draft.",
      nextVisitReport: "On-site visit Feb 1."
    },
    {
      customerName: "Global Chemicals Inc",
      date: "2025-01-12",
      sentiment: "Negative",
      action: "Schedule Meeting",
      purpose: "Issue Resolution",
      notes: "Quality concerns raised",
      sentimentColor: "text-red-600 bg-red-100",
      latestSummary: "Toulene, Benzene, Tergada",
      alerts: "High priority - could lose client.",
      sentimentAction: "Resolve issue within a week.",
      nextVisitReport: "Meeting on Jan 18."
    },
    {
      customerName: "EnviroChem Pvt Ltd",
      date: "2025-01-10",
      sentiment: "Positive",
      action: "Order Taken",
      purpose: "Bulk Order",
      notes: "Large shipment confirmed",
      sentimentColor: "text-green-600 bg-green-100",
      latestSummary: "Toulene, Benzene, Tergada",
      alerts: "Monitor supply chain delays.",
      sentimentAction: "Ensure timely delivery.",
      nextVisitReport: "Post-delivery satisfaction check."
    },
    {
      customerName: "BioTech Labs",
      date: "2025-01-09",
      sentiment: "Neutral",
      action: "Follow-up",
      purpose: "Sample Testing",
      notes: "Samples sent for testing",
      sentimentColor: "text-yellow-600 bg-yellow-100",
      latestSummary: "Toulene, Benzene, Tergada",
      alerts: "If delayed, risk losing interest.",
      sentimentAction: "Check with lab for ETA.",
      nextVisitReport: "Lab follow-up visit Jan 20."
    }
  ];

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[550px] flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Calendar className="text-blue-600" size={20} />
          <h2 className="text-base font-semibold text-gray-900">Latest Visits</h2>
        </div>
      </div>

      <div className="overflow-auto flex-1">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sentiment</th>
              <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Summary</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {visits.map((visit, index) => (
              <React.Fragment key={index}>
                <tr
                  className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                  onClick={() => toggleRow(index)}
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="text-gray-400 mr-1" size={14} />
                      <span className="text-sm font-medium text-gray-900">{visit.customerName}</span>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(visit.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${visit.sentimentColor}`}
                    >
                      {visit.sentiment}
                    </span>
                  </td>
                  <td className="hidden sm:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {visit.action}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    ${(Math.random() * 50000 + 10000).toFixed(0)}
                  </td>
                </tr>

                {expandedRow === index && (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <FileText className="text-blue-500 mt-1" size={18} />
                          <div>
                            <p className="font-semibold text-gray-800">Chemicals</p>
                            <p className="text-sm text-gray-600">{visit.latestSummary}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="text-red-500 mt-1" size={18} />
                          <div>
                            <p className="font-semibold text-gray-800">Alerts</p>
                            <p className="text-sm text-gray-600">{visit.alerts}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Target className="text-green-500 mt-1" size={18} />
                          <div>
                            <p className="font-semibold text-gray-800">Sentiment Action</p>
                            <p className="text-sm text-gray-600">{visit.sentimentAction}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="text-purple-500 mt-1" size={18} />
                          <div>
                            <p className="font-semibold text-gray-800">Next Visit Report</p>
                            <p className="text-sm text-gray-600">{visit.nextVisitReport}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestVisits;
