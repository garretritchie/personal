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
  title: "Garret Ritchie | Personal Lab and Project Workbench",
  description:
    "A personal lab, profile, and project workbench for Garret Ritchie's AI-powered web apps, practical automation, managed services work, and business experiments.",
  icons: {
    icon: "/gr-logo.png",
    shortcut: "/gr-logo.png",
  },
  openGraph: {
    title: "Garret Ritchie | Personal Lab and Project Workbench",
    description:
      "AI-powered web apps, practical automation, project case studies, and business experiments from Garret Ritchie.",
    url: "https://www.garretritchie.com",
    siteName: "Garret Ritchie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garret Ritchie | Personal Lab and Project Workbench",
    description:
      "A personal lab for AI-powered apps, side-hustle experiments, useful tools, and field notes.",
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
