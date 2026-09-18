import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/landing/Hero';
import { MatchingCriteria } from '../components/landing/MatchingCriteria';
import { PrivacyFlow } from '../components/landing/PrivacyFlow';
import { DemoHub } from '../components/landing/DemoHub';
import { Footer } from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#030304] text-white tech-grid flex flex-col justify-between selection:bg-[#df2531] selection:text-white">
      {/* Top ambient glow */}
      <div className="radial-glow-top fixed inset-0 pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <MatchingCriteria />
        <PrivacyFlow />
        <DemoHub />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
