import React from 'react';

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg flex items-center justify-between">
      <div>
        <h4 className="text-sm font-semibold opacity-80">{title}</h4>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <span className="text-4xl">{icon}</span>
    </div>
  );
}
