import Link from "next/link";

export default function PhilosophySection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[250px] md:min-h-[400px]">
      {/* Left — dark */}
      <div className="bg-brand-black p-6 md:p-16 flex flex-col justify-between min-h-[220px] md:min-h-[400px]">
        <div>
          <h2 className="font-display text-white text-2xl md:text-headline-lg font-bold leading-tight">
            PURITY WITHOUT COMPROMISE
          </h2>
          <div className="w-16 h-0.5 bg-gold mt-6" />
        </div>
        <p className="font-display text-gold italic text-3xl mt-auto pt-8">B.</p>
      </div>

      {/* Right — cream */}
      <div className="bg-cream p-6 md:p-16 flex flex-col justify-center">
        <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
          Our Philosophy
        </p>
        <h3 className="font-display text-brand-black text-2xl md:text-3xl font-bold mt-2 leading-snug">
          Purity Without Compromise
        </h3>
        <p className="text-gray-600 font-body text-sm mt-4 max-w-sm leading-relaxed">
          At Bubblezz, we believe that luxury should be synonymous with
          integrity. Our formulations are crafted through patient, mindful
          processes that respect both your body and the environment.
        </p>
        <p className="text-gray-600 font-body text-sm mt-3 max-w-sm leading-relaxed">
          Every ingredient is hand-selected — cold-pressed botanicals, sustainably
          sourced actives, and time-honoured Ayurvedic extracts. We never cut
          corners: no parabens, no sulfates, no compromise. Just honest care,
          backed by science and rooted in nature.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {[
            "Ethical, clean, and uncompromising ingredients",
            "Elevated personal care for the modern individual",
            "Dermatologist tested — safe for all skin types",
          ].map((point) => (
            <li key={point} className="flex items-start gap-2 font-body text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-6 text-gold font-body font-semibold text-sm hover:underline decoration-gold inline-flex items-center gap-1"
        >
          Read Our Story →
        </Link>
      </div>
    </section>
  );
}
