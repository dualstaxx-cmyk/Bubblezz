"use client";

import ProductCard from "@/components/ProductCard";
import { PRODUCTS, ProductCategory } from "@/data/products";
import { fadeUp } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TABS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "skincare", label: "Skin Care" },
  { id: "haircare", label: "Hair Care" },
  { id: "babycare", label: "Baby Care" },
  { id: "homecare", label: "Home Care" },
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;

  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>(
    categoryParam && TABS.some((t) => t.id === categoryParam)
      ? categoryParam
      : "all"
  );

  useEffect(() => {
    if (categoryParam && TABS.some((t) => t.id === categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-cream min-h-screen">
      {/* ── HEADER ── */}
      <div className="px-6 md:px-16 pt-16 md:pt-24 pb-10 border-b border-[#e8e0d5]">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-gold text-xs uppercase tracking-[0.25em] font-body font-semibold">
            The Full Collection
          </p>
          <h1 className="font-display text-brand-black leading-tight mt-3 text-[clamp(2.25rem,4.5vw,4rem)]">
            Curated for the<br />
            <span className="italic font-normal">Discerning Palette.</span>
          </h1>
        </motion.div>

        {/* Category tabs */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 mt-8 scrollbar-hide">
          <div className="flex gap-8 md:gap-10 pb-1">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`whitespace-nowrap font-body text-xs uppercase tracking-[0.15em] pb-2 transition-all duration-300 ${
                  activeCategory === id
                    ? "text-brand-black font-semibold border-b border-brand-black"
                    : "text-gray-400 hover:text-brand-black border-b border-transparent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="px-6 md:px-16 py-12 md:py-16">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center"
            >
              <p className="font-body text-gray-400 text-sm">
                No products in this category yet.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <ProductCard product={product} variant="shop" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
