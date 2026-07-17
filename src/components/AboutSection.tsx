import { ShieldCheck, Flame, Scale, Microscope } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header & Main Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-700">
                Scientific Overview
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Understanding Peptides & Analytical Standards
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
              <p>
                Peptides are short chains of amino acids, linked by peptide bonds, that act as fundamental biological messengers. By binding to specific cell-surface receptors, they initiate cascade pathways that regulate essential cellular processes including protein synthesis, tissue healing, collagen production, and metabolic signaling.
              </p>
              <p>
                In the United Kingdom, peptides serve as invaluable analytical standards. They enable researchers across academia, biotechnology, and medicine to study receptor affinity, cellular pathways, and molecular dynamics. Our mission is to facilitate these studies by supplying compounds that match the exact chemical specifications defined in peer-reviewed scientific literature.
              </p>
              <p>
                At UK Peptide Labs, we operate with an unwavering commitment to quality and transparency. Every single compound is synthesised utilizing advanced solid-phase peptide synthesis (SPPS) techniques and subsequently purified via preparative HPLC. This careful focus ensures the removal of truncated sequences and organic impurities, delivering reliable benchmarks for your research programmes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
                <Microscope className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Academic Procurement</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Supplying major UK universities, research institutions, and contract laboratories.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
                <Scale className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Regulatory Compliance</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Strictly aligned with the Human Medicines Regulations 2012 for legal research procurement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Indicators Sidebar / Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient light ring */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-display font-bold text-lg tracking-tight border-b border-slate-800 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              The UKPL Quality Standard
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-mono text-xs font-bold mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide text-slate-200">HPLC Purity Verification</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Every batch is double-verified to confirm &gt;99% purity. We do not blend, dilute, or distribute sub-standard batches.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-mono text-xs font-bold mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide text-slate-200">Sterile Argon Packing</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Vials are vacuum-sealed and backfilled with inert, sterile argon gas to eliminate moisture and prevent oxidation during long-term storage.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-mono text-xs font-bold mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide text-slate-200">Refrigerated Logistics Chain</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    From synthesis to dispatch, products are kept at stable temperatures to preserve structural integrity, maintaining peptide stability.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-mono text-xs font-bold mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide text-slate-200">Traceable Production Logs</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Full batch traceability is maintained for quality assurance, providing transparency for audit records.
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 text-center">
              <span className="text-[11px] font-mono text-teal-400 tracking-wider uppercase font-bold">
                🔒 Strictly Research-Grade Only
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
