'use client';

import React, { useState } from 'react';

export default function LiveClassManager() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: 'Algebra - Basics',
      date: '2025-06-25',
      time: '5:00 PM',
      link: 'https://zoom.us/algebra-session',
    },
    {
      id: 2,
      title: 'Cell Structure - Biology',
      date: '2025-06-26',
      time: '11:00 AM',
      link: 'https://zoom.us/cell-bio',
    },
  ]);

  return (
    <div className="space-y-4">
      {classes.map((cls) => (
        <div
          key={cls.id}
          className="bg-gray-50 p-4 rounded-lg border flex justify-between items-start"
        >
          <div>
            <h3 className="font-semibold text-indigo-700 text-lg">{cls.title}</h3>
            <p className="text-sm text-gray-600">{cls.date} at {cls.time}</p>
          </div>
          <a
            href={cls.link}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Start Class
          </a>
        </div>
      ))}
    </div>
  );
}
