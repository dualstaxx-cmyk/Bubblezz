import { CheckCircle, Leaf, Shield, Star } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Leaf, label: "Natural Ingredients" },
  { icon: Shield, label: "Dermatologist Tested" },
  { icon: CheckCircle, label: "No Harmful Chemicals" },
  { icon: Star, label: "100% Safe" },
];

export default function TrustStrip() {
  return (
    <section className="bg-cream border-t border-[#e8e0d5] border-b">
      <div className="grid grid-cols-2 md:flex md:justify-center md:gap-16 py-4 md:py-4 px-5 md:px-6">
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 text-gray-600 text-[11px] md:text-sm font-body py-2 md:py-0"
          >
            <Icon size={15} className="text-gold flex-shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
