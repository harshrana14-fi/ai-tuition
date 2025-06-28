'use client';

import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/app/lib/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [classSelected, setClassSelected] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('ai-user-role', 'student');
      router.push('/student');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('ai-user-role', 'student');
      localStorage.setItem('ai-user-class', classSelected);
      router.push('/student');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image Side */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center relative">
        <img src="/auth.jpg" alt="Learning Illustration" className="w-4/5 max-w-md" />
        <div className="absolute bottom-8 text-white text-center px-4">
          <h2 className="text-3xl font-bold">Empowering Students</h2>
          <p className="text-sm mt-2">Smarter learning with AI + real educators</p>
        </div>
      </div>

      {/* Right Auth Flip Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0f172a] relative">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-600 opacity-30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full blur-[120px] animate-pulse delay-500" />

        <div className="w-full max-w-md perspective px-4">
          <div
            className={`relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Login Side */}
            <div className="absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>
              <form className="space-y-5" onSubmit={handleLogin}>
                <InputField
                  icon={<Mail size={18} />}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  icon={<Lock size={18} />}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </form>
              <p className="mt-4 text-sm text-center text-white">
                Don’t have an account?{' '}
                <button
                  onClick={() => setIsFlipped(true)}
                  className="text-blue-300 hover:underline font-medium"
                >
                  Register here
                </button>
              </p>
              <p className="mt-2 text-sm text-center text-white">
                <Link href="/" className="text-blue-400 hover:underline font-medium">← Go to Homepage</Link>
              </p>
            </div>

            {/* Register Side */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-white mb-6">Create Account</h2>
              <form className="space-y-5" onSubmit={handleRegister}>
                <InputField
                  icon={<Mail size={18} />}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  icon={<Lock size={18} />}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputField
                  icon={<Lock size={18} />}
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <select
                  required
                  value={classSelected}
                  onChange={(e) => setClassSelected(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="" disabled>Select Class</option>
                  {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Register
                </button>
              </form>
              <p className="mt-4 text-sm text-center text-white">
                Already have an account?{' '}
                <button
                  onClick={() => setIsFlipped(false)}
                  className="text-blue-300 hover:underline font-medium"
                >
                  Login here
                </button>
              </p>
              <p className="mt-2 text-sm text-center text-white">
                <Link href="/" className="text-blue-400 hover:underline font-medium">← Go to Homepage</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// InputField component with 2-way binding support
const InputField = ({ icon, type, placeholder, value, onChange }) => (
  <div className="relative">
    <input
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black"
    />
    <div className="absolute left-3 top-2.5 text-gray-500">{icon}</div>
  </div>
);
