'use client';

import React from 'react';
import Link from 'next/link';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PlayCircle, Users, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const DemoHub: React.FC = () => {
  const demoPersonas = [
    {
      name: 'Rahul Sharma',
      blood: 'A+',
      loc: 'Kochi (682001)',
      last: '120d ago',
      status: 'MATCHED & ELIGIBLE',
      variant: 'success' as const,
      reason: 'Compatible, nearby, interval satisfied (>90d)',
    },
    {
      name: 'Sneha Patel',
      blood: 'A+',
      loc: 'Kochi (682001)',
      last: '15d ago',
      status: 'EXCLUDED (COOLDOWN)',
      variant: 'warning' as const,
      reason: 'Donated 15d ago (75 days cooldown remaining)',
    },
    {
      name: 'Arjun Nair',
      blood: 'B+',
      loc: 'Kochi (682001)',
      last: '180d ago',
      status: 'EXCLUDED (SEROLOGY)',
      variant: 'red-subtle' as const,
      reason: 'Incompatible blood group (B+ cannot donate to A+)',
    },
    {
      name: 'Deepa Menon',
      blood: 'A+',
      loc: 'Delhi (110001)',
      last: '150d ago',
      status: 'EXCLUDED (LOCATION)',
      variant: 'neutral' as const,
      reason: 'Outside district postal radius (Delhi vs Kochi)',
    },
  ];

  return (
    <section className="py-16 border-t border-white/[0.08] bg-[#020203]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#08080c] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#df2531]/08 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#df2531] uppercase tracking-widest mb-1.5">
                <PlayCircle className="w-4 h-4" />
                EVALUATION BENCHMARK MATRIX
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Test the 3 Core Exclusion Rules in 60 Seconds
              </h3>
              <p className="text-sm text-white/60 font-light mt-1 max-w-2xl">
                Demonstrating that ineligible donors are excluded while compatible nearby donors are notified with masked phone numbers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/request">
                <Button variant="primary" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>
                  Test Request Flow
                </Button>
              </Link>
              <Link href="/donor">
                <Button variant="secondary" size="md" icon={<Users className="w-4 h-4" />}>
                  Open Donor Portal
                </Button>
              </Link>
            </div>
          </div>

          {/* Persona Table / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {demoPersonas.map((p, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-white">
                      {p.blood}
                    </span>
                    <Badge variant={p.variant} size="sm">
                      {p.status.split(' ')[0]}
                    </Badge>
                  </div>
                  <h4 className="font-display font-semibold text-sm text-white">
                    {p.name}
                  </h4>
                  <div className="text-xs font-mono text-white/50 space-y-1 mt-2">
                    <div>Zone: {p.loc}</div>
                    <div>Interval: {p.last}</div>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/[0.06] text-[11px] font-mono text-white/60">
                  {p.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
