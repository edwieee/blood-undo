'use client';

import React from 'react';
import { Badge } from '../ui/Badge';
import { Lock, MapPin, Clock, CheckCircle2, XCircle, Activity } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#df2531]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Interface Visual Container */}
      <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top tech header bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#df2531] animate-pulse-red" />
            <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
              LIVE DISTRICT MATCH RADAR • ZONE 682XXX (ERNAKULAM)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="red-subtle" size="sm">
              ENGINE: DETERMINISTIC SC-12
            </Badge>
            <Badge variant="neutral" size="sm">
              ZERO-LEAKAGE ACTIVE
            </Badge>
          </div>
        </div>

        {/* Central visual flow: Grid with Request and Candidate Donors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Central Active Request Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl border-2 border-[#df2531]/60 bg-[#08080c] p-6 shadow-[0_0_30px_rgba(223,37,49,0.2)]">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
                    ACTIVE HOSPITAL REQUISITION
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white mt-0.5">
                    Aster Medcity ICU
                  </h3>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#df2531] text-white font-display font-bold text-xl shadow-[0_0_20px_rgba(223,37,49,0.5)]">
                  O+
                </div>
              </div>

              {/* Request Metadata */}
              <div className="space-y-2.5 text-xs text-white/70 mb-5 font-mono">
                <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                  <span className="text-white/40 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#df2531]" /> Location
                  </span>
                  <span className="text-white">Cheranalloor, 682027</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                  <span className="text-white/40 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#df2531]" /> Urgency
                  </span>
                  <Badge variant="red" size="sm">
                    CRITICAL (T-1 HR)
                  </Badge>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/[0.06]">
                  <span className="text-white/40 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-white/40" /> Contact Info
                  </span>
                  <span className="font-mono text-white/40 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 tracking-widest">
                    ••••••••••
                  </span>
                </div>
              </div>

              {/* Privacy Warning Banner */}
              <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3 flex items-center gap-2.5 text-[11px] text-white/60">
                <Lock className="w-4 h-4 text-[#df2531] shrink-0" />
                <span>Phone numbers locked until donor confirms availability.</span>
              </div>
            </div>
          </div>

          {/* Center Connector / Match Engine Transition */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0">
            <div className="hidden lg:flex flex-col items-center gap-2">
              <div className="w-px h-10 bg-gradient-to-b from-[#df2531] to-white/20" />
              <div className="px-3 py-1.5 rounded-full border border-[#df2531]/40 bg-black text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
                MATCHING
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-white/20 to-[#df2531]" />
            </div>
            <div className="lg:hidden flex items-center justify-center w-full my-2">
              <span className="text-xs font-mono text-[#df2531] uppercase tracking-wider">
                ↓ MATCHING ENGINE RESULTS ↓
              </span>
            </div>
          </div>

          {/* Candidate Donors Stack */}
          <div className="lg:col-span-5 space-y-3">
            {/* Donor 1: ELIGIBLE & MATCHED */}
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/10 p-4 transition-all hover:border-emerald-500/70 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-display font-bold text-xs">
                    O-
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-semibold text-sm text-white">
                        Rahul S.
                      </h4>
                      <Badge variant="success" size="sm">
                        MATCHED
                      </Badge>
                    </div>
                    <p className="text-[11px] text-white/60 font-mono mt-0.5">
                      Universal Donor • 2.1 km away (682024)
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Eligible now
                  </span>
                  <div className="text-[10px] text-white/40 font-mono">
                    Last donated: 140d ago
                  </div>
                </div>
              </div>
            </div>

            {/* Donor 2: INELIGIBLE (COOLDOWN) */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60 font-display font-bold text-xs">
                    O+
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-medium text-sm text-white/70">
                        Sneha P.
                      </h4>
                      <Badge variant="warning" size="sm">
                        EXCLUDED
                      </Badge>
                    </div>
                    <p className="text-[11px] text-white/40 font-mono mt-0.5">
                      Compatible • 1.4 km away (682027)
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400/80">
                    <Clock className="w-3.5 h-3.5" /> Cooldown Active
                  </span>
                  <div className="text-[10px] text-white/40 font-mono">
                    Eligible in 72 days
                  </div>
                </div>
              </div>
            </div>

            {/* Donor 3: INCOMPATIBLE GROUP */}
            <div className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-4 opacity-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 font-display font-bold text-xs">
                    B+
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-medium text-sm text-white/50">
                        Arjun N.
                      </h4>
                      <span className="text-[10px] font-mono text-white/30 uppercase">
                        EXCLUDED
                      </span>
                    </div>
                    <p className="text-[11px] text-white/30 font-mono mt-0.5">
                      Nearby (682027) • Eligible date
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-red-400/60">
                    <XCircle className="w-3.5 h-3.5" /> Incompatible
                  </span>
                  <div className="text-[10px] text-white/30 font-mono">
                    Cannot donate to O+
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom indicator strip */}
        <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] font-mono text-white/50 gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              1 Compatible & Eligible
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              1 Ineligible (Cooldown)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              1 Incompatible
            </span>
          </div>
          <span className="text-white/30">
            RESULT: Only Rahul S. receives notification. Zero WhatsApp noise.
          </span>
        </div>
      </div>
    </div>
  );
};
