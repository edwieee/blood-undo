import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'REDLINK — Privacy-First Blood Donor Matching',
  description:
    'Connect urgent blood requests with eligible nearby donors privately.',
  keywords: [
    'REDLINK',
    'Blood donor matching',
    'Private blood donation',
    'District donor network',
  ],
  authors: [{ name: 'REDLINK Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#030304] text-white selection:bg-[#df2531] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
