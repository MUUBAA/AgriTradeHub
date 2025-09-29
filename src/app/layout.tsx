import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Green Gold Ventures | From Farm to Table, Freshness Guaranteed',
  description: 'Green Gold Ventures is a leading supplier of high-quality, sustainably grown fruits. We connect dedicated farmers with global markets, ensuring freshness and quality every step of the way.',
  openGraph: {
    title: 'Green Gold Ventures | From Farm to Table, Freshness Guaranteed',
    description: 'Discover our network of passionate farmers and our commitment to delivering the freshest fruits worldwide. Sustainable, reliable, and always fresh.',
    url: 'green-gold-ventures.com',
    siteName: 'Green Gold Ventures',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
        alt: 'A vibrant collection of fresh fruits',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Fruit Alliances | From Farm to Table, Freshness Guaranteed',
    description: 'We supply the world with premium fruits, sourced sustainably from our trusted network of farmers. Experience the taste of freshness.',
    images: ['https://picsum.photos/seed/twitter-image/1200/600'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
