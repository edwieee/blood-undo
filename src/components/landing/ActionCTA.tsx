'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const ActionCTA: React.FC = () => {
  return (
    <section id="get-started" className="relative py-16 sm:py-20 border-t border-white/[0.06] bg-[#020203]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-3 text-base text-white/70 font-light leading-relaxed">
            Connect urgent blood requests with eligible nearby donors privately.
          </p>
        </div>

        {/* Dual Paths Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1: Request Blood */}
          <div className="rounded-xl border border-white/[0.08] bg-[#09090c] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#df2531] mb-2">
                REQUEST
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                Request Blood
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                Submit an urgent request with blood group, pincode, and locality.
                Only eligible, compatible nearby donors are notified.
              </p>
            </div>
            <div>
              <Link href="/request" className="block w-full">
                <Button variant="primary" size="md" fullWidth>
                  Request Blood
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Become a Donor */}
          <div className="rounded-xl border border-white/[0.08] bg-[#09090c] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
                DONOR
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                Become a Donor
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                Register your blood group and location. You will only be notified when a nearby request matches your group and interval.
              </p>
            </div>
            <div>
              <Link href="/donor" className="block w-full">
                <Button variant="secondary" size="md" fullWidth>
                  Become a Donor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
