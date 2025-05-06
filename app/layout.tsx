import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murmur – Ambient White Noise for Focus & Relaxation",
  description:
    "Murmur helps you stay focused, relaxed, and calm with soothing white noise and ambient soundscapes — free and ad-free.",
  keywords: [
    "white noise",
    "ambient sounds",
    "focus sounds",
    "relaxing noise",
    "study noise",
    "sleep sounds",
    "Murmur app",
  ],
  authors: [{ name: "Yufang Chiu", url: "https://murmur-ecru.vercel.app" }],
  creator: "Yufang Chiu",

  openGraph: {
    title: "Murmur – Ambient White Noise for Focus & Relaxation",
    description:
      "Stay in the zone or unwind with Murmur – your minimalist ambient noise companion.",
    url: "https://murmur-ecru.vercel.app/",
    siteName: "Murmur",
    images: [
      {
        url: "https://murmur-ecru.vercel.app/og-image.png", // Replace with a real image
        width: 1200,
        height: 630,
        alt: "Murmur Ambient Noise Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Murmur – Ambient White Noise for Focus & Relaxation",
    description:
      "Stay in the zone or unwind with Murmur – your minimalist ambient noise companion.",
    creator: "@amberyufangchiu",
    images: ["https://murmur-ecru.vercel.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://murmur-ecru.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
