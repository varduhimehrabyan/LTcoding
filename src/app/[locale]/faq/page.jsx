"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export default function FAQPage() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t.raw("questions");

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-5 lg:p-20">
      <h1 className="text-2xl text-center text-teal font-extrabold">
        {t("title")}
      </h1>
      <div className="mx-auto max-w-3xl py-20">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} data-aos="fade-up" className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex w-full items-center justify-between rounded-xl border p-6 text-left transition-all duration-300 focus:outline-none ${
                  isOpen
                    ? "rounded-b-none border-darkBlue bg-darkBlue"
                    : "border-white/20 bg-transparent hover:border-white/40"
                }`}
              >
                <span className="text-lg font-bold text-white md:text-xl">
                  {faq.question}
                </span>

                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-white text-darkBlue"
                      : "rotate-0 text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="rounded-b-xl border border-t-0 border-darkBlue bg-darkBlue px-6 pb-6 pt-2">
                  <p className="text-base leading-relaxed text-white/90 md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
