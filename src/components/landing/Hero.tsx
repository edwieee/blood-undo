'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 sm:py-0 tech-grid overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Composition - Single visual mass on a shared central axis */}
        <div className="flex flex-col items-center text-center mx-auto max-w-[880px]">
          {/* Main Headline - reduced by ~12% for editorial restraint */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] tracking-tight text-white leading-[1.08] sm:leading-[1.04] max-w-[880px]">
            <span className="block">Find the right donor.</span>
            <span className="block text-white/60 sm:whitespace-nowrap">Without the broadcast.</span>
          </h1>

          {/* Supporting Tagline - subordinate, quiet human voice */}
          <p className="mt-6 text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-[640px]">
            Connect urgent blood requests with eligible nearby donors privately.
          </p>

          {/* Controlled CTA Buttons - natural width, shared central axis */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto">
            <Link href="/request" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-6 sm:px-7 py-3 text-sm sm:text-base">
                Request Blood
              </Button>
            </Link>
            <Link href="/donor" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-6 sm:px-7 py-3 text-sm sm:text-base">
                Become a Donor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
