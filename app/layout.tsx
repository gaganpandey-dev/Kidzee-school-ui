import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fredoka, Quicksand, Comic_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 NEW FONTS
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600"],
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-comic",
  weight: ["400", "700"],
});

// ✅ VIEWPORT
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ✅ METADATA
export const metadata: Metadata = {
  title: "Kidzee Virgonagar Preschool | Best Preschool in Bengaluru",
  description:
    "Kidzee Virgonagar is a trusted preschool and daycare in Bengaluru offering Playgroup, Nursery, Kindergarten and Daycare programs with a safe and joyful learning environment.",
  keywords: [
    "Kidzee Virgonagar",
    "Preschool in Bengaluru",
    "Playgroup near me",
    "Nursery school Bangalore",
    "Kindergarten Virgonagar",
    "Daycare in Bengaluru",
  ],
  authors: [{ name: "Kidzee Virgonagar" }],
  openGraph: {
    title: "Kidzee Virgonagar Preschool",
    description:
      "A joyful, safe and inspiring preschool where learning feels like play.",
    url: "https://kidzee-school-ui.vercel.app",
    siteName: "Kidzee Virgonagar",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${fredoka.variable} 
        ${quicksand.variable} 
        ${comicNeue.variable} 
        h-full antialiased scroll-smooth
      `}
    >
      <body className="min-h-full flex flex-col selection:bg-yellow-300 selection:text-black font-[var(--font-quicksand)]">
        {children}
      </body>
    </html>
  );
}