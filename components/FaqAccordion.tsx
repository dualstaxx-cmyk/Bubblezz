"use client";

import { FAQ } from "@/data/faqs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#e8e0d5] py-4 md:py-5">
          <button
            className="flex justify-between items-center w-full text-left cursor-pointer min-h-[48px]"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-body font-semibold text-brand-black text-sm md:text-base pr-4">
              {faq.q}
            </span>
            <span className="text-gold text-xl font-light flex-shrink-0 leading-none">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="font-body text-gray-500 text-xs md:text-sm mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
