import React from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { DonorRegistrationForm } from '../../components/forms/DonorRegistrationForm';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Become a Blood Donor | REDLINK',
  description:
    'Register as a confidential blood donor on REDLINK. Your contact details remain private until you accept a verified match.',
};

export default function DonorPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center py-12 sm:py-16 px-4">
        <div className="w-full max-w-xl mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-xl">
          <DonorRegistrationForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
