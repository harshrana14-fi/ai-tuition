'use client';

import { useEffect } from 'react';

export default function LanguageBuddy() {
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

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">🗣️ Language Buddy</h2>
      <p className="text-gray-700">Practice speaking different languages with AI using the widget chat.</p>
    </div>
  );
}
