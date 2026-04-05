import { Instagram, Music2, PinIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-gold">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-16 py-10 md:py-16">
        {/* Col 1 — Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-gold text-2xl font-bold">Bubblezz</p>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Crafting personal care rituals through botanical intelligence.
          </p>
        </div>

        {/* Col 2 — Collections */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest font-body font-semibold mb-4">
            Collections
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Skin Care", href: "/shop?category=skincare" },
              { label: "Hair Care", href: "/shop?category=haircare" },
              { label: "Baby Care", href: "/shop?category=babycare" },
              { label: "Home Care", href: "/shop?category=homecare" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-400 text-xs md:text-sm font-body hover:text-gold transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Support */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest font-body font-semibold mb-4">
            Support
          </p>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Shipping Guide", href: "/faq" },
              { label: "Returns", href: "/faq" },
              { label: "Contact Us", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-400 text-xs md:text-sm font-body hover:text-gold transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Connect */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest font-body font-semibold mb-4">
            Connect
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <PinIcon size={20} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <Music2 size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-0 pt-6 pb-6 px-4 md:px-16">
        <p className="text-gray-500 text-[10px] md:text-xs text-center font-body">
          © {new Date().getFullYear()} Bubblezz Personal Care. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
