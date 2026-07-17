import { AlertTriangle, ShieldCheck, Scale, AlertOctagon } from "lucide-react";

export default function SafetyDisclaimer() {
  return (
    <section id="safety" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Safety & Regulatory Standards
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
              UK Compliance & Chemical Safety Protocols
            </h2>
            <div className="h-0.5 w-16 bg-amber-600 mx-auto rounded-full mt-4" />
          </div>

          {/* Detailed Compliance Statement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 text-white rounded-lg">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Regulatory Compliance (HMR 2012)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                UK Peptide Labs operates in strict compliance with the United Kingdom Human Medicines Regulations 2012. Under UK law, chemical research peptides are categorized as research chemicals and reference materials. They are not licensed by the MHRA for therapeutic or clinical administration. Accordingly, they are distributed exclusively for academic research, chemical analysis, and laboratory calibration.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 text-white rounded-lg">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Exclusion of Medical Advice
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All information, datasheets, articles, and documentation provided on this website are compiled strictly for educational, informational, and reference purposes. UK Peptide Labs does not provide therapeutic dosage instructions, physiological administration protocols, or medical consultation. None of the compounds on this site are formulated to diagnose, treat, prevent, or cure any disease or medical condition.
              </p>
            </div>
          </div>

          {/* Immersive Warning Banner */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/60 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-amber-700 flex-shrink-0" />
              Prerequisite Verification for Laboratory Procurement
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              We reserve the absolute right to refuse or cancel orders if we detect or suspect that the purchased compounds are being procured for clinical administration, personal use, or any application outside of legal laboratory research. By initiating a purchase or procurement inquiry, customers verify that they represent a qualified researcher, laboratory technician, or academic investigator operating within a certified research facility.
            </p>
            <div className="pt-2">
              <p className="text-[11px] text-amber-800 italic leading-relaxed">
                * Before engaging with any experimental compounds, investigators must refer to their institution’s Chemical Safety Office, review the material safety data sheet (MSDS), and consult qualified healthcare professionals regarding personal medical guidelines.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
