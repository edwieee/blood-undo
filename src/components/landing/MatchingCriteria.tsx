import React from 'react';
import { ShieldCheck, MapPin, Calendar, Check, AlertCircle } from 'lucide-react';

export const MatchingCriteria: React.FC = () => {
  const criteria = [
    {
      num: '01',
      title: 'BLOOD GROUP',
      headline: 'Compatible donors only.',
      desc: 'Enforces complete red-cell serological compatibility matrices rather than naive string equality. Fully accounts for Universal Donors (O-) and Universal Recipients (AB+).',
      icon: ShieldCheck,
      bullets: [
        'Deterministic RBC compatibility matrix',
        'Accounts for Rh factor (+/-)',
        'Zero random non-matching alerts',
      ],
      tag: 'MATCHER: SEROLOGY',
    },
    {
      num: '02',
      title: 'LOCATION',
      headline: 'Nearby donors first.',
      desc: '3-tier deterministic postal matching using 6-digit Indian PIN codes and district postal zones (e.g. 682xxx for Ernakulam). Donors 50 km away are never disturbed for local emergencies.',
      icon: MapPin,
      bullets: [
        'Tier 1: Exact postal PIN match',
        'Tier 2: Normalized locality string',
        'Tier 3: District postal sorting prefix',
      ],
      tag: 'MATCHER: POSTAL RADIUS',
    },
    {
      num: '03',
      title: 'INTERVAL',
      headline: 'Only donors currently eligible.',
      desc: 'Standard 90-day medical interval strictly enforced. A donor who donated 2 weeks ago is excluded until their red blood cells safely replenish, eliminating donor guilt and fatigue.',
      icon: Calendar,
      bullets: [
        'Configurable 90-day recovery policy',
        'Automated countdown to next eligibility',
        'Zero spam to recovering donors',
      ],
      tag: 'MATCHER: HEALTH COOLDOWN',
    },
  ];

  return (
    <section id="matching" className="relative py-20 border-t border-white/[0.08] bg-[#050507]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-[#df2531] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#df2531]" />
            DETERMINISTIC FILTERING PIPELINE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Not every donor.
            <br />
            <span className="text-white/60">The right donor.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-light">
            Challenge SC-12 requires replacing broad broadcast blasts with targeted notification.
            Every blood request passes through three non-negotiable verification gates before a single notification is generated.
          </p>
        </div>

        {/* 3 Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {criteria.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-md p-7 hover:border-[#df2531]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle red hover corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#df2531]/0 group-hover:bg-[#df2531]/10 rounded-tr-2xl blur-xl transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-white/40 group-hover:text-[#df2531] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-[#df2531]/60 group-hover:text-[#df2531] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-mono text-xs tracking-widest text-white/50 uppercase mb-1">
                    {item.title}
                  </h3>
                  <h4 className="font-display font-semibold text-xl text-white mb-3">
                    {item.headline}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-4 border-t border-white/[0.06] text-xs font-mono text-white/75">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#df2531] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
