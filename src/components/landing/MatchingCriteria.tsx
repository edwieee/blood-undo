'use client';

import React from 'react';
import { Check } from 'lucide-react';

export const MatchingCriteria: React.FC = () => {
  const criteria = [
    {
      num: 'RULE 01',
      category: 'BLOOD GROUP',
      headline: 'Compatible donors only.',
      desc: 'Blood requests are evaluated against medical compatibility matrices before notifications are sent.',
      visualLabel: 'Serology Logic',
      visualFormula: 'O− request → O− donors (Exact) or compatible serology',
      bullets: [
        'ABO & Rh factor matched',
        'Compatible blood groups included',
        'Incompatible donors excluded',
      ],
    },
    {
      num: 'RULE 02',
      category: 'LOCATION',
      headline: 'Nearby donors first.',
      desc: 'Requests prioritize donors in the same locality and postal code radius to minimize travel time.',
      visualLabel: 'Location Logic',
      visualFormula: 'PIN 680308 → Nearby donors within district radius',
      bullets: [
        'Hospital locality compared',
        'Postal code distance evaluated',
        'Nearest eligible donors notified',
      ],
    },
    {
      num: 'RULE 03',
      category: 'DONATION INTERVAL',
      headline: 'Only eligible donors.',
      desc: 'Donors who donated blood within the 90-day cooldown period are safely protected and excluded.',
      visualLabel: 'Interval Logic',
      visualFormula: 'Last donation > 90 days → Eligible to donate',
      bullets: [
        'Last donation date verified',
        'Safe recovery interval enforced',
        'Cooldown-active donors protected',
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
          <p className="mt-3 text-base text-white/70 font-normal leading-relaxed">
            Three medical and logistical criteria determine which donors receive a request.
          </p>
        </div>

        {/* 3 Criteria Cards System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {criteria.map((item) => (
            <div
              key={item.num}
              className="rounded-lg border border-white/[0.06] bg-[#07070a] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Rule Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#df2531] uppercase tracking-wider">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {item.headline}
                </h3>

                {/* Supporting Explanation */}
                <p className="text-sm text-white/70 leading-relaxed mb-5 font-normal">
                  {item.desc}
                </p>

                {/* Visual Matching Logic Representation */}
                <div className="rounded border border-white/[0.05] bg-white/[0.02] p-3 mb-5">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">
                    {item.visualLabel}
                  </div>
                  <div className="text-xs text-white/90 font-medium font-mono">
                    {item.visualFormula}
                  </div>
                </div>
              </div>

              {/* Verification Points in clean sans-serif */}
              <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-white/70 font-normal">
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
