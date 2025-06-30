'use client';

import React, { useState } from 'react';

export default function QuizZone() {
  const [quiz, setQuiz] = useState({ title: '', topic: '', questions: [] });
  const [currentQuestion, setCurrentQuestion] = useState({ question: '', options: ['', '', '', ''], answer: '' });
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Anaya Sharma', score: 95, avatar: '🧠' },
    { name: 'Kabir Mehra', score: 88, avatar: '🎯' },
    { name: 'Zoya Khan', score: 84, avatar: '🚀' },
    { name: 'Ravi Kumar', score: 80, avatar: '📘' },
  ]);
  const [studentName, setStudentName] = useState('');
  const [studentAvatar, setStudentAvatar] = useState('🎓');

  const handleQuestionAdd = () => {
    if (
      !currentQuestion.question ||
      currentQuestion.options.some((opt) => !opt) ||
      !currentQuestion.answer
    )
      return;

    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, currentQuestion],
    }));
    setCurrentQuestion({ question: '', options: ['', '', '', ''], answer: '' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">🧪 QuizZone: Build & Battle!</h1>

      {/* Student Profile */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl">{studentAvatar}</span>
        <input
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="border px-3 py-1 rounded"
        />
        <select
          value={studentAvatar}
          onChange={(e) => setStudentAvatar(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option>🎓</option>
          <option>🧠</option>
          <option>🚀</option>
          <option>📘</option>
          <option>🎯</option>
        </select>
      </div>

      {/* Quiz Setup */}
      <div className="mb-6 p-4 bg-purple-50 rounded-lg">
        <h2 className="text-xl font-semibold text-purple-800 mb-3">📝 Create Your Quiz</h2>
        <input
          placeholder="Quiz Title"
          className="border w-full p-2 rounded mb-2"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        />
        <input
          placeholder="Topic (e.g. Science, Maths)"
          className="border w-full p-2 rounded mb-4"
          value={quiz.topic}
          onChange={(e) => setQuiz({ ...quiz, topic: e.target.value })}
        />

        {/* Question Input */}
        <div className="mb-4">
          <input
            placeholder="Enter Question"
            className="border w-full p-2 rounded mb-2"
            value={currentQuestion.question}
            onChange={(e) =>
              setCurrentQuestion({ ...currentQuestion, question: e.target.value })
            }
          />
          {currentQuestion.options.map((opt, idx) => (
            <input
              key={idx}
              placeholder={`Option ${idx + 1}`}
              className="border w-full p-2 rounded mb-2"
              value={opt}
              onChange={(e) => {
                const updated = [...currentQuestion.options];
                updated[idx] = e.target.value;
                setCurrentQuestion({ ...currentQuestion, options: updated });
              }}
            />
          ))}
          <input
            placeholder="Correct Answer"
            className="border w-full p-2 rounded"
            value={currentQuestion.answer}
            onChange={(e) => setCurrentQuestion({ ...currentQuestion, answer: e.target.value })}
          />
        </div>
        <button
          onClick={handleQuestionAdd}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
        >
          ➕ Add Question
        </button>
      </div>

      {/* Quiz Preview */}
      {quiz.questions.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-purple-700 mb-3">📋 Questions Preview</h3>
          {quiz.questions.map((q, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded mb-3 border-l-4 border-purple-300">
              <p className="font-semibold">{idx + 1}. {q.question}</p>
              <ul className="list-disc list-inside text-gray-700">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="text-sm text-green-700 mt-1">✅ Answer: {q.answer}</p>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-300">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">🏆 Leaderboard</h2>
        <ul className="space-y-2 text-gray-800">
          {leaderboard.map((student, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-white px-4 py-2 rounded shadow-sm"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{student.avatar}</span>
                <span>{student.name}</span>
              </span>
              <span className="font-bold">{student.score} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
