import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/landing/Hero';
import { MatchingCriteria } from '../components/landing/MatchingCriteria';
import { PrivacyFlow } from '../components/landing/PrivacyFlow';
import { ActionCTA } from '../components/landing/ActionCTA';
import { Footer } from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#030304] text-white flex flex-col justify-between selection:bg-[#df2531] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections - True Vertical Sequence */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <MatchingCriteria />
        <PrivacyFlow />
        <ActionCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

