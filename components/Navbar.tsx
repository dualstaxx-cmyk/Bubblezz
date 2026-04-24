"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e8e0d5]">
      {/* ── Mobile header ── */}
      <div className="md:hidden flex items-center justify-between px-5 py-3.5">
        <button
          className="text-brand-black w-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link
          href="/"
          className="font-display italic text-brand-black text-lg tracking-tight absolute left-1/2 -translate-x-1/2"
        >
          Bubblezz
        </Link>
        <div className="w-8" />
      </div>

      {/* ── Desktop header (unchanged) ── */}
      <div className="hidden md:flex justify-between items-center px-16 py-4">
        <Link
          href="/"
          className="font-display font-bold text-xl text-brand-black tracking-tight"
        >
          Bubblezz
        </Link>
        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-body text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-gold underline decoration-gold underline-offset-4"
                    : "text-brand-black hover:text-gold"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/shop"
          className="bg-brand-black text-white rounded-full px-5 py-2 text-sm font-body hover:bg-gold hover:text-black transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur border-b border-[#e8e0d5] px-6 py-4 flex flex-col gap-1 shadow-md"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-body text-base py-3 transition-colors duration-300 ${
                    isActive
                      ? "text-gold font-semibold underline decoration-gold underline-offset-4"
                      : "text-brand-black hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-black text-white rounded-full px-5 py-2.5 text-sm font-body text-center hover:bg-gold hover:text-black transition-all duration-300 mt-2"
            >
              Shop Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
