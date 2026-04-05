import ShopContent from "@/components/ShopContent";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shop – The Curator's Collection",
  description:
    "Browse all Bubblezz premium personal care products – skincare, haircare, baby care, and home care. Natural, dermatologist-tested.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-cream min-h-screen flex items-center justify-center">
          <p className="font-body text-gray-400 text-sm">Loading collection…</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
