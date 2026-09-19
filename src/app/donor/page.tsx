import React from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Users, ShieldCheck } from 'lucide-react';

export default function DonorPlaceholderPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-white tech-grid flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#df2531]/20 border border-[#df2531]/40 flex items-center justify-center text-[#df2531] mx-auto">
            <Users className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
              DONOR PORTAL
            </span>
            <h1 className="font-display font-bold text-3xl text-white">
              Donor Portal & Inbox
            </h1>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              Register as a donor, check your eligibility interval, and view incoming blood requests in your area.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-left font-mono text-xs text-white/70 space-y-2">
            <div className="text-white/90 font-semibold mb-1">
              Included Features:
            </div>
            <div>• Donor Registration (Blood group, locality, pincode, last donation date)</div>
            <div>• Eligibility calculator based on last donation date</div>
            <div>• Matched blood requests with hidden phone numbers</div>
            <div>• Acceptance confirmation and contact exchange</div>
          </div>

          <div className="pt-2">
            <Link href="/">
              <Button variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
                Return to Landing Page
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
