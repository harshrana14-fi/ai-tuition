'use client';

export default function QuizZone() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">📝 Quiz Zone</h2>
      <p className="text-gray-700 mb-4">
        Practice daily with AI-generated quizzes or create your own quizzes.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">✅ Last Quiz Taken</h3>
          <p>Subject: Math - Fractions</p>
          <p>Score: <strong>8/10</strong></p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-800 mb-2">📌 Suggested Topics</h3>
          <ul className="list-disc list-inside text-sm text-gray-800">
            <li>Algebra Basics</li>
            <li>Periodic Table</li>
            <li>Geography Capitals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
