'use client';

import React from 'react';
import Link from 'next/link';

export default function TeacherNavbar() {
  return (
    <nav className="bg-white shadow-md w-full px-6 py-3 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="text-indigo-600 text-2xl font-bold">AI Tuition (Teacher)</div>
      <div className="space-x-6 hidden md:flex text-gray-700 font-medium">
        <Link href="/teacher">Dashboard</Link>
        <Link href="/teacher/classes">My Classes</Link>
        <Link href="/teacher/resources">Resources</Link>
        <Link href="/">Student View</Link>
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        Logout
      </button>
    </nav>
  );
}
