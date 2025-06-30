'use client';
import { FaBars, FaTimes } from 'react-icons/fa';

const tools = [
  { key: 'exam', label: '🧠 Exam Whisperer' },
  { key: 'lang', label: '🗣️ Language Buddy' },
  { key: 'quiz', label: '📚 Quiz Zone' },
  { key: 'goal', label: '🎯 Goal Setter' },
  { key: 'parent', label: '📞 Parent Voice AI' },
];

export default function SmartSidebar({ open, toggleOpen, onToolSelect }) {
  return (
    <>
      {/* Sidebar - shifted down 64px to avoid navbar overlap */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-blue-700 text-white shadow-lg z-40 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 text-xl font-bold border-b border-blue-600">
          <span>🧠 Smart Tools</span>
          <FaTimes onClick={toggleOpen} className="cursor-pointer" />
        </div>
        <ul className="px-4 py-4 space-y-4">
          {tools.map((tool) => (
            <li
              key={tool.key}
              className="hover:bg-blue-600 p-2 rounded cursor-pointer"
              onClick={() => onToolSelect(tool.key)} // ✅ NEW LINE
            >
              {tool.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button - shifted down */}
      {!open && (
        <button
          onClick={toggleOpen}
          className="fixed top-20 left-4 z-50 bg-blue-700 text-white p-3 rounded-full shadow-md"
        >
          <FaBars />
        </button>
      )}
    </>
  );
}
