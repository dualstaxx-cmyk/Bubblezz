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
      <div className="flex justify-center gap-4 md:gap-16 py-6 md:py-4 flex-wrap px-4 md:px-6">
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2 text-gray-600 text-xs md:text-sm font-body w-1/2 md:w-auto"
          >
            <Icon size={16} className="text-gold flex-shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
