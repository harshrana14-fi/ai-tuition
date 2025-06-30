'use client';

import { useState } from 'react';

export default function GoalSetter() {
  const [goals, setGoals] = useState([
    'Finish 3 Science chapters',
    'Practice 5 Spanish conversations',
  ]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([newGoal, ...goals]);
      setNewGoal('');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🎯 Goal Setter</h2>
      <p className="text-gray-700 mb-4">Set your weekly learning goals and track them easily.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Goals */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-2">📅 Current Goals</h3>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        {/* Add New Goal */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-2">➕ Add a Goal</h3>
          <input
            type="text"
            placeholder="e.g., Complete 10 quizzes"
            className="w-full border border-blue-300 rounded-md px-3 py-2 mb-2"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button
            onClick={addGoal}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Goal
          </button>
        </div>
      </div>
    </div>
  );
}
