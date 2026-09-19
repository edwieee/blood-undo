'use client';

import React, { useState } from 'react';
import { Lock, Unlock, CheckCircle2, RefreshCw } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const PrivacyFlow: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const steps = [
    { num: '01', title: 'REQUEST', desc: 'Blood request submitted.' },
    { num: '02', title: 'MATCH', desc: 'Eligible nearby donors matched.' },
    { num: '03', title: 'CONTACT HIDDEN', desc: 'Phone numbers remain private.' },
    { num: '04', title: 'DONOR ACCEPTS', desc: 'Donor confirms availability.' },
    { num: '05', title: 'CONTACT REVEALED', desc: 'Contacts become available.' },
  ];

  return (
    <section id="privacy" className="relative py-16 sm:py-20 border-t border-white/[0.06] bg-[#030304]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#df2531] uppercase tracking-widest mb-2">
            PRIVACY
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Your contact stays private
            <br />
            <span className="text-white/60">until someone says yes.</span>
          </h2>
          <p className="mt-3 text-base text-white/70 font-light leading-relaxed">
            Contact details stay hidden until a donor accepts the request.
          </p>
        </div>

        {/* 5-Step Pipeline Sequence */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`rounded-xl border p-4 text-center transition-colors ${
                step.num === '03'
                  ? 'border-[#df2531]/40 bg-[#df2531]/[0.03]'
                  : step.num === '05'
                  ? 'border-emerald-500/30 bg-emerald-950/10'
                  : 'border-white/[0.08] bg-[#09090c]'
              }`}
            >
              <div className="text-[10px] font-mono text-white/40 uppercase mb-1">
                {step.num}
              </div>
              <div className="font-display font-semibold text-xs text-white tracking-wider mb-1">
                {step.title}
              </div>
              <div className="text-[11px] text-white/60 font-mono leading-snug">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Interface State Visualization */}
        <div className="max-w-3xl mx-auto rounded-xl border border-white/[0.08] bg-[#09090c] p-6 sm:p-7 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-white/[0.06] gap-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#df2531] mb-0.5">
                PRIVACY DEMONSTRATION
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Contact Reveal Demonstration
              </h3>
            </div>

            <Button
              variant={isAccepted ? 'secondary' : 'primary'}
              size="sm"
              onClick={() => setIsAccepted(!isAccepted)}
              icon={<RefreshCw className={`w-3.5 h-3.5 ${isAccepted ? 'text-[#df2531]' : 'text-white'}`} />}
            >
              {isAccepted ? 'Reset to Hidden' : 'Simulate Donor Acceptance'}
            </Button>
          </div>

          {/* Side-by-Side Perspectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Requester Perspective */}
            <div className="rounded-lg border border-white/[0.08] bg-black/60 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Requester View of Donor
                </span>
                <Badge variant={isAccepted ? 'success' : 'neutral'} size="sm">
                  {isAccepted ? 'ACCEPTED' : 'LOCKED'}
                </Badge>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Donor</span>
                  <span className="text-white font-sans font-medium">Rahul S.</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Blood Group</span>
                  <span className="text-[#df2531] font-bold">O-</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-white/[0.04]">
                  <span className="text-white/40">Phone</span>
                  {isAccepted ? (
                    <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1.5 font-mono">
                      <Unlock className="w-3.5 h-3.5" /> +91 98401 22910
                    </span>
                  ) : (
                    <span className="text-white/50 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 tracking-widest flex items-center gap-1 font-mono">
                      <Lock className="w-3 h-3 text-[#df2531]" /> ••••••••••
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Donor Perspective */}
            <div className="rounded-lg border border-white/[0.08] bg-black/60 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Donor View of Request
                </span>
                <Badge variant={isAccepted ? 'success' : 'neutral'} size="sm">
                  {isAccepted ? 'ACCEPTED' : 'LOCKED'}
                </Badge>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Facility</span>
                  <span className="text-white font-sans font-medium">Aster Medcity, Kochi</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Blood Group</span>
                  <span className="text-white font-bold">O+</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-white/[0.04]">
                  <span className="text-white/40">Phone</span>
                  {isAccepted ? (
                    <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1.5 font-mono">
                      <Unlock className="w-3.5 h-3.5" /> +91 98765 43210
                    </span>
                  ) : (
                    <span className="text-white/50 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 tracking-widest flex items-center gap-1 font-mono">
                      <Lock className="w-3 h-3 text-[#df2531]" /> ••••••••••
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Note */}
          <div className="mt-5 p-3 rounded-lg bg-black/40 border border-white/[0.06] text-center text-xs font-mono text-white/60">
            {isAccepted ? (
              <span className="text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Donor has confirmed availability. Contact numbers are shared between both parties.
              </span>
            ) : (
              <span className="text-white/50 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#df2531]" />
                Phone numbers remain hidden while the request is pending.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
