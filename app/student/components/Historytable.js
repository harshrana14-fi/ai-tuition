import React from 'react';

export default function HistoryTable({ history }) {
  if (history.length === 0) {
    return <p className="text-gray-500">No questions submitted yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border rounded-md overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left px-4 py-2">Question</th>
            <th className="text-left px-4 py-2">File</th>
            <th className="text-left px-4 py-2">Submitted</th>
            <th className="text-left px-4 py-2">AI Response</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2 max-w-sm truncate">{entry.question}</td>
              <td className="px-4 py-2">{entry.fileName}</td>
              <td className="px-4 py-2">{entry.date}</td>
              <td className="px-4 py-2 text-green-600">{entry.aiResponse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
