import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Premium Engineered Laboratory Emblem Icon */}
      <div className={`relative p-2 rounded-xl border flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
        light 
          ? "bg-slate-900 border-slate-800 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.1)]" 
          : "bg-white border-slate-200/80 text-teal-700 shadow-sm"
      }`}>
        {/* Subtle decorative target corners inside the icon background */}
        <span className={`absolute top-1 left-1 w-1.5 h-1.5 border-t border-l rounded-tl-[2px] ${light ? "border-teal-500/30" : "border-teal-600/20"}`} />
        <span className={`absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r rounded-br-[2px] ${light ? "border-teal-500/30" : "border-teal-600/20"}`} />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-7 h-7 relative z-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Flask Outer Collar */}
          <path d="M38 18h24 M50 18v8" strokeWidth="5" />
          
          {/* Main Laboratory Flask Body */}
          <path d="M43 25v12 L21 76 c-1.5 3 0.5 7 4 7 h50 c3.5 0 5.5-4 4-7 L57 37 V25" strokeWidth="4.5" />
          
          {/* Premium Engineered DNA Helix & Molecular Bonding Overlays */}
          <path d="M26 68 Q 50 48, 74 68" stroke="url(#logoHelix1)" strokeWidth="5" />
          <path d="M26 53 Q 50 73, 74 53" stroke="url(#logoHelix2)" strokeWidth="5" strokeDasharray="2,3" />

          {/* Core Molecular Nodes */}
          <circle cx="50" cy="59" r="4.5" fill="currentColor" />
          <circle cx="33" cy="63" r="3.5" fill={light ? "#2dd4bf" : "#0d9488"} stroke={light ? "#0f172a" : "#ffffff"} strokeWidth="1" />
          <circle cx="67" cy="63" r="3.5" fill={light ? "#34d399" : "#059669"} stroke={light ? "#0f172a" : "#ffffff"} strokeWidth="1" />
          
          {/* Dynamic Chemical Vapor Micro-Orbs */}
          <circle cx="50" cy="33" r="2" className="animate-pulse" fill={light ? "#2dd4bf" : "#0f766e"} />
          <circle cx="47" cy="44" r="1.5" fill={light ? "#14b8a6" : "#0d9488"} />

          <defs>
            <linearGradient id="logoHelix1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light ? "#2dd4bf" : "#0f766e"} />
              <stop offset="100%" stopColor={light ? "#34d399" : "#0d9488"} />
            </linearGradient>
            <linearGradient id="logoHelix2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light ? "#10b981" : "#059669"} />
              <stop offset="100%" stopColor={light ? "#6ee7b7" : "#10b981"} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold text-base sm:text-lg tracking-tight leading-none transition-colors duration-200 group-hover:text-teal-600 ${
            light ? "text-white" : "text-slate-900"
          }`}>
            UK <span className="text-teal-700">PEPTIDE</span> LABS
          </span>
          <span className={`text-[9px] font-mono tracking-widest uppercase font-extrabold mt-1 transition-colors duration-200 ${
            light ? "text-teal-400" : "text-teal-700"
          }`}>
            Analytical Standards
          </span>
        </div>
      )}
    </div>
  );
}
