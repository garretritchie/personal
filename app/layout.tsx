import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garretritchie.com"),
  title: "Garret Ritchie | Personal AI Project Portal",
  description:
    "A personal landing page and project directory for Garret Ritchie's AI-powered web apps, side-hustle experiments, and business ideas.",
  icons: {
    icon: "/gr-logo.png",
    shortcut: "/gr-logo.png",
  },
  openGraph: {
    title: "Garret Ritchie | Personal AI Project Portal",
    description:
      "AI-powered web apps, business idea tests, and practical automation projects from Garret Ritchie.",
    url: "https://www.garretritchie.com",
    siteName: "Garret Ritchie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garret Ritchie | Personal AI Project Portal",
    description:
      "A home base for AI-powered web apps, side-hustle experiments, and useful tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
