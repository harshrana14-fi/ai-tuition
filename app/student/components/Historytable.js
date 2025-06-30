'use client';

import React from 'react';

export default function HistoryTable({ history }) {
  if (history.length === 0) {
    return <p className="text-gray-500">No questions submitted yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="bg-blue-100 text-blue-700">
            <th className="py-2 px-4 text-left">Question</th>
            <th className="py-2 px-4 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{item.text}</td>
              <td className="py-2 px-4 text-sm text-gray-600">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
