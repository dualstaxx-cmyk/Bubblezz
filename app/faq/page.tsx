import FaqAccordion from "@/components/FaqAccordion";
import { FAQS } from "@/data/faqs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Bubblezz personal care products, ingredients, orders, returns, and shipping.",
  alternates: { canonical: "https://bubblezz.pages.dev/faq" },
  openGraph: {
    title: "FAQ – Bubblezz Personal Care",
    description: "Answers to common questions about Bubblezz products, ingredients, WhatsApp ordering, returns, and shipping across India.",
    url: "https://bubblezz.pages.dev/faq",
    images: ["/categories/skincare.jpeg"],
  },
};

export default function FaqPage() {
  return (
    <div className="bg-cream min-h-screen px-4 md:px-16 py-12 md:py-20">
      <div className="text-center">
        <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
          Got Questions?
        </p>
        <h1 className="font-display text-brand-black text-3xl md:text-headline-lg lg:text-display-md font-bold mt-2">
          Frequently Asked Questions
        </h1>
        <p className="font-body text-gray-500 text-sm mt-4 max-w-md mx-auto leading-relaxed">
          Everything you need to know about Bubblezz products, orders, and our
          philosophy.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <FaqAccordion faqs={FAQS} />
      </div>

      {/* Still have questions CTA */}
      <div className="max-w-3xl mx-auto mt-16 bg-brand-black rounded-2xl p-6 md:p-10 text-center">
        <h2 className="font-display text-white text-headline-md">
          Still have questions?
        </h2>
        <p className="text-gray-400 font-body text-sm mt-3 leading-relaxed">
          Our team is happy to help. Reach out and we&apos;ll get back to you
          within one business day.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-gold text-brand-black rounded-full px-8 py-3 font-body font-semibold hover:bg-gold-dark transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
