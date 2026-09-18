'use client';

import React, { useState } from 'react';
import { Lock, Unlock, ArrowRight, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const PrivacyFlow: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <section id="privacy" className="relative py-20 border-t border-white/[0.08] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#df2531]/08 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#df2531] uppercase tracking-widest mb-3">
            <Lock className="w-3.5 h-3.5" />
            ZERO-LEAKAGE PRIVACY ARCHITECTURE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Your contact stays private
            <br />
            <span className="text-white/60">until someone says yes.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-light">
            In WhatsApp broadcasts, patient and donor phone numbers leak permanently into public chat histories.
            BloodUndo enforces a cryptographic server-side privacy barrier where contact details are redacted at the API layer until explicit donor acceptance.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-5xl mx-auto mb-12 items-center text-center">
          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <span className="text-[10px] font-mono text-white/40 uppercase">STEP 1</span>
            <div className="font-display font-semibold text-sm text-white mt-1">DONOR</div>
            <div className="text-[11px] text-white/50 font-mono mt-0.5">Registered In System</div>
          </div>

          <div className="hidden md:flex justify-center text-white/30">
            <ArrowRight className="w-5 h-5 text-[#df2531]" />
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <span className="text-[10px] font-mono text-white/40 uppercase">STEP 2</span>
            <div className="font-display font-semibold text-sm text-white mt-1">MATCH</div>
            <div className="text-[11px] text-white/50 font-mono mt-0.5">Criteria Satisfied</div>
          </div>

          <div className="hidden md:flex justify-center text-white/30">
            <ArrowRight className="w-5 h-5 text-[#df2531]" />
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <span className="text-[10px] font-mono text-white/40 uppercase">STEP 3</span>
            <div className="font-display font-semibold text-sm text-white mt-1">ACCEPT & REVEAL</div>
            <div className="text-[11px] text-white/50 font-mono mt-0.5">Mutual Direct Contact</div>
          </div>
        </div>

        {/* Interactive Privacy State Simulator */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#df2531]" />
                <h3 className="font-display font-bold text-lg text-white">
                  Live Privacy Barrier Simulator
                </h3>
              </div>
              <p className="text-xs text-white/50 font-mono mt-1">
                Toggle below to test how the server-side Data Access Layer redacts phone numbers
              </p>
            </div>

            <Button
              variant={isAccepted ? 'secondary' : 'primary'}
              size="sm"
              onClick={() => setIsAccepted(!isAccepted)}
              icon={<RefreshCw className={`w-3.5 h-3.5 ${isAccepted ? 'text-[#df2531]' : 'text-white'}`} />}
            >
              {isAccepted ? 'Reset to Unaccepted (Masked)' : 'Simulate Donor Acceptance'}
            </Button>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requester Perspective */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/50 uppercase">
                  Requester View of Matched Donor
                </span>
                <Badge variant={isAccepted ? 'success' : 'neutral'} size="sm">
                  {isAccepted ? 'STATE: ACCEPTED' : 'STATE: PENDING'}
                </Badge>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Donor Name:</span>
                  <span className="text-white font-sans font-medium">Rahul Sharma</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Blood Group:</span>
                  <span className="text-[#df2531] font-bold">O- (Universal Donor)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Donor Phone:</span>
                  {isAccepted ? (
                    <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
                      <Unlock className="w-3.5 h-3.5" /> +91 98401 22910
                    </span>
                  ) : (
                    <span className="text-white/40 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 tracking-widest flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#df2531]" /> ••••••••••
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Donor Perspective */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/50 uppercase">
                  Donor View of Hospital Request
                </span>
                <Badge variant={isAccepted ? 'success' : 'neutral'} size="sm">
                  {isAccepted ? 'STATE: ACCEPTED' : 'STATE: NOTIFIED'}
                </Badge>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Hospital:</span>
                  <span className="text-white font-sans font-medium">Aster Medcity ICU</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Blood Group:</span>
                  <span className="text-white font-bold">O+ (Urgent)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <span className="text-white/40">Requester Phone:</span>
                  {isAccepted ? (
                    <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
                      <Unlock className="w-3.5 h-3.5" /> +91 98765 43210
                    </span>
                  ) : (
                    <span className="text-white/40 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 tracking-widest flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#df2531]" /> ••••••••••
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Explanation Footer */}
          <div className="mt-6 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center text-xs font-mono text-white/50">
            {isAccepted ? (
              <span className="text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Donor has accepted. Server reveals authorized contact numbers to both parties.
              </span>
            ) : (
              <span className="text-white/50 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#df2531]" />
                Server payload omits phone number field completely until database receives a signed acceptance.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
