import HomeContent from "@/components/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh & Refreshing Personal Care",
  description:
    "Discover Bubblezz premium personal care products. Natural ingredients, dermatologist tested skincare, haircare, baby care and home care.",
};

export default function HomePage() {
  return <HomeContent />;
}
