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
    <nav className="sticky top-0 z-40 bg-white border-b border-[#e8e0d5]">
      <div className="flex justify-between items-center px-4 md:px-16 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-lg md:text-xl text-brand-black tracking-tight"
        >
          Bubblezz
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/shop"
            className="bg-brand-black text-white rounded-full px-5 py-2 text-sm font-body hover:bg-gold hover:text-black transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
