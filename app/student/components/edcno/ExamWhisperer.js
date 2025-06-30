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

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">🧠 Exam Whisperer</h2>
      <p className="text-gray-700">Ask your academic doubts using the AI widget at the bottom right of your screen.</p>
    </div>
  );
}
