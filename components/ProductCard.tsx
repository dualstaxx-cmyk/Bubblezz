"use client";

import { Product } from "@/data/products";
import Image from "next/image";

interface Props {
  product: Product;
  variant: "home" | "shop";
}

const WHATSAPP_BASE = "https://wa.me/917XXXXXXXXXX?text=";

export default function ProductCard({ product, variant }: Props) {
  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(product.whatsappMessage);
    window.open(`${WHATSAPP_BASE}${encoded}`, "_blank");
  };

  if (variant === "shop") {
    const categoryLabel: Record<string, string> = {
      skincare: "Skin Care",
      haircare: "Hair Care",
      babycare: "Baby Care",
      homecare: "Home Care",
    };

    return (
      <div className="group flex flex-col">
        {/* Image */}
        <div className="relative w-full aspect-[3/4] rounded-[12px] overflow-hidden bg-[#F5F0EA]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 md:p-5 group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/categories/skincare.jpeg";
            }}
          />
          {product.badge && (
            <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-gold text-white text-[8px] md:text-[10px] uppercase tracking-wider font-body px-2 py-0.5 md:px-2.5 md:py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-3 md:mt-4 flex flex-col gap-0.5 md:gap-1">
          <p className="text-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-body font-semibold">
            {categoryLabel[product.category] ?? product.category}
          </p>
          <p className="font-display text-brand-black text-sm md:text-2xl leading-snug">
            {product.name}
          </p>
          <button
            onClick={handleWhatsApp}
            className="mt-2 md:mt-3 flex items-center gap-1.5 md:gap-2 text-brand-black font-body text-[10px] md:text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300 group/btn self-start"
          >
            <span>Enquire on WhatsApp</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile — editorial card (no border, serif name, text CTA) */}
      <div className="md:hidden group flex flex-col">
        <div className="relative w-full aspect-square rounded-[12px] overflow-hidden bg-[#F5F0EA]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/categories/skincare.jpeg";
            }}
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-gold text-white text-[8px] uppercase tracking-wider font-body px-2 py-0.5 rounded-full z-10">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-3">
          <p className="font-display text-brand-black text-base leading-snug">
            {product.name}
          </p>
          <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
            {product.description}
          </p>
          <button
            onClick={handleWhatsApp}
            className="mt-2.5 flex items-center gap-1.5 text-brand-black font-body text-[10px] uppercase tracking-widest hover:text-gold transition-colors duration-300 group/btn"
          >
            <span>Enquire on WhatsApp</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>

      {/* Desktop — bordered card (unchanged) */}
      <div className="hidden md:block bg-white rounded-card overflow-hidden border border-[#e8e0d5] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
        <div className="relative aspect-square bg-cream flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/categories/skincare.jpeg";
            }}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gold text-white text-[10px] uppercase tracking-wider font-body px-2.5 py-1 rounded-full z-10">
              {product.badge}
            </span>
          )}
        </div>
        <div className="px-4 pb-4 pt-3">
          <p className="font-body font-semibold text-brand-black text-base leading-snug">
            {product.name}
          </p>
          <p className="text-gray-500 text-sm line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
          <button
            onClick={handleWhatsApp}
            className="mt-3 w-full bg-[#25D366] text-white rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm font-body font-medium hover:bg-[#1da851] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enquire on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
