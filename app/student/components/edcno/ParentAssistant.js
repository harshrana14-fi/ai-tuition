'use client';

import { useEffect } from 'react';

export default function ParentVoiceAI({ onBack }) {
  useEffect(() => {
    const existingScript = document.getElementById('omnidimension-web-widget');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=5c3ecd556d9410fa34f21e538f929875';
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
      <h2 className="text-3xl font-bold text-purple-700 mb-4">👨‍👩‍👧 Parent Voice AI</h2>
      <p className="text-gray-800 mb-4">
        Get smart feedback, performance reports, and parental support with this AI assistant.
      </p>

      <button
        onClick={onBack}
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
      >
        🔙 Go to Dashboard
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">🧾 Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Track student progress</li>
            <li>Understand strengths & weaknesses</li>
            <li>Ask behavior/discipline tips</li>
            <li>Weekly summaries (upcoming)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">🎯 Ask Things Like:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>“How’s my child doing in science?”</li>
            <li>“Suggest ways to improve focus”</li>
            <li>“Show improvement in last test”</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-purple-50 p-4 border-l-4 border-purple-400 rounded text-purple-800 shadow">
        💡 Tip: Use your natural language to ask any school-related questions about your child.
      </div>

      {/* Arrows */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-50 cursor-pointer animate-bounce"
        title="Scroll to top"
      >
        <div className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg text-xl">⬇️</div>
      </div>
    </div>
  );
}
