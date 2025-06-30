'use client';

import { useEffect } from 'react';

export default function LanguageBuddy({ onBack }) {
  useEffect(() => {
    const existingScript = document.getElementById('omnidimension-web-widget');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=ec38639c8ae105f983832ebcb58d4872';
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
      <h2 className="text-3xl font-bold text-green-700 mb-4">🌐 Language Buddy</h2>
      <p className="text-gray-800 mb-4">
        Practice, translate, and explore new languages. Just ask your doubts using the widget!
      </p>

      <button
        onClick={onBack}
        className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
      >
        🔙 Go to Dashboard
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">🌍 Languages Supported</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Hindi</li>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
            <li>Bengali, Tamil (beta)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">🗣️ Use Cases</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Daily speaking practice</li>
            <li>Translate tricky sentences</li>
            <li>Grammar fix suggestions</li>
            <li>Interview prep in English</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-green-50 p-4 border-l-4 border-green-400 rounded text-green-800 shadow">
        💡 Tip: Try “Translate ‘I want to learn Hindi’ in French”.
      </div>

      {/* Arrows */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-50 cursor-pointer animate-bounce"
        title="Scroll to top"
      >
        <div className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg text-xl">⬇️</div>
      </div>
    </div>
  );
}
