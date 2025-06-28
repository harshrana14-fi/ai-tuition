'use client';

import React, { useState } from 'react';

const dummyDoubts = [
  {
    id: 1,
    student: 'Riya Sharma',
    question: 'Can you explain the difference between speed and velocity?',
    subject: 'Science',
    date: '2025-06-24',
  },
  {
    id: 2,
    student: 'Aarav Mehta',
    question: 'Factorise x² + 5x + 6.',
    subject: 'Math',
    date: '2025-06-24',
  },
];

export default function DoubtQueue() {
  const [doubts, setDoubts] = useState(dummyDoubts);

  const markSolved = (id) => {
    setDoubts((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="space-y-4">
      {doubts.length === 0 ? (
        <p className="text-gray-600">🎉 All doubts are resolved!</p>
      ) : (
        doubts.map((doubt) => (
          <div key={doubt.id} className="bg-gray-50 p-4 rounded-lg border flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-indigo-700">{doubt.student}</h3>
              <p className="text-sm text-gray-600 mb-1">{doubt.subject} • {doubt.date}</p>
              <p className="text-gray-800">{doubt.question}</p>
            </div>
            <button
              onClick={() => markSolved(doubt.id)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Mark as Solved
            </button>
          </div>
        ))
      )}
    </div>
  );
}
