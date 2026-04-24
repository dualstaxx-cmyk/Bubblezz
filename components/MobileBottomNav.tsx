"use client";

import { BookOpen, Leaf, Sparkles, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/shop", label: "Collections", icon: Store },
  { href: "/about", label: "The Ritual", icon: Sparkles },
  { href: "/about#story", label: "Our Story", icon: BookOpen },
  { href: "/about#philosophy", label: "Sustainability", icon: Leaf },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e8e0d5] md:hidden safe-bottom">
      <div className="flex items-center justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href.split("#")[0]));
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center gap-0.5 min-w-[64px] py-1 transition-colors duration-200 ${
                isActive ? "text-gold" : "text-gray-400"
              }`}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-[10px] font-body tracking-wide leading-none">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
