'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { HeroVisual } from './HeroVisual';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden">
      {/* Top subtle radial red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#df2531]/12 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Headline Container */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Challenge tag pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#df2531]/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(223,37,49,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#df2531] animate-pulse-red" />
            <span className="font-mono text-xs text-white/80 tracking-widest uppercase">
              ANAVANDI 2026 • CHALLENGE SC-12
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
            Find the right donor.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              Without the broadcast.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            BloodUndo replaces chaotic social media blasts with deterministic matching.
            We connect urgent blood requisitions with eligible, nearby donors while keeping
            contact details strictly private until acceptance.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/request" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={<Sparkles className="w-4 h-4 text-white/90" />}
              >
                Request Blood
              </Button>
            </Link>
            <Link href="/donor" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-4 h-4 text-white/60" />}
              >
                Become a Donor
              </Button>
            </Link>
          </div>

          {/* Technical metric pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/[0.08] text-left">
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                0%
              </div>
              <div className="text-xs text-white/50 font-mono mt-0.5">
                Broadcast Exposure
              </div>
            </div>
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="font-display font-bold text-xl sm:text-2xl text-[#df2531]">
                3-Factor
              </div>
              <div className="text-xs text-white/50 font-mono mt-0.5">
                Deterministic Match
              </div>
            </div>
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                90 Days
              </div>
              <div className="text-xs text-white/50 font-mono mt-0.5">
                Medical Cooldown Enforced
              </div>
            </div>
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="font-display font-bold text-xl sm:text-2xl text-emerald-400">
                100%
              </div>
              <div className="text-xs text-white/50 font-mono mt-0.5">
                Server-Side Masking
              </div>
            </div>
          </div>
        </div>

        {/* Abstract High-Tech Interface Visual */}
        <HeroVisual />
      </div>
    </section>
  );
};
