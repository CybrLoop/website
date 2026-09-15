import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const title = "CybrLoop — Application Security for Product Teams";
const description = "CybrLoop helps startups and growing product teams identify, understand, and act on application security risks through collaborative security assessments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cybrloop.com"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/assets/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/assets/icon-512.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CybrLoop",
    title,
    description,
    images: [{ url: "/assets/cybrloop-og-image.png", width: 1200, height: 630, alt: "CybrLoop — Secure the Loop. Application Security for Product Teams." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/cybrloop-og-image.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#0B0D0D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
