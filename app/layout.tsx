import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bubblezz.pages.dev"),
  title: {
    default: "Bubblezz | Fresh & Refreshing Personal Care",
    template: "%s | Bubblezz",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  description:
    "Premium personal care products by Amulya Pharmaceuticals. Skin care, hair care, baby care and home care products. Natural ingredients. Dermatologist tested.",
  keywords: [
    "personal care India",
    "natural skin care",
    "hair care products",
    "baby care",
    "Bubblezz",
    "Amulya Pharmaceuticals",
    "personal care Pune",
  ],
  openGraph: {
    images: ["/categories/skincare.jpeg"],
    title: "Bubblezz | Fresh & Refreshing Personal Care",
    description:
      "Premium personal care products. Natural ingredients. Dermatologist tested.",
    type: "website",
    siteName: "Bubblezz Personal Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubblezz | Fresh & Refreshing Personal Care",
    description: "Premium personal care products. Natural ingredients. Dermatologist tested.",
    images: ["/categories/skincare.jpeg"],
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
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-brand-black focus:px-4 focus:py-2 focus:rounded-full focus:font-body focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Bottom spacer for mobile nav */}
        <div className="h-16 md:hidden" />
        <MobileBottomNav />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
