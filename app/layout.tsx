// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Modern Full-Stack Web Development Bootcamp (2025)",
  description:
    "A complete Next.js, React, TypeScript, Node.js, Express, MongoDB, Tailwind, shadcn/ui, and AI tools bootcamp designed to take beginners to job-ready full-stack developers.",
  keywords: [
    "full-stack bootcamp",
    "next.js course",
    "react training",
    "typescript bootcamp",
    "node.js course",
    "mongodb",
    "shadcn ui",
    "tailwind css",
    "web development 2025",
    "ai tools for developers",
  ],

  metadataBase: new URL("https://web-bootcamp-eight.vercel.app"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Modern Full-Stack Web Development Bootcamp (2025)",
    description:
      "Learn full-stack modern web development using Next.js, React, TypeScript, Node.js, MongoDB, Tailwind, shadcn/ui, and AI developer tools.",
    url: "https://web-bootcamp-eight.vercel.app",
    siteName: "Full-Stack Bootcamp 2025",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modern Full-Stack Web Development Bootcamp",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Modern Full-Stack Web Development Bootcamp (2025)",
    description:
      "From zero to job-ready full-stack developer using Next.js, React, TS, Node.js, MongoDB, Tailwind, shadcn/ui, and AI tools.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
