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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}