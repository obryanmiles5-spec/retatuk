import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    window.location.hash = "#" + targetId;
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo light={true} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              UK Peptide Labs is a premier British chemical engineering team producing synthesised reference standards and analytical peptides. Our compounds are processed under strict ISO laboratory standards to ensure batch stability.
            </p>
            {/* Social Channels */}
            <div className="space-y-2.5 pt-2">
              <h5 className="text-[10px] text-teal-400 font-mono uppercase tracking-widest font-extrabold">
                Connect With Us
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.tiktok.com/@peptites_source_review?_r=1&_t=ZN-98GaS0Eb0YY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-700 hover:text-white rounded-xl border border-slate-700/50 hover:border-teal-600/30 text-slate-400 transition-all duration-250 flex items-center justify-center shadow-sm cursor-pointer group"
                  title="Follow us on TikTok"
                >
                  <svg 
                    className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-105" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.15 2.27 1.93 3.71 2.22l-.01 3.97c-1.21-.12-2.39-.58-3.41-1.25-.87-.58-1.59-1.37-2.11-2.28a9.42 9.42 0 0 1-.16 3.19c-.31 1.76-1.12 3.4-2.35 4.69a9.6 9.6 0 0 1-5.18 2.87c-1.92.38-3.92.11-5.69-.76A9.72 9.72 0 0 1 .49 11.72c-.52-1.89-.37-3.92.42-5.71A9.82 9.82 0 0 1 5.92 1.34c1.88-.51 3.92-.35 5.69.46.01 1.44.01 2.88.02 4.31-.9-.55-1.95-.82-3-.76a5.18 5.18 0 0 0-4.04 2.85 5.37 5.37 0 0 0 .19 4.32c.76 1.48 2.28 2.45 3.93 2.5a5.19 5.19 0 0 0 4.32-2.32c.52-.86.75-1.87.66-2.88.01-4.41.01-8.83.02-13.24Z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.instagram.com/buy_peptides_online_?igsh=NDFwcTAyaDY0b2g2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-700 hover:text-white rounded-xl border border-slate-700/50 hover:border-teal-600/30 text-slate-400 transition-all duration-250 flex items-center justify-center shadow-sm cursor-pointer group"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                </a>

                <a
                  href="https://www.facebook.com/share/p/1Y2GX7aqWQ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-teal-700 hover:text-white rounded-xl border border-slate-700/50 hover:border-teal-600/30 text-slate-400 transition-all duration-250 flex items-center justify-center shadow-sm cursor-pointer group"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "home")}
                  className="hover:text-teal-400 transition-colors"
                >
                  Return to Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "about")}
                  className="hover:text-teal-400 transition-colors"
                >
                  About Our Chemistry
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleLinkClick(e, "products")}
                  className="hover:text-teal-400 transition-colors"
                >
                  Reference Standards
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  onClick={(e) => handleLinkClick(e, "safety")}
                  className="hover:text-teal-400 font-medium transition-colors"
                >
                  Safety & Compliance
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={(e) => handleLinkClick(e, "faqs")}
                  className="hover:text-teal-400 transition-colors"
                >
                  Technical FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Document Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Statutory Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => alert("UK Peptide Labs Privacy Policy: In compliance with UK GDPR, all personal customer data, research requests, and procurement correspondence are encrypted. No tracking cookies are used to collect scientific project details.")}
                  className="hover:text-teal-400 transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  Privacy Policy & UK GDPR
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Terms of Service: By procuring reference materials from UK Peptide Labs, the customer explicitly contracts that compounds are for legitimate scientific in-vitro research only. Reselling, clinical trials, or personal use constitutes a breach of contract.")}
                  className="hover:text-teal-400 transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  Standard Terms of Research Procurement
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Full Chemical Disclaimer: All items listed on buyretatrutideonline.uk are distributed as laboratory reagents and analytical reference standard crystals. These products have not been cleared by the MHRA for any human diagnosis, therapy, or dietary supplementation.")}
                  className="hover:text-teal-400 transition-colors text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  Chemical Safety Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} UK Peptide Labs. All rights reserved. Registered Office: London, UK.<br />
            UK Peptide Labs is a trading name of UK Peptide Laboratories Ltd. Company Registered in England & Wales (No. 12948194).
          </p>
          <div className="text-left md:text-right">
            <span className="font-mono text-teal-500/70 uppercase tracking-widest font-bold">
              🇬🇧 UK Standardised Laboratory
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
