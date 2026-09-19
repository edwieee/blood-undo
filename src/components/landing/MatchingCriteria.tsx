'use client';

import React from 'react';
import { Check } from 'lucide-react';

export const MatchingCriteria: React.FC = () => {
  const criteria = [
    {
      num: '01',
      category: 'BLOOD GROUP',
      headline: 'Compatible donors only.',
      desc: 'Match the requested blood group with eligible donors.',
      bullets: [
        'Blood group checked',
        'Compatible donors considered',
        'Incompatible donors excluded',
      ],
    },
    {
      num: '02',
      category: 'LOCATION',
      headline: 'Nearby donors first.',
      desc: 'Use locality and pincode to find donors near the request.',
      bullets: [
        'Locality checked',
        'Pincode compared',
        'Nearby matches prioritized',
      ],
    },
    {
      num: '03',
      category: 'DONATION INTERVAL',
      headline: 'Only eligible donors.',
      desc: 'Donors who donated too recently are excluded from matching.',
      bullets: [
        'Last donation date checked',
        'Eligibility calculated',
        'Recently donating donors excluded',
      ],
    },
  ];

  return (
    <section id="matching" className="relative py-16 sm:py-20 border-t border-white/[0.06] bg-[#020203]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs text-[#df2531] uppercase tracking-widest mb-2">
            HOW MATCHING WORKS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Not every donor.
            <br />
            <span className="text-white/60">The right donor.</span>
          </h2>
          <p className="mt-3 text-base text-white/70 font-light leading-relaxed">
            Three criteria determine which donors receive a request.
          </p>
        </div>

        {/* 3 Criteria Cards System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {criteria.map((item) => (
            <div
              key={item.num}
              className="rounded-xl border border-white/[0.08] bg-[#09090c] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                {/* Number */}
                <div className="font-mono text-2xl font-bold text-[#df2531] mb-4">
                  {item.num}
                </div>

                {/* Category */}
                <div className="text-xs font-mono tracking-widest text-white/50 uppercase mb-1">
                  {item.category}
                </div>

                {/* Headline */}
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {item.headline}
                </h3>

                {/* Supporting Explanation */}
                <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
              </div>

              {/* 3 Verification Points */}
              <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-xs font-mono text-white/80">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#df2531] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
