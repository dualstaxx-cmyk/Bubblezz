import { Instagram, Music2, PinIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-gold">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-5 md:px-16 py-10 md:py-16">
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
          <div className="flex gap-4 flex-wrap">
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
            <a
              href="https://wa.me/917XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-xs font-body mt-4 leading-relaxed">
            Mon–Sat, 9am–6pm IST
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-0 pt-6 pb-6 px-5 md:px-16">
        <p className="text-gray-500 text-[10px] md:text-xs text-center font-body">
          © {new Date().getFullYear()} Bubblezz Personal Care. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
