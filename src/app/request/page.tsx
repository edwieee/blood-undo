import React from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';

export default function RequestPlaceholderPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-white tech-grid flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#df2531]/20 border border-[#df2531]/40 flex items-center justify-center text-[#df2531] mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
              MODULE READY FOR STEP 3 BACKEND INTEGRATION
            </span>
            <h1 className="font-display font-bold text-3xl text-white">
              Blood Requisition Module
            </h1>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Visual foundation and design tokens are successfully initialized.
              The validated request submission form will be fully connected in the upcoming Step 3 phase.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-left font-mono text-xs text-white/60 space-y-2">
            <div className="text-white/80 font-semibold mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#df2531]" />
              Form Scope:
            </div>
            <div>• Requester Name & Hospital</div>
            <div>• Blood Group & Urgency (Critical / Urgent / Standard)</div>
            <div>• Pincode & Locality for District Radius Matching</div>
            <div>• Encrypted Contact Number (Locked until acceptance)</div>
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
