import ContactForm from "@/components/ContactForm";
import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bubblezz. Chat with us on WhatsApp, send a message, or visit us in Pune, Maharashtra.",
};

const WHATSAPP_NUMBER = "917XXXXXXXXXX";

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* ── HERO ── */}
      <section className="px-4 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
              Get In Touch
            </p>
            <h1 className="font-display text-brand-black text-headline-lg md:text-display-md font-bold mt-2 leading-tight">
              Get in Touch With Your{" "}
              <span className="italic text-gold">Inner Glow.</span>
            </h1>
            <p className="font-body text-gray-500 text-sm max-w-xs mt-4 leading-relaxed">
              Whether you have a question about our botanical blends or need
              assistance with an order, our concierge team is here to help you
              cultivate your daily ritual.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-[#25D366] text-white rounded-full px-8 py-3 flex items-center justify-center gap-2 w-full md:w-fit font-body font-medium hover:bg-[#1da851] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat with us on WhatsApp
            </a>
            <p className="italic text-gray-400 text-xs mt-2 font-body">
              Typically replies within 1 hour
            </p>
          </div>

          {/* Right — product image, hidden on mobile */}
          <div className="hidden md:block bg-gray-50 p-8 rounded-2xl">
            <div className="relative w-full aspect-[5/4]">
              <Image
                src="https://placehold.co/500x400/FAF7F2/1a1a1a?text=Bubblezz+Collection"
                alt="Bubblezz Products"
                fill
                className="object-contain rounded-2xl"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="bg-white px-4 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left — Form card */}
          <ContactForm />

          {/* Right — info cards */}
          <div className="flex flex-col gap-4">
            {/* Contact Details card */}
            <div className="bg-cream rounded-2xl p-8">
              <p className="font-body font-semibold text-brand-black text-lg mb-6">
                Contact Details
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Mail,
                    label: "EMAIL US",
                    value: "aishwarya@amulya.com",
                  },
                  {
                    icon: MapPin,
                    label: "VISIT US",
                    value: "Pune, Maharashtra, India",
                  },
                  {
                    icon: Clock,
                    label: "RESPONSE HOURS",
                    value: "Mon–Sat, 9am–6pm IST",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="border-l-2 border-gold pl-4 flex items-start gap-3"
                  >
                    <Icon size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-[10px] uppercase tracking-wider font-body">
                        {label}
                      </p>
                      <p className="text-brand-black text-sm font-body mt-0.5">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stockist card */}
            <div className="bg-brand-black rounded-2xl p-8">
              <h3 className="font-display text-white text-headline-md">
                Stockist Inquiry?
              </h3>
              <p className="text-gray-400 text-sm mt-2 font-body leading-relaxed">
                Interested in carrying Bubblezz in your boutique? We curate our
                partnerships with care.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in becoming a Bubblezz stockist. Can you share more details?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-body font-semibold mt-4 inline-block hover:underline decoration-gold text-sm"
              >
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="px-4 md:px-16 pb-20">
        <div className="rounded-2xl overflow-hidden border-[1.5px] border-gold h-48 md:h-80">
          <iframe
            src="https://maps.google.com/maps?q=Pune,Maharashtra,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Bubblezz Location - Pune, Maharashtra"
          />
        </div>
      </section>
    </div>
  );
}
