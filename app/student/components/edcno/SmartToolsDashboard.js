'use client';
import React, { useState } from 'react';
import StudentNavbar from './components/StudentNavbar';
import DashboardCard from './components/DashboardCard';
import QuestionUploadForm from './components/QuestionUploadForm';
import HistoryTable from './components/HistoryTable';
import SmartSidebar from './components/edcno/SmartSidebar';

export default function StudentDashboard() {
  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex relative min-h-screen bg-blue-50">
      <SmartSidebar open={sidebarOpen} toggleOpen={toggleSidebar} />

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <StudentNavbar />

        <main className="p-6 pt-24">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Hello, Harsh 👋</h1>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <DashboardCard title="Your Class" value="Class 9" icon="📚" />
            <DashboardCard title="Live Sessions" value="2 Today" icon="📺" />
            <DashboardCard title="Doubts Solved" value={history.length} icon="💡" />
            <DashboardCard title="Streak" value="4 Days 🔥" icon="🔥" />
          </div>

          {/* Upcoming Class + Quick Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Upcoming Class</h2>
              <p>📅 <b>Maths AI Class</b> — Today at 6:00 PM</p>
              <p>📍Join via dashboard or mobile app.</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Quick Links</h2>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md">Ask a Doubt</button>
                <button className="w-full bg-gray-100 text-blue-700 py-2 rounded-md">My Progress</button>
                <button className="w-full bg-indigo-500 text-white py-2 rounded-md">Practice AI Quiz</button>
              </div>
            </div>
          </div>

          {/* Ask Question */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Submit a New Question</h2>
            <QuestionUploadForm onSubmit={(entry) => setHistory([entry, ...history])} />
          </div>

          {/* History Table */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-20">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Your Previous Questions</h2>
            <HistoryTable history={history} />
          </div>
        </main>
      </div>
    </div>
  );
}
