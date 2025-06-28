'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/lib/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export default function TeacherLogin() {
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);

  // Shared States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('ai-user-role', 'teacher');
      router.push('/dashboard/teacher');
    } catch (error) {
      alert(error.message);
    }
  };

  // Register Handler
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('ai-user-role', 'teacher');
      localStorage.setItem('ai-teacher-name', fullName);
      router.push('/dashboard/teacher');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md perspective">
        <div className={`relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
          
          {/* FRONT - LOGIN */}
          <div className="absolute w-full h-full backface-hidden bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">Welcome Teacher 👨‍🏫</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
              Don&apos;t have an account?{' '}
              <span onClick={() => setFlipped(true)} className="text-indigo-600 cursor-pointer hover:underline">
                Register
              </span>
            </p>
            <p className="mt-2 text-sm text-center">
              <Link href="/" className="text-gray-500 hover:underline">← Go to Homepage</Link>
            </p>
          </div>

          {/* BACK - REGISTER */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">Create Teacher Account</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                Register
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <span onClick={() => setFlipped(false)} className="text-indigo-600 cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
