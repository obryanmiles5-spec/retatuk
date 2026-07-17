import React from "react";
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
                  className="hover:text-teal-400 transition-colors"
                >
                  Compliance Specifications
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
                  onClick={() => alert("Full Chemical Disclaimer: All items listed on ukpeptidelabs.co.uk are distributed as laboratory reagents and analytical reference standard crystals. These products have not been cleared by the MHRA for any human diagnosis, therapy, or dietary supplementation.")}
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
