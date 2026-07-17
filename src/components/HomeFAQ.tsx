import React, { useState } from "react";
import { FAQS_DATA } from "../data";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get first 4 FAQs
  const homeFAQs = FAQS_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lab Image Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200/60 group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src="https://lh3.googleusercontent.com/d/11IQjCdCHRvE8RAhVas-pUMCzZocLTM1s"
                alt="UK Peptide Labs Analytical Cleanroom Facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              {/* Overlay for depth and high contrast readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              {/* Overlay Content Box */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-teal-600 text-[9px] font-mono font-bold uppercase tracking-wider">
                  UK PL Facility
                </span>
                <p className="text-sm font-display font-bold">Class-100 Synthesis Cleanroom</p>
                <p className="text-[11px] text-slate-300 font-sans leading-normal">
                  Certified environments adhering to strict ISO standardisation and cleanroom purity protocols.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-100/50">
                Quick reference
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                Essential Research FAQ
              </h2>
              <div className="h-1 w-12 bg-teal-600 rounded-full" />
              <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed">
                Review core guidance regarding UK regulations, compound accreditation standards, and proper specimen preservation procedures.
              </p>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {homeFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-100/80 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50/40 transition-colors focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <HelpCircle className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                        <span className="font-display font-bold text-slate-900 text-sm leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`p-1.5 bg-slate-50 rounded-lg text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-teal-50 text-teal-700" : ""
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/10 font-sans">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All FAQs CTA */}
            <div className="pt-2">
              <a
                href="#faqs"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors group"
              >
                Access Full Technical FAQ Documentation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
