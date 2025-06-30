'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/aibg.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-blue-600">EduFox</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center relative">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>

          {/* Students Dropdown */}
          <div className="relative group focus-within:block">
            <button className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none">
              Students ▾
            </button>
            <div className="absolute hidden group-focus-within:block bg-white shadow-md rounded-md w-40 mt-2 z-50">
              <Link href="/auth" className="block px-4 py-2 text-sm hover:bg-gray-100">Login</Link>
              <Link href="/auth" className="block px-4 py-2 text-sm hover:bg-gray-100">Register</Link>
            </div>
          </div>

          {/* Teachers Dropdown */}
          <div className="relative group focus-within:block">
            <button className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none">
              Teachers ▾
            </button>
            <div className="absolute hidden group-focus-within:block bg-white shadow-md rounded-md w-40 mt-2 z-50">
              <Link href="/teacher/login" className="block px-4 py-2 text-sm hover:bg-gray-100">Login</Link>
              <Link href="/teacher/login" className="block px-4 py-2 text-sm hover:bg-gray-100">Register</Link>
            </div>
          </div>

          <Link
            href="/ask"
            className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Ask a Question
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-md space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="#features" className="block text-gray-700 hover:text-blue-600">Features</Link>
          <Link href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/auth" className="block text-gray-700 hover:text-blue-600">Student Login/Register</Link>
          <Link href="/teacher/components" className="block text-gray-700 hover:text-blue-600">Teacher Login/Register</Link>
          <Link
            href="/ask"
            className="block mt-2 px-4 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700"
          >
            Ask a Question
          </Link>
        </div>
      )}
    </nav>
  );
}
