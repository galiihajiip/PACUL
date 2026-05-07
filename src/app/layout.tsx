import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/layout/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PACUL | Platform Aksi Kolektif untuk Lingkungan',
  description: 'Mendorong aksi kolektif untuk masa depan hijau Indonesia.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased bg-pacul-bg text-pacul-text`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
