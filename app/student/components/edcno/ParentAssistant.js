'use client';

import { useEffect } from 'react';

export default function ParentAssistant() {
  useEffect(() => {
    const removeExistingWidget = () => {
      const existingScript = document.getElementById('omnidimension-web-widget');
      if (existingScript) existingScript.remove();

      const frames = document.querySelectorAll('iframe[src*="omnidim.io"]');
      frames.forEach(f => f.remove());
    };

    removeExistingWidget();

    // Defer script loading to avoid race conditions
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.id = 'omnidimension-web-widget';
      script.async = true;
      script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=5c3ecd556d9410fa34f21e538f929875';
      document.body.appendChild(script);
    }, 300); // wait 300ms after component mounts

    return () => {
      clearTimeout(timer);
      removeExistingWidget();
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">📞 Parent Voice AI</h2>
      <p className="text-gray-700">Your parents can stay updated with your progress anytime!</p>
    </div>
  );
}
