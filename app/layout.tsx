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
  title: "Garret Ritchie | Technology Strategist, Systems Builder and Educator",
  description:
    "Garret Ritchie designs and builds practical systems across technology strategy, managed IT, cybersecurity, artificial intelligence, software, automation, user experience, and professional education.",
  icons: {
    icon: "/gr-logo.png",
    shortcut: "/gr-logo.png",
  },
  openGraph: {
    title: "Garret Ritchie | Technology Strategist, Systems Builder and Educator",
    description:
      "Explore the work, ideas, and philosophy of Garret Ritchie, a curious technology builder working across systems, AI, software, design, education, and human experience.",
    url: "https://www.garretritchie.com",
    siteName: "Garret Ritchie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garret Ritchie | Technology Strategist, Systems Builder and Educator",
    description:
      "Practical systems across technology strategy, managed IT, cybersecurity, AI, software, automation, user experience, and education.",
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
