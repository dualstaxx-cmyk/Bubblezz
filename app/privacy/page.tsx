import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bubblezz Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-widest font-body font-semibold">
          Legal
        </p>
        <h1 className="font-display text-brand-black text-headline-lg font-bold mt-2">
          Privacy Policy
        </h1>
        <p className="font-body text-gray-500 text-sm mt-2">
          Last updated: {new Date().getFullYear()}
        </p>
        <div className="w-12 h-0.5 bg-gold mt-6 mb-10" />

        <div className="flex flex-col gap-10 font-body text-gray-600 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Information We Collect
            </h2>
            <p>
              When you contact us via WhatsApp or our contact form, we may
              collect your name, phone number, and email address solely to
              respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              How We Use Your Information
            </h2>
            <p>
              Your information is used only to respond to enquiries, process
              orders, and provide customer support. We do not sell or share your
              personal data with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Cookies
            </h2>
            <p>
              This website does not use tracking or advertising cookies. Only
              essential session data may be stored to ensure site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Contact
            </h2>
            <p>
              For any privacy-related questions, please reach out via our{" "}
              <Link
                href="/contact"
                className="text-gold hover:underline decoration-gold"
              >
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
