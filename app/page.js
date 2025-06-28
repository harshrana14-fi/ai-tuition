'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { PlayCircle } from 'lucide-react';
import Navbar from './components/Navbar/page';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth'); // Updated to redirect to flipping auth page
  };

  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            AI-Powered Learning for Classes 6 to 10
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Personalized tuition with smart AI teachers and real educators for your doubts. Learn smarter, not harder.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black flex items-center gap-2"
            >
              <PlayCircle size={22} />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              title="AI-Powered Problem Solving"
              image="/power.jpg"
              description="Instant, accurate answers for Math, Science, and more – powered by AI fine-tuned for CBSE/ICSE syllabi."
            />
            <FeatureCard
              title="Live AI Classes"
              image="/class.jpg"
              description="Engage in interactive, personalized AI classes that adapt to your pace and learning style."
            />
            <FeatureCard
              title="Doubt Clearing with Real Teachers"
              image="/teach.jpg"
              description="Have doubts? Our physical teachers are always ready for 1-on-1 sessions to help you understand concepts."
            />
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Our Platform</h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch a quick tour of how our AI tutors and live support work together to revolutionize your learning journey.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/zQx2q-4yfaM"
              title="Demo Video"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              name="Riya Sharma"
              role="Class 9 Student"
              text="The AI instantly solves my doubts and explains them so clearly! I’ve improved so much in Science and Math."
              image="/images/student1.jpg"
            />
            <Testimonial
              name="Aarav Mehta"
              role="Class 7 Student"
              text="Live AI classes are fun and interactive! Plus, my tutor is always there to help when I get stuck."
              image="/images/student2.jpg"
            />
            <Testimonial
              name="Neha Kapoor"
              role="Parent"
              text="Perfect combo of tech + real mentors. My son enjoys learning now without pressure!"
              image="/images/parent.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Join thousands of students improving their grades with our AI-powered education platform.
        </p>
        <Button
          onClick={handleGetStarted}
          className="text-lg bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full"
        >
          Sign Up for Free Trial
        </Button>
      </section>
    </main>
  );
}

function FeatureCard({ title, description, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <img src={image} alt={title} className="w-20 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Testimonial({ name, role, text, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <p className="italic text-gray-700">&quot;{text}&quot;</p>
      <h4 className="mt-4 font-semibold">{name}</h4>
      <span className="text-sm text-gray-500">{role}</span>
    </div>
  );
}
