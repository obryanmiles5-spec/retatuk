import { useState } from "react";
import { FAQS_DATA } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-700">
            Support Center
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-16 bg-teal-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Clear, transparent, and compliant answers regarding UK regulations, compound storage, and laboratory standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                    <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 bg-slate-50 rounded-lg text-slate-400 group-hover:text-slate-650 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-teal-50 text-teal-700" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  id={`faq-panel-${index}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Footer callout */}
        <div className="mt-10 p-5 bg-teal-50/40 border border-teal-100/50 rounded-2xl text-center">
          <p className="text-xs text-teal-900">
            Have a question that is not addressed here? Contact our laboratory support office directly using the contact form below.
          </p>
        </div>

      </div>
    </section>
  );
}
