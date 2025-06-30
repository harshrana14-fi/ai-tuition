'use client';

import { useEffect } from 'react';

export default function ExamWhisperer({ onBack }) {
  useEffect(() => {
    const existingScript = document.getElementById('omnidimension-web-widget');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=8fe443a508dbe27f6c63821b566639d5';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('omnidimension-web-widget');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mb-20 max-w-4xl mx-auto relative">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">🧠 Exam Whisperer</h2>
      <p className="text-gray-800 mb-4">
        Your AI-powered academic mentor. Get instant help with doubts and concepts using the smart widget below.
      </p>

      <button
        onClick={onBack}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        🔙 Go to Dashboard
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">📘 Subjects Covered</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Mathematics – step-by-step solving</li>
            <li>Science – diagrams, formulas, and experiments</li>
            <li>English – grammar, writing help</li>
            <li>Social Science – timelines, events explained</li>
            <li>Coding – syntax, logic and error fixing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">🛠️ How to Use</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Click the widget at bottom-right</li>
            <li>Ask your question clearly</li>
            <li>Follow up for clarification</li>
            <li>Save answers or take notes</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">💡 Extra Features</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Late-night homework support</li>
          <li>Exam revision mode</li>
          <li>Concept booster quizzes (coming soon)</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-blue-800 shadow">
        💡 Tip: Try asking “Explain Newton’s laws in simple words”.
      </div>

      {/* Floating Arrows */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-50 cursor-pointer animate-bounce"
        title="Scroll to top"
      >
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg text-xl">⬇️</div>
      </div>
    </div>
  );
}
