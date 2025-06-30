'use client';

import { useEffect } from 'react';

export default function LanguageBuddy() {
  useEffect(() => {
    const existingScript = document.getElementById('language-widget');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=ec38639c8ae105f983832ebcb58d4872';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('language-widget');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mb-10 max-w-4xl mx-auto relative">
      <h2 className="text-3xl font-bold text-green-700 mb-4">🌐 Language Buddy</h2>
      <p className="text-gray-800 mb-4">
        Practice speaking, translating, or learning new languages with your AI language assistant. Use the widget below!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">🗣️ Supported Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Live translation help</li>
            <li>Grammar correction</li>
            <li>Speaking practice</li>
            <li>Daily vocabulary</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">🌍 Languages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Hindi</li>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
            <li>More coming soon</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-green-50 p-4 border-l-4 border-green-400 rounded text-green-800 shadow">
        💡 Tip: Type in your native language and ask for a translation or practice prompt.
      </div>

      {/* Floating arrow */}
      <div
        className="fixed bottom-24 right-6 z-50 cursor-pointer animate-bounce"
        title="Scroll to top"
        onClick={scrollToTop}
      >
        <div className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg text-xl">
          ⬆️
        </div>
      </div>
    </div>
  );
}
