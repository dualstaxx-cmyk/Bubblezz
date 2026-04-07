"use client";

import CategoryCard from "@/components/CategoryCard";
import PhilosophySection from "@/components/PhilosophySection";
import ProductCard from "@/components/ProductCard";
import TrustStrip from "@/components/TrustStrip";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { fadeUp, heroStagger, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const bestsellers = PRODUCTS.filter((p) => p.badge === "BEST SELLER").slice(0, 3);

export default function HomeContent() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-16 gap-6 md:gap-12 py-12 md:py-20 min-h-screen">
          {/* Left — text, order-2 on mobile (image shows first) */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col order-2 md:order-1"
          >
            <motion.p
              variants={fadeUp}
              className="text-gold uppercase tracking-widest text-xs font-body font-semibold"
            >
              Premium Personal Care
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-white text-4xl md:text-display-md lg:text-display-lg leading-tight mt-3"
            >
              Unlock Your Natural Beauty
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 font-body text-sm md:text-base max-w-sm mt-4 leading-relaxed"
            >
              Fresh. Refreshing. Honest. Crafted for your skin&apos;s unique
              journey using only nature&apos;s finest ingredients.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/shop"
                className="bg-gold text-brand-black rounded-full px-6 py-3 font-body font-semibold hover:bg-gold-dark transition-colors duration-300 w-full sm:w-auto text-center justify-center"
              >
                Explore Now
              </Link>
              <Link
                href="/about"
                className="border border-white text-white rounded-full px-6 py-3 font-body hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto text-center justify-center"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — hero image, order-1 on mobile (shows above text) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative h-64 sm:h-80 md:h-[500px] order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(201,168,76,0.15)_0%,transparent_70%)]" />
            <Image
              src="/categories/skincare.jpeg"
              alt="Bubblezz Premium Skin Care Collection — natural botanical products"
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <TrustStrip />

      {/* ── CURATED COLLECTIONS ── */}
      <section className="bg-cream py-12 md:py-20 px-4 md:px-16">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end mb-10">
          <div>
            <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
              Shop By Need
            </p>
            <h2 className="font-display text-brand-black text-headline-lg font-bold mt-1">
              Curated Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-gold font-body text-sm hover:underline decoration-gold self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Asymmetric grid — desktop: 3-col 2-row; mobile: 2-col simple */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px]">
          {/* Skin Care — tall left col, rows 1-2 */}
          <div className="col-span-1 row-span-2">
            <CategoryCard category={CATEGORIES[0]} className="h-full" />
          </div>
          {/* Hair Care — top middle (col 2, row 1) */}
          <div className="col-span-1 row-span-1">
            <CategoryCard category={CATEGORIES[1]} className="h-full" />
          </div>
          {/* Baby Care — top right (col 3, row 1) */}
          <div className="col-span-1 row-span-1">
            <CategoryCard category={CATEGORIES[2]} className="h-full" />
          </div>
          {/* Home Care — wide bottom right (cols 2-3, row 2) */}
          <div className="col-span-2 row-span-1">
            <CategoryCard category={CATEGORIES[3]} className="h-full" />
          </div>
        </div>

        {/* Mobile: simple 2×2 grid */}
        <div className="grid grid-cols-2 gap-3 h-[500px] md:hidden">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="">
              <CategoryCard category={cat} className="h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ── BESTSELLERS ── */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
            Customer Favourites
          </p>
          <h2 className="font-display text-brand-black text-headline-lg font-bold mt-1">
            Our Bestsellers
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12"
        >
          {bestsellers.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} variant="home" />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link
            href="/shop"
            className="bg-brand-black text-white rounded-full px-8 py-3 font-body font-medium hover:bg-gold hover:text-black transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PhilosophySection />
      </motion.div>
    </>
  );
}
