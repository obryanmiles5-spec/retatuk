import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Premium SVG Icon representing Helix + Flask */}
      <div className={`relative p-2 rounded-xl border shadow-sm flex-shrink-0 transition-colors duration-200 ${
        light 
          ? "bg-slate-800 border-slate-700 text-teal-400" 
          : "bg-teal-50/80 border-teal-100/50 text-teal-700"
      }`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Flask base outline */}
          <path d="M35 22h30 M50 22v10" stroke="currentColor" strokeWidth="5" />
          
          {/* Flask body */}
          <path d="M44 22v15 L22 75 c-2 4 1 8 5 8 h46 c4 0 7-4 5-8 L56 37 V22" stroke="currentColor" strokeWidth="5" />
          
          {/* Helix curves wrapping around & inside the flask */}
          <path d="M28 65 Q 50 45, 72 65" stroke="url(#helixGradient1)" strokeWidth="4.5" />
          <path d="M28 50 Q 50 70, 72 50" stroke="url(#helixGradient2)" strokeWidth="4.5" strokeDasharray="3,3" />

          {/* Atomic bonds / nodes */}
          <circle cx="50" cy="57" r="4.5" fill="currentColor" />
          <circle cx="34" cy="61" r="3.5" fill={light ? "#34d399" : "#0d9488"} />
          <circle cx="66" cy="61" r="3.5" fill={light ? "#2dd4bf" : "#059669"} />
          
          <defs>
            <linearGradient id="helixGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light ? "#2dd4bf" : "#0f766e"} />
              <stop offset="100%" stopColor={light ? "#34d399" : "#0d9488"} />
            </linearGradient>
            <linearGradient id="helixGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light ? "#10b981" : "#059669"} />
              <stop offset="100%" stopColor={light ? "#6ee7b7" : "#10b981"} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold text-base sm:text-lg tracking-tight leading-none ${
            light ? "text-white" : "text-slate-900"
          }`}>
            UK <span className="text-teal-600">PEPTIDE</span> LABS
          </span>
          <span className={`text-[9px] font-mono tracking-widest uppercase font-bold mt-1 ${
            light ? "text-teal-400" : "text-teal-700"
          }`}>
            Analytical Standards
          </span>
        </div>
      )}
    </div>
  );
}
