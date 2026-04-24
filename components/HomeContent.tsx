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
      {/* ── HERO — MOBILE ── */}
      <section className="md:hidden bg-cream overflow-hidden">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-brand-black text-center leading-[1.1] text-[2.25rem] px-6 pt-5"
          >
            Unlock Your<br />
            <span className="italic font-normal">Natural Beauty</span>
          </motion.h1>

          {/* Brand name */}
          <motion.p
            variants={fadeUp}
            className="font-display italic text-gold text-lg tracking-wide mt-2"
          >
            Bubblezz
          </motion.p>

          {/* Full-bleed product image */}
          <motion.div
            variants={fadeUp}
            className="relative w-full h-[400px] mt-4"
          >
            <Image
              src="/hero-bottle.jpeg"
              alt="Bubblezz Premium Botanical Serum — signature formula"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Gradient fade at bottom for CTA overlap */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream/80 to-transparent" />
          </motion.div>

          {/* Single pill CTA overlapping image */}
          <motion.div variants={fadeUp} className="px-6 w-full -mt-10 relative z-10 pb-5">
            <Link
              href="/shop"
              className="block w-full bg-brand-black text-white rounded-full py-3.5 font-body font-medium text-[11px] tracking-[0.2em] uppercase text-center hover:bg-gold hover:text-brand-black transition-colors duration-300 shadow-lg"
            >
              Explore the Ritual
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── HERO — DESKTOP (unchanged) ── */}
      <section className="hidden md:flex bg-cream items-center min-h-screen">
        <div className="w-full grid grid-cols-2 items-center px-16 gap-16 min-h-screen">

          {/* Left — editorial text */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.p
              variants={fadeUp}
              className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold"
            >
              The Art of the Effervescent
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-brand-black mt-4 leading-[1.05] text-[clamp(2.75rem,5.5vw,5rem)]"
            >
              Unlock Your<br />
              <span className="italic font-normal">Natural</span>{" "}
              Beauty.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 font-body text-base max-w-sm mt-5 leading-relaxed"
            >
              Elevate your daily ritual with botanical infusions designed for
              cellular vitality and timeless radiance.
            </motion.p>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-gold text-xs">★</span>
                ))}
              </div>
              <span className="text-gray-400 font-body text-xs">
                4.9 · 2,000+ customers · Dermatologist Tested
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-row gap-3 mt-8">
              <Link
                href="/shop"
                className="bg-brand-black text-white px-8 py-3.5 font-body font-medium text-xs tracking-widest uppercase hover:bg-gold hover:text-brand-black transition-colors duration-300 text-center"
              >
                Explore Collections →
              </Link>
              <Link
                href="/about"
                className="text-brand-black font-body text-sm py-3.5 text-center underline underline-offset-4 hover:text-gold transition-colors duration-300"
              >
                Discover the Ritual
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — hero bottle image in white card frame */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative h-[600px] rounded-[20px] bg-[#F5F0EA] p-5"
          >
            <div className="relative h-full w-full rounded-[14px] overflow-hidden">
              <Image
                src="/hero-bottle.jpeg"
                alt="Bubblezz Premium Botanical Serum — signature formula"
                fill
                className="object-contain"
                priority
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <TrustStrip />

      {/* ── CURATED COLLECTIONS ── */}
      <section className="bg-cream py-14 md:py-28 px-5 md:px-16">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-end mb-14">
          <div>
            <h2 className="font-display text-brand-black leading-tight text-[clamp(2rem,4vw,3.5rem)]">
              Curated for the<br />
              <span className="italic font-normal">discerning palette.</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-brand-black font-body text-xs uppercase tracking-widest hover:text-gold transition-colors underline underline-offset-4 self-start md:self-auto"
          >
            View All Categories →
          </Link>
        </div>

        {/* Desktop asymmetric grid */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px]">
          <div className="col-span-1 row-span-2">
            <CategoryCard category={CATEGORIES[0]} className="h-full" />
          </div>
          <div className="col-span-1 row-span-1">
            <CategoryCard category={CATEGORIES[1]} className="h-full" />
          </div>
          <div className="col-span-1 row-span-1">
            <CategoryCard category={CATEGORIES[2]} className="h-full" />
          </div>
          <div className="col-span-2 row-span-1">
            <CategoryCard category={CATEGORIES[3]} className="h-full" />
          </div>
        </div>

        {/* Mobile 2×2 grid */}
        <div className="grid grid-cols-2 gap-3 h-[500px] md:hidden">
          {CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <CategoryCard category={cat} className="h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ── THE GOLDEN ELIXIR (Dark Feature Spotlight) ── */}
      <section className="bg-brand-black py-14 md:py-28 px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-body font-semibold">
              Signature Formula
            </p>
            <h2 className="font-display text-white leading-tight mt-4 text-[clamp(2.5rem,4vw,4rem)]">
              The Golden<br />
              <span className="italic font-normal">Elixir.</span>
            </h2>
            <p className="text-gray-400 font-body text-sm md:text-base max-w-md mt-6 leading-relaxed">
              Sourced from nature&apos;s finest botanicals, our signature blend is
              cold-pressed to preserve its vital effervescence, delivering
              uncompromised purity to your daily ritual.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-10 border border-gold text-gold font-body text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-gold hover:text-brand-black transition-all duration-300"
            >
              Discover the Product →
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#111]">
              <Image
                src="/products/bath-salts.jpeg"
                alt="Bubblezz Lavender Bath Salt — The Golden Elixir"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE ICONS (Bestsellers) ── */}
      <section className="bg-white py-14 md:py-28 px-5 md:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end mb-14"
        >
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.25em] font-body font-semibold">
              Customer Favourites
            </p>
            <h2 className="font-display text-brand-black leading-tight mt-2 text-[clamp(2rem,4vw,3.5rem)]">
              The Icons.
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-brand-black font-body text-xs uppercase tracking-widest hover:text-gold transition-colors underline underline-offset-4 self-start md:self-auto"
          >
            Explore Collection →
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {bestsellers.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} variant="home" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PRESS QUOTE ── */}
      <section className="bg-cream-dark py-14 md:py-28 px-5 md:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-display text-brand-black leading-relaxed italic text-[clamp(1.25rem,2.5vw,2rem)]">
            &ldquo;A masterclass in botanical engineering. Bubblezz redefines
            the luxury ritual with uncompromising purity.&rdquo;
          </p>
          <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12 mt-12 opacity-30">
            {["VOGUE", "BAZAAR", "ELLE", "VANITY FAIR"].map((pub) => (
              <span
                key={pub}
                className="font-body text-brand-black text-xs md:text-sm uppercase tracking-[0.2em] font-bold"
              >
                {pub}
              </span>
            ))}
          </div>
        </motion.div>
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
