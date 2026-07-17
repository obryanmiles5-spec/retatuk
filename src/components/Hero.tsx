import React from "react";
import { ArrowRight, ShieldCheck, Truck, Beaker } from "lucide-react";

export default function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = "#products";
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = "#contact";
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/10 to-white border-b border-slate-100"
    >
      {/* Visual background accents for technical feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-100/20 to-sky-100/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-50/30 to-slate-100/20 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-800 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              UK Chemical Analytical Standards
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-none">
              Pioneering Peptide Research with <span className="text-teal-700">Absolute Purity</span>
            </h1>

            <p className="text-lg text-slate-600 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              UK Peptide Labs synthesises premium, research-grade peptides of 99%+ certified purity. Operating from leading facilities, we provide analytical standards for academic institutions, medical laboratories, and scientific organisations across the United Kingdom.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-cta-shop"
                onClick={handleExploreClick}
                className="group w-full sm:w-auto px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base tracking-wide cursor-pointer"
              >
                Shop Peptides
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-contact"
                onClick={handleContactClick}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 font-medium rounded-full shadow-sm transition-all duration-200 text-base tracking-wide cursor-pointer"
              >
                Contact Laboratory
              </button>
            </div>

            {/* Quick Benefits Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-150 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-1.5 bg-emerald-50 rounded-md">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="text-xs font-semibold text-slate-700 tracking-wide text-left">
                  99%+ HPLC Certified
                </span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-1.5 bg-teal-50 rounded-md">
                  <Truck className="w-5 h-5 text-teal-700" />
                </div>
                <span className="text-xs font-semibold text-slate-700 tracking-wide text-left">
                  Tracked Next-Day UK Shipping
                </span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-1.5 bg-slate-50 rounded-md">
                  <Beaker className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-xs font-semibold text-slate-700 tracking-wide text-left">
                  Strictly Non-Clinical Standards
                </span>
              </div>
            </div>
          </div>

          {/* Graphics/Image Display Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-full">
            <div className="relative w-full max-w-md bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] min-h-[350px] lg:min-h-[460px] group">
              <img
                src="https://lh3.googleusercontent.com/d/1C0byYOq96K9JbKqWPATH2_B7_3fElnMv"
                alt="UK Peptide Labs Crystallised High Purity Peptides"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700"
              />
              {/* Subtle bottom gradient to blend image and add clean premium layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Lab Authenticity Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-2xl p-3 flex items-center gap-3 shadow-md">
                <Beaker className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Certified Laboratory Standard</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">
                    Batch-synthesised and strictly validated for institutional research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
