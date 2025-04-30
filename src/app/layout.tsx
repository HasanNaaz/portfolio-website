import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Changed to Geist
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({ // Changed variable name
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Removed Geist Mono as only sans-serif is requested

export const metadata: Metadata = {
  title: 'BracU Grad Portfolio', // Updated title
  description: 'Portfolio of a CSE graduate from BRAC University.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>{/* Metadata and links will be injected here */}</head>
      <body className={`${geistSans.variable} antialiased font-sans`}> {/* Use font-sans */}
        {children}
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
