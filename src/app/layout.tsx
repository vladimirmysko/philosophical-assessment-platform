import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: 'variable',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  title: 'Philosophical Assessment Platform',
  description:
    'Платформа для проверки работ студентов по философии - Philosophical Assessment Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={cn(inter.variable, 'bg-gray-1 text-gray-12 scroll-smooth font-sans antialiased')}
    >
      <body className="text-base" style={{ textRendering: 'optimizeLegibility' }}>
        {children}
      </body>
    </html>
  );
}
