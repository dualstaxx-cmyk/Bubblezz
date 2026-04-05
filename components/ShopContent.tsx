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
      {/* Header */}
      <div className="px-4 md:px-16 pt-12 md:pt-16 pb-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
            The Curator&apos;s Collection
          </p>
          <h1 className="font-display text-brand-black text-4xl md:text-display-md mt-1">
            Our Products
          </h1>
        </motion.div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mt-6 scrollbar-hide">
          <div className="flex gap-4 md:gap-6 md:flex-wrap pb-2">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`whitespace-nowrap font-body text-sm pb-1 transition-all duration-300 ${
                  activeCategory === id
                    ? "text-gold font-semibold border-b-2 border-gold"
                    : "text-gray-500 hover:text-gold border-b-2 border-transparent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product masonry grid */}
      <div className="px-4 md:px-16 pb-20">
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
              className="columns-1 sm:columns-2 lg:columns-3 gap-6"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="break-inside-avoid"
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
