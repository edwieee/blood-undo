'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-8 sm:py-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Composition - Single visual mass on a shared central axis */}
        <div className="flex flex-col items-center text-center mx-auto max-w-[960px]">
          {/* Main Headline - fits naturally into two lines on desktop */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] tracking-tight text-white leading-[1.08] sm:leading-[1.02] max-w-[960px]">
            <span className="block">Find the right donor.</span>
            <span className="block text-white/60 sm:whitespace-nowrap">Without the broadcast.</span>
          </h1>

          {/* Supporting Tagline - subordinate, 18px desktop, no em dash, fits on one line on desktop */}
          <p className="mt-7 text-base sm:text-lg text-white/70 font-normal leading-normal max-w-[720px]">
            Connect urgent blood requests with eligible nearby donors privately.
          </p>

          {/* Controlled CTA Buttons - natural width, shared central axis */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto">
            <Link href="/request" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base">
                Request Blood
              </Button>
            </Link>
            <Link href="/donor" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base">
                Become a Donor
              </Button>
            </Link>
          </div>

          {/* Subtle Product-Flow Indicator - quiet detail, 56px below CTAs */}
          <div className="mt-14 flex items-center justify-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border border-white/[0.06] bg-white/[0.015] text-[11px] sm:text-xs font-mono text-white/40 tracking-wider select-none">
              <span>REQUEST</span>
              <span className="text-[#df2531]/75">→</span>
              <span>MATCH</span>
              <span className="text-[#df2531]/75">→</span>
              <span>ACCEPT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
