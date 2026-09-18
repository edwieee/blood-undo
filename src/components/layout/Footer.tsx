import React from 'react';
import Link from 'next/link';
import { DISCLAIMER_TEXT } from '../../lib/constants';
import { ShieldAlert, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-black text-white/60 text-xs font-mono py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-black border border-[#df2531]/40">
              <span className="w-2 h-2 rounded-full bg-[#df2531]" />
            </div>
            <div>
              <span className="font-display font-bold text-base text-white tracking-[0.2em] block">
                BLOODUNDO
              </span>
              <span className="text-[10px] text-white/40 uppercase">
                Privacy-First District Blood Donor Matching
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-white/70 font-display text-xs uppercase tracking-wider">
            <Link href="/request" className="hover:text-white transition-colors">
              Request Blood
            </Link>
            <Link href="/donor" className="hover:text-white transition-colors">
              Donor Portal
            </Link>
            <Link href="/#matching" className="hover:text-white transition-colors">
              Matching Engine
            </Link>
            <Link href="/#privacy" className="hover:text-white transition-colors">
              Privacy Architecture
            </Link>
          </div>
        </div>

        {/* Mandatory Clinical Disclaimer */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex items-start gap-3 text-white/50 text-[11px] leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-[#df2531] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white/70 uppercase tracking-wider block mb-1">
              Clinical Protocol Notice
            </span>
            {DISCLAIMER_TEXT}
          </div>
        </div>

        {/* Bottom Credits & Challenge Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 pt-4">
          <div>
            ANAVANDI 2026 Selection Round • Challenge SC-12 (District Blood Donor Matching)
          </div>
          <div className="flex items-center gap-1 text-white/50">
            Engineered with <span className="text-[#df2531]">♥</span> for zero-noise emergency matching.
          </div>
        </div>
      </div>
    </footer>
  );
};
