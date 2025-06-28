'use client';

import React from 'react';
import Link from 'next/link';

export default function StudentNavbar() {
  return (
    <nav className="bg-white shadow-md w-full px-6 py-3 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="text-blue-600 text-2xl font-bold">AI Tuition</div>
      <div className="space-x-6 hidden md:flex text-gray-700 font-medium">
        <Link href="/student">Dashboard</Link>
        <Link href="/live">Live Classes</Link>
        <Link href="/ask">Ask Doubt</Link>
        <Link href="/">Home</Link>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Logout
      </button>
    </nav>
  );
}
