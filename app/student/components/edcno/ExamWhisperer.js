'use client';

import { useEffect } from 'react';

export default function ExamWhisperer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mb-10 max-w-4xl mx-auto relative">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">🧠 Exam Whisperer</h2>
      <p className="text-gray-800 mb-4">
        Welcome to Exam Whisperer – your personal AI assistant to solve doubts instantly. Use the widget at the bottom right to ask anything!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">📘 Subjects Covered</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Mathematics</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>English Grammar & Literature</li>
            <li>Social Science (History, Geography, Civics)</li>
            <li>Computer & Coding Basics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">🛠️ How to Use</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Click on the chat icon at the bottom-right.</li>
            <li>Type your question in simple words.</li>
            <li>Get instant explanations and help.</li>
            <li>Ask follow-up questions freely.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">🌟 Why Use Exam Whisperer?</h3>
        <p className="text-gray-700">
          It&apos;s like having a 24/7 private tutor powered by AI! Fast, interactive, and perfect for quick concept clearing during homework or revision.
        </p>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg text-blue-800 shadow-sm">
        💡 Tip: Stuck in a tough problem? Ask Exam Whisperer for step-by-step help — just click the widget!
      </div>

      {/* Floating arrow to scroll to top */}
      <div
        className="fixed bottom-24 right-6 z-50 cursor-pointer animate-bounce"
        title="Scroll to top"
        onClick={scrollToTop}
      >
        <div className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg text-xl">
          ⬆️
        </div>
      </div>
    </div>
  );
}
