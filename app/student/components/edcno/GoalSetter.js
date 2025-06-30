'use client';

import React, { useState } from 'react';

export default function GoalSetter() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ title: '', category: '', deadline: '' });

  const addGoal = () => {
    if (!newGoal.title || !newGoal.category || !newGoal.deadline) return;
    setGoals([...goals, { ...newGoal, progress: 0 }]);
    setNewGoal({ title: '', category: '', deadline: '' });
  };

  const updateProgress = (index, delta) => {
    const updated = [...goals];
    updated[index].progress = Math.min(100, Math.max(0, updated[index].progress + delta));
    setGoals(updated);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🎯 Goal Setter for Students</h1>

      {/* Create Goal Form */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">➕ Set a New Goal</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="e.g. Complete Maths Chapter 5"
            value={newGoal.title}
            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <select
            value={newGoal.category}
            onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Category</option>
            <option>📘 Academics</option>
            <option>💻 Skills</option>
            <option>🏃 Health</option>
            <option>🧘‍♂️ Personal</option>
          </select>
          <input
            type="date"
            value={newGoal.deadline}
            onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={addGoal}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          Add Goal
        </button>
      </div>

      {/* Goal List */}
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <div key={index} className="border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800">{goal.title}</h3>
            <p className="text-gray-700">Category: {goal.category}</p>
            <p className="text-gray-500 text-sm">Deadline: {goal.deadline}</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex-1 h-3 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <span className="text-sm text-blue-800 font-semibold">{goal.progress}%</span>
              <button
                onClick={() => updateProgress(index, 10)}
                className="text-sm bg-green-500 text-white px-2 py-1 rounded"
              >
                +10%
              </button>
              <button
                onClick={() => updateProgress(index, -10)}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded"
              >
                -10%
              </button>
            </div>
          </div>
        ))}
        {goals.length === 0 && (
          <p className="text-gray-500 text-center mt-6">No goals added yet. Set your first one above! 🚀</p>
        )}
      </div>

      {/* Tips Section */}
      <div className="mt-10 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">💡 Smart Goal-Setting Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Break large goals into daily mini-goals</li>
          <li>Use categories: Study, Skill, Health, Habit</li>
          <li>Track progress every evening</li>
          <li>Use visual progress to stay motivated</li>
          <li>Celebrate milestones — small wins matter!</li>
        </ul>
      </div>
    </div>
  );
}
