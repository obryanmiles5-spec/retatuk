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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white"
    >
      {/* Visual background accents for technical feel (no heavy AI slop, just simple CSS shapes) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-100/30 to-sky-100/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-50/40 to-slate-100/30 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 max-w-xl mx-auto lg:mx-0">
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

          {/* Graphics Display Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant Technical Specs Display Card */}
            <div className="relative w-full max-w-sm bg-white border border-slate-100 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6">
              {/* Card top bar */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-600" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800">
                    Analytical Batch Log
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  REF: UKPL-2026
                </span>
              </div>

              {/* Lab Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-slate-500 font-medium">Verified Purity Profile</span>
                  <span className="text-2xl font-display font-bold text-teal-700 leading-none">99.42%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-600 h-full w-[99.42%] rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Methodology</span>
                    <span className="block text-xs font-bold text-slate-800 mt-1">HPLC & MS Analysis</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono tracking-wider">Formulation</span>
                    <span className="block text-xs font-bold text-slate-800 mt-1">Lyophilised Crystals</span>
                  </div>
                </div>
              </div>

              {/* HPLC Chromatogram Graphic (CSS Vector Representation) */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
                <span className="block text-[10px] font-mono text-teal-400 mb-2 uppercase tracking-widest">
                  Chromatogram peak profile
                </span>
                <div className="relative h-20 flex items-end gap-1 px-1 border-b border-l border-slate-800">
                  <div className="w-2 bg-teal-600/30 h-[10%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[15%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[12%] rounded-t-sm" />
                  <div className="w-3 bg-teal-500 h-[92%] rounded-t" /> {/* Main Peak */}
                  <div className="w-2 bg-teal-600/30 h-[18%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[8%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[5%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[12%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[10%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[7%] rounded-t-sm" />
                  <div className="w-2 bg-teal-600/30 h-[4%] rounded-t-sm" />
                  {/* Grid Lines */}
                  <div className="absolute top-[30%] left-0 w-full border-t border-dashed border-slate-800/50 pointer-events-none" />
                  <div className="absolute top-[60%] left-0 w-full border-t border-dashed border-slate-800/50 pointer-events-none" />
                </div>
                <div className="flex justify-between font-mono text-[8px] text-slate-500 mt-1">
                  <span>0.0 min</span>
                  <span>10.0 min</span>
                  <span>20.0 min</span>
                </div>
              </div>

              {/* Lab Certification Badge */}
              <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-3 flex items-center gap-3">
                <Beaker className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-teal-950">UK Analytical Standardisation</h4>
                  <p className="text-[10px] text-teal-800 mt-0.5 font-medium leading-normal">
                    Formulated and securely packaged under ISO 9001 quality guidelines.
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
