'use client';

import React, { useState, useEffect } from 'react';
import SmartSidebar from '@/app/student/components/edcno/SmartSidebar';
import StudentNavbar from '@/app/student/components/StudentNavbar';
import DashboardCard from '@/app/student/components/DashboardCard';
import QuestionUploadForm from '@/app/student/components/Questionuploadform';
import HistoryTable from '@/app/student/components/Historytable';

import ExamWhisperer from '@/app/student/components/edcno/ExamWhisperer';
import LanguageBuddy from '@/app/student/components/edcno/LanguageBuddy';
import ParentVoiceAI from '@/app/student/components/edcno/ParentAssistant';
import GoalSetter from './components/edcno/GoalSetter';
import QuizZone from './components/edcno/QuizZone';

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState(null);
  const [history, setHistory] = useState([]);

  const handleNewSubmission = (entry) => {
    setHistory((prev) => [entry, ...prev]);
  };

  const handleToolSelect = (toolKey) => {
    setSelectedTool(toolKey);
    setSidebarOpen(false); // auto close on tool click
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTool]);

  return (
    <div className="flex h-screen overflow-hidden bg-blue-50">
      <SmartSidebar
        open={sidebarOpen}
        toggleOpen={() => setSidebarOpen(!sidebarOpen)}
        onToolSelect={handleToolSelect}
      />

      <div
        className={`flex-1 transition-all duration-300 ease-in-out overflow-y-auto ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <StudentNavbar />

        <main className="max-w-7xl mx-auto px-4 pt-24 pb-10">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Hello, Harsh 👋</h1>

          {/* ✅ Render selected smart tool with onBack */}
          {selectedTool === 'exam' && <ExamWhisperer onBack={() => setSelectedTool(null)} />}
          {selectedTool === 'lang' && <LanguageBuddy onBack={() => setSelectedTool(null)} />}
          {selectedTool === 'parent' && <ParentVoiceAI onBack={() => setSelectedTool(null)} />}
          {selectedTool === 'goal' && <GoalSetter onBack={() => setSelectedTool(null)} />}
          {selectedTool === 'quiz' && <QuizZone onBack={() => setSelectedTool(null)} />}

          {/* ✅ Default Dashboard View */}
          {!selectedTool && (
            <>
              <div className="grid md:grid-cols-4 gap-6 mb-10">
                <DashboardCard title="Your Class" value="Class 9" icon="📚" />
                <DashboardCard title="Live Sessions" value="2 Today" icon="📺" />
                <DashboardCard title="Doubts Solved" value={history.length} icon="💡" />
                <DashboardCard title="Streak" value="4 Days 🔥" icon="🔥" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4 text-blue-700">Upcoming Class</h2>
                  <p>📆 <b>Maths AI Class</b> — Today at 6:00 PM</p>
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

              <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">Submit a New Question</h2>
                <QuestionUploadForm onSubmit={handleNewSubmission} />
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">Your Previous Questions</h2>
                <HistoryTable history={history} />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
