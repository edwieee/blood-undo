'use client';

import React, { useState } from 'react';
import { Lock, Unlock, CheckCircle2, RefreshCw } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const PrivacyFlow: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const steps = [
    { num: '01', title: 'REQUEST', desc: 'Blood request logged with required blood group and locality.' },
    { num: '02', title: 'MATCH', desc: 'Eligible nearby donors identified without public broadcasting.' },
    { num: '03', title: 'ACCEPT', desc: 'Individual donor reviews details and confirms availability.' },
    { num: '04', title: 'CONTACT REVEALED', desc: 'Contact numbers are mutually unlocked for coordination.' },
  ];

  return (
    <section id="privacy" className="relative py-16 sm:py-20 border-t border-white/[0.06] bg-[#030304]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="font-mono text-xs text-[#df2531] uppercase tracking-widest mb-2">
            PRIVACY ARCHITECTURE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Your contact stays private
            <br />
            <span className="text-white/60">until someone says yes.</span>
          </h2>
          <p className="mt-3 text-base text-white/70 font-normal leading-relaxed">
            Contact numbers are never broadcast to public lists, group chats, or social media.
          </p>
        </div>

        {/* Streamlined 4-Step Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`rounded-lg border p-4 text-left transition-colors ${
                step.num === '04' && isAccepted
                  ? 'border-emerald-500/30 bg-emerald-950/10'
                  : 'border-white/[0.06] bg-[#07070a]'
              }`}
            >
              <div className="text-[10px] font-mono text-white/40 uppercase mb-1">
                STEP {step.num}
              </div>
              <div className="font-display font-semibold text-xs text-white tracking-wider mb-1.5">
                {step.title}
              </div>
              <div className="text-xs text-white/60 font-normal leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Real Product State Demonstration */}
        <div className="max-w-3xl mx-auto rounded-lg border border-white/[0.06] bg-[#07070a] p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-white/[0.06] gap-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#df2531] mb-0.5">
                INTERACTIVE DEMO
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Dual-Sided Privacy Gate
              </h3>
            </div>

            <Button
              variant={isAccepted ? 'secondary' : 'primary'}
              size="sm"
              onClick={() => setIsAccepted(!isAccepted)}
              icon={<RefreshCw className={`w-3.5 h-3.5 ${isAccepted ? 'text-[#df2531]' : 'text-white'}`} />}
            >
              {isAccepted ? 'Reset to Pending' : 'Simulate Donor Acceptance'}
            </Button>
          </div>

          {/* Side-by-Side Perspectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Requester Perspective */}
            <div className="rounded-lg border border-white/[0.06] bg-black/40 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-medium text-white/70">
                  Requester View of Donor
                </span>
                <Badge variant={isAccepted ? 'success' : 'neutral'} size="sm">
                  {isAccepted ? 'REVEALED' : 'LOCKED'}
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Matched Donor</span>
                  <span className="text-white font-medium">Rahul S.</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Blood Group</span>
                  <span className="text-[#df2531] font-bold">O−</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-white/[0.04]">
                  <span className="text-white/40">Phone Number</span>
                  {isAccepted ? (
                    <span className="text-emerald-400 font-medium tracking-wide flex items-center gap-1.5">
                      <Unlock className="w-3.5 h-3.5" /> +91 98401 22910
                    </span>
                  ) : (
                    <span className="text-white/40 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.08] tracking-widest flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#df2531]" /> ••••••••••
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Donor Perspective */}
            <div className="rounded-lg border border-white/[0.06] bg-black/40 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-medium text-white/70">
                  Donor View of Request
                </span>
                <Badge variant={isAccepted ? 'success' : 'neutral'} size="sm">
                  {isAccepted ? 'REVEALED' : 'LOCKED'}
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Medical Facility</span>
                  <span className="text-white font-medium">Aster Medcity, Kochi</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-white/40">Required Group</span>
                  <span className="text-white font-medium">O+</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-white/[0.04]">
                  <span className="text-white/40">Phone Number</span>
                  {isAccepted ? (
                    <span className="text-emerald-400 font-medium tracking-wide flex items-center gap-1.5">
                      <Unlock className="w-3.5 h-3.5" /> +91 98765 43210
                    </span>
                  ) : (
                    <span className="text-white/40 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.08] tracking-widest flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#df2531]" /> ••••••••••
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Note in clear sans-serif */}
          <div className="mt-5 p-3 rounded border border-white/[0.05] bg-black/30 text-center text-xs text-white/60">
            {isAccepted ? (
              <span className="text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Donor has confirmed availability. Contact numbers are mutually revealed to coordinate the donation.
              </span>
            ) : (
              <span className="text-white/50 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#df2531]" />
                Phone numbers remain confidential while request is pending. No public broadcasting.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
