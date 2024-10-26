// src/app/layout.tsx

import '/styles/globals.css'; // Import global CSS for Tailwind and other styles
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MEG Consulting',
  description: 'A premier consulting club at the University of Michigan',
  keywords: ['University of Michigan', 'consulting', 'business strategy', 'innovation', 'digital transformation'],
  authors: [{ name: 'MEG Consulting' }],
  openGraph: {
    title: 'MEG Consulting',
    description: 'Expert consulting services for business growth and innovation',
    url: 'https://yourconsultingfirm.com',
    siteName: 'MEG Consulting',
    images: [
      {
        url: 'https://yourconsultingfirm.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  // Add linkedin and instagram
  instagram: {
    card: 'summary_large_image',
    title: 'Your Consulting Firm',
    description: 'Expert consulting services for business growth and innovation',
    images: ['https://yourconsultingfirm.com/instagram-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap"
        />
        <title>MEG Consulting</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </head>
      <body className={`${inter.className} bg-[#faf8fc]`}>
        {children} {}
      </body>
    </html>
  );
}
