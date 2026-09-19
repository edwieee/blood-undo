'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 sm:py-0 tech-grid overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col items-start text-left order-1">
            {/* Main Headline - reduced by ~12% for editorial restraint */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] tracking-tight text-white leading-[1.08] sm:leading-[1.04]">
              <span className="block lg:whitespace-nowrap">Find the right donor.</span>
              <span className="block text-white/60 lg:whitespace-nowrap">Without the broadcast.</span>
            </h1>

            {/* Supporting Tagline - subordinate, quiet human voice */}
            <p className="mt-6 text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-[540px]">
              Connect urgent blood requests with eligible nearby donors privately.
            </p>

            {/* Controlled CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-3.5 mt-8 w-full sm:w-auto">
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

          {/* Right Side - Reference Image Asset */}
          <div className="relative flex items-center justify-center order-2 w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full lg:scale-[1.25] lg:-translate-x-8">
              <Image 
                src="/hero-image.png"
                alt="Redlink connectivity visualization"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
