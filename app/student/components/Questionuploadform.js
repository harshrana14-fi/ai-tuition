'use client';

import React, { useState } from 'react';

export default function QuestionUploadForm({ onSubmit }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === '') return;

    const newEntry = {
      text: question,
      time: new Date().toLocaleString(),
    };

    onSubmit(newEntry);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        className="w-full border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
