import HomeContent from "@/components/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh & Refreshing Personal Care",
  description:
    "Discover Bubblezz premium personal care products. Natural ingredients, dermatologist tested skincare, haircare, baby care and home care.",
  alternates: { canonical: "https://bubblezz.pages.dev/" },
  openGraph: {
    title: "Bubblezz | Fresh & Refreshing Personal Care",
    description: "Discover Bubblezz — premium botanical personal care. Skincare, haircare, baby care, home care. Dermatologist tested.",
    url: "https://bubblezz.pages.dev/",
    images: ["/categories/skincare.jpeg"],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
