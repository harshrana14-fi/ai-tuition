'use client';

import { useEffect } from 'react';

export default function ParentVoiceAI() {
  useEffect(() => {
    const existingScript = document.getElementById('parentvoice-widget');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=5c3ecd556d9410fa34f21e538f929875';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('parentvoice-widget');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mb-10 max-w-4xl mx-auto relative">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">👨‍👩‍👧 Parent Voice AI</h2>
      <p className="text-gray-800 mb-4">
        Your AI assistant for tracking child progress, asking academic questions, and getting personalized parenting tips.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">👀 What You Can Ask</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>How is my child performing?</li>
            <li>Tips for managing study time</li>
            <li>Feedback summary</li>
            <li>Parenting advice</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">🎙️ Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Voice-enabled Q&A</li>
            <li>Report generation</li>
            <li>Smart alerts</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-purple-50 p-4 border-l-4 border-purple-400 rounded text-purple-800 shadow">
        💡 Tip: Start with “How is my child doing in science?”
      </div>

      {/* Floating arrow */}
      <div
        className="fixed bottom-24 right-6 z-50 cursor-pointer animate-bounce"
        title="Scroll to top"
        onClick={scrollToTop}
      >
        <div className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg text-xl">
          ⬇️
        </div>
      </div>
    </div>
  );
}
