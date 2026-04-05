"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "917XXXXXXXXXX";

type FormState = "idle" | "submitting";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    const text = [
      `Hi Bubblezz, I'd like to get in touch.`,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setState("idle");
  };

  const inputClass =
    "w-full border-0 border-b border-gray-200 focus:border-gold focus:outline-none py-3 font-body text-base bg-transparent text-brand-black placeholder:text-gray-300 transition-colors duration-200";
  const labelClass =
    "text-[11px] uppercase tracking-wider text-gray-400 font-body block mb-1";

  return (
    <div className="bg-white border border-[#e8e0d5] rounded-2xl shadow-sm p-8 md:p-10">
      <h2 className="font-display text-brand-black text-headline-md">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full bg-brand-black text-white rounded-full py-3 mt-2 font-body font-medium hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Opening WhatsApp…" : "Send via WhatsApp"}
        </button>
      </form>
    </div>
  );
}
