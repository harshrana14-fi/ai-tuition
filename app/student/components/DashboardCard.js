'use client';

import React from 'react';

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition duration-300">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-medium text-blue-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
