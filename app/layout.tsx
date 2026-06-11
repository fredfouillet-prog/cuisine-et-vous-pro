import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuisine et Vous Pro — Team Building & Formations",
  description:
    "Solutions de team building culinaire et formations professionnelles sur-mesure pour entreprises.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
