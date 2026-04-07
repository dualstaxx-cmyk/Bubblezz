import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bubblezz Privacy Policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://bubblezz.pages.dev/privacy" },
  openGraph: {
    title: "Privacy Policy – Bubblezz Personal Care",
    description: "How Bubblezz collects, uses, and protects your personal information.",
    url: "https://bubblezz.pages.dev/privacy",
  },
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
              respond to your inquiry and process your order. We only collect
              information that is necessary and relevant to providing our service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              Your information is used only to:
            </p>
            <ul className="flex flex-col gap-2 pl-1">
              {[
                "Respond to your product enquiries and questions",
                "Process and fulfil your orders",
                "Send order confirmation and delivery updates via WhatsApp",
                "Provide after-sales customer support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal data with third
              parties for marketing purposes, ever.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Data Retention
            </h2>
            <p>
              We retain your contact information only as long as necessary to
              fulfil your order and resolve any support queries. WhatsApp
              conversation history is subject to WhatsApp&apos;s own data
              policies. You may request deletion of your data at any time by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Third-Party Services
            </h2>
            <p>
              This website is hosted on Cloudflare Pages. Order and support
              communications are handled via WhatsApp (Meta Platforms). These
              third-party services have their own privacy policies which govern
              how they handle data. We do not integrate any advertising
              networks, analytics trackers, or data brokers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Cookies
            </h2>
            <p>
              This website does not use tracking or advertising cookies. No
              personal data is collected passively through cookies. Only
              essential browser session data may be temporarily stored to
              ensure site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Your Rights
            </h2>
            <p>
              You have the right to access, correct, or request deletion of any
              personal information we hold about you. To exercise these rights,
              please contact us via our{" "}
              <Link href="/contact" className="text-gold hover:underline decoration-gold">
                Contact page
              </Link>
              {" "}and we will respond within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected on this page with an updated date. We encourage you
              to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="font-display text-brand-black text-headline-md mb-3">
              Contact Us
            </h2>
            <p>
              For any privacy-related questions, please reach out via our{" "}
              <Link
                href="/contact"
                className="text-gold hover:underline decoration-gold"
              >
                Contact page
              </Link>
              {" "}or email us at{" "}
              <a href="mailto:aishwarya@amulya.com" className="text-gold hover:underline decoration-gold">
                aishwarya@amulya.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
