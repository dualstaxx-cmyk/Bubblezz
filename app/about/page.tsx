import TrustStrip from "@/components/TrustStrip";
import ValuesGrid from "@/components/ValuesGrid";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Born in Pune, made for India. Discover the Bubblezz story — premium personal care rooted in botanical intelligence and ethical formulation.",
  alternates: { canonical: "https://bubblezz.pages.dev/about" },
  openGraph: {
    title: "Our Story – Bubblezz Personal Care",
    description: "Born in Pune, made for India. Botanical intelligence, purity without compromise.",
    url: "https://bubblezz.pages.dev/about",
    images: ["/categories/skincare.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-black text-center py-16 md:py-32 px-4 md:px-16">
        <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
          Bubblezz Personal Care
        </p>
        <h1 className="font-display text-white text-4xl md:text-display-md lg:text-display-lg mt-3 leading-tight">
          Our Story
        </h1>
        <p className="font-display text-gold italic text-xl mt-4">
          Born in Pune. Made for India.
        </p>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
      </section>

      {/* Mission */}
      <section className="bg-cream py-12 md:py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — brand story */}
          <div>
            <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
              Who We Are
            </p>
            <h2 className="font-display text-brand-black text-headline-lg font-bold mt-2 leading-tight">
              Botanical Intelligence,<br />Bottled for You
            </h2>
            <div className="flex flex-col gap-4 mt-6 font-body text-gray-600 text-sm leading-relaxed">
              <p>
                Bubblezz was founded by Amulya Pharmaceuticals with a singular
                belief: that everyday personal care should be as pure as it is
                effective. Inspired by India&apos;s rich tradition of botanical
                wellness, we set out to create a line that honours those roots
                while meeting the demands of the modern individual.
              </p>
              <p>
                Every Bubblezz product is the result of meticulous research,
                cold-pressed extraction, and small-batch formulation. We work
                with carefully sourced ingredients — argan, amla, neem,
                chamomile, and more — chosen for their proven efficacy and
                gentle nature.
              </p>
              <p>
                From our Baby Care range (designed to be safe for newborns) to
                our Skin Care rituals and Home Care essentials, every product
                carries our promise: purity without compromise.
              </p>
            </div>
          </div>

          {/* Right — value cards */}
          <ValuesGrid />
        </div>
      </section>

      {/* Ingredient Philosophy */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
            What Goes Inside
          </p>
          <h2 className="font-display text-brand-black text-headline-lg font-bold mt-2 leading-tight">
            Ingredient Integrity,<br />Every Single Batch
          </h2>
          <p className="font-body text-gray-600 text-sm mt-6 leading-relaxed max-w-2xl">
            We reject the shortcut. Every Bubblezz formula begins with an obsessive search for the right
            ingredient — not just any argan, but cold-pressed Moroccan argan; not just neem, but sustainably
            harvested neem from certified Indian farms. We maintain full traceability across our supply chain
            because we believe you deserve to know exactly what touches your skin.
          </p>
          <p className="font-body text-gray-600 text-sm mt-4 leading-relaxed max-w-2xl">
            Our lab in Pune operates under strict GMP (Good Manufacturing Practice) guidelines. Small batch
            sizes aren&apos;t a marketing phrase for us — they&apos;re how we maintain freshness, potency,
            and quality control that large-scale manufacturing simply cannot offer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { label: "No Parabens", desc: "Zero synthetic preservatives that disrupt hormones." },
              { label: "No Sulfates", desc: "Gentle cleansers that never strip your skin's natural barrier." },
              { label: "Cruelty-Free", desc: "Never tested on animals. Certified ethical at every step." },
            ].map(({ label, desc }) => (
              <div key={label} className="border-l-2 border-gold pl-4">
                <p className="font-body font-semibold text-brand-black text-sm">{label}</p>
                <p className="font-body text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* CTA */}
      <section className="bg-brand-black text-center py-12 md:py-20 px-4 md:px-16">
        <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
          Start Your Journey
        </p>
        <h2 className="font-display text-white text-headline-lg font-bold mt-2">
          Ready to Start Your Ritual?
        </h2>
        <p className="text-gray-400 font-body text-sm mt-4 max-w-md mx-auto leading-relaxed">
          Explore our full range of natural, dermatologist-tested personal care
          products and find your perfect ritual.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block bg-gold text-brand-black rounded-full px-8 py-3 font-body font-semibold hover:bg-gold-dark transition-colors duration-300"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}
