'use client';

import React from 'react';
import TeacherNavbar from './components/TeacherNavbar';
import DoubtQueue from './components/DoubtQueue';
import LiveClassManager from './components/LiveClassManager';

export default function TeacherDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-20">
      <TeacherNavbar />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Welcome, Mr. Verma 👨‍🏫</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <StatsCard title="Pending Doubts" value="6" icon="❓" />
          <StatsCard title="Today's Classes" value="2" icon="🕐" />
          <StatsCard title="Total Students" value="48" icon="🎓" />
        </div>

        {/* Doubt Queue Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Student Doubts</h2>
          <DoubtQueue />
        </div>

        {/* Live Class Manager */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-20">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Manage Your Classes</h2>
          <LiveClassManager />
        </div>
      </div>
    </main>
  );
}

function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between border">
      <div>
        <h4 className="text-sm font-semibold text-gray-500">{title}</h4>
        <p className="text-2xl font-bold text-indigo-700 mt-1">{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  );
}
