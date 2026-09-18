import type { Metadata } from 'next';
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
  title: 'BloodUndo — Privacy-First District Blood Donor Matching',
  description:
    'A privacy-first blood donor matching system. Eliminates broad broadcast spam by connecting blood requests directly with eligible, nearby donors while keeping contact details private until acceptance.',
  keywords: [
    'BloodUndo',
    'Blood donor matching',
    'District blood donor matching',
    'Privacy-first healthcare',
    'ANAVANDI 2026',
    'SC-12',
  ],
  authors: [{ name: 'BloodUndo Team' }],
  viewport: 'width=device-width, initial-scale=1',
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
