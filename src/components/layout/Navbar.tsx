'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#030304]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-[#df2531]/40 shadow-[0_0_15px_rgba(223,37,49,0.3)] group-hover:border-[#df2531] transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#df2531] animate-pulse-red" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] text-white group-hover:text-white/90 transition-colors">
              BLOODUNDO
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#df2531] uppercase -mt-1">
              SC-12 District Engine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-display text-xs uppercase tracking-wider text-white/70">
          <Link
            href="/#matching"
            className="hover:text-white transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link
            href="/#privacy"
            className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#df2531]" />
            Privacy Boundary
          </Link>
          <Link
            href="/donor"
            className="hover:text-white transition-colors duration-200"
          >
            Become a Donor
          </Link>
          <Link
            href="/donor"
            className="hover:text-white transition-colors duration-200"
          >
            Find a Donor
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/request">
            <Button variant="primary" size="md">
              Request Blood
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.05] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#08080a] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-sm font-display uppercase tracking-wider text-white/80">
            <Link
              href="/#matching"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              How It Works
            </Link>
            <Link
              href="/#privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#df2531]" />
              Privacy Boundary
            </Link>
            <Link
              href="/donor"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Become a Donor
            </Link>
            <Link
              href="/donor"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Find a Donor
            </Link>
          </nav>
          <div className="pt-2">
            <Link href="/request" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" fullWidth size="md">
                Request Blood
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
