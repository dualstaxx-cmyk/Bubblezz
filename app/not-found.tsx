import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="bg-cream min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-gold text-8xl font-bold leading-none">
        404
      </p>
      <h1 className="font-display text-brand-black text-headline-lg font-bold mt-4">
        Page Not Found
      </h1>
      <p className="font-body text-gray-500 text-sm mt-3 max-w-xs leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <Link
          href="/"
          className="bg-brand-black text-white rounded-full px-6 py-3 font-body font-medium text-sm hover:bg-gold hover:text-black transition-all duration-300"
        >
          Back to Home
        </Link>
        <Link
          href="/shop"
          className="border border-brand-black text-brand-black rounded-full px-6 py-3 font-body font-medium text-sm hover:border-gold hover:text-gold transition-all duration-300"
        >
          Shop Products
        </Link>
      </div>
      <div className="w-16 h-0.5 bg-gold mx-auto mt-12" />
    </div>
  );
}
