import React, { useState } from "react";
import { PEPTIDES_DATA } from "../data";
import { PeptideProduct } from "../types";
import { FileText, ShoppingCart, Check, FlaskConical, X, ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  onAddToCart: (product: PeptideProduct) => void;
}

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<PeptideProduct | null>(null);

  // Filter 4 high-profile featured products
  const featuredIds = ["bpc-157-5mg", "tb-500-5mg", "cjc-1295-mod-grf-2mg", "ipamorelin-2mg"];
  const featuredProducts = PEPTIDES_DATA.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-100/50">
            Featured standards
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            High-Demand Analytical Reference Standards
          </h2>
          <div className="h-1 w-16 bg-teal-600 mx-auto rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Our most frequently requested chemical compounds, double-verified by High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry for academic and clinical research laboratories across the UK.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50/50 border border-slate-100/80 rounded-3xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top border decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-600/10 group-hover:bg-teal-600/30 transition-colors" />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-white text-teal-800 border border-slate-100 uppercase tracking-wider">
                    {product.size}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {product.purity}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative w-full h-36 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-3 border border-slate-100/60 group-hover:border-teal-100/30 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <span className="block text-[9px] font-mono text-slate-400">
                    {product.category}
                  </span>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 mt-5 border-t border-slate-100/80 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase font-mono">Indicative Price</span>
                  <span className="text-lg font-display font-extrabold text-slate-900">
                    £{product.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 text-slate-500 hover:text-teal-700 hover:bg-white border border-slate-100 rounded-lg transition-all"
                    title="View analytical specifications"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-3 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-[10px] tracking-wide uppercase rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ShoppingCart className="w-3 h-3" />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full catalogue CTA */}
        <div className="mt-12 text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow"
          >
            Explore Full Scientific Catalogue
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Analytical Specs Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-100 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-teal-50/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-50 rounded-xl text-teal-700">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 leading-none">
                      Analytical Specifications
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                      COMPOUND IDENTIFICATION LOG
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column: Product Image */}
                  <div className="md:col-span-1 flex flex-col items-center justify-start">
                    <div className="w-full bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-center aspect-square">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Column: Product Details */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-teal-700 font-bold block mb-1">
                        Compound name
                      </span>
                      <h4 className="text-xl font-display font-extrabold text-slate-900">
                        {selectedProduct.name}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">Batch Purity</span>
                        <span className="font-mono font-bold text-teal-800 text-sm mt-0.5 block">{selectedProduct.purity}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">Vial Content</span>
                        <span className="font-mono font-bold text-slate-800 text-sm mt-0.5 block">{selectedProduct.size}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">CAS Registry</span>
                        <span className="font-mono font-bold text-slate-800 text-sm mt-0.5 block">{selectedProduct.casNumber || "N/A"}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">Formulation</span>
                        <span className="font-mono font-bold text-slate-800 text-xs mt-0.5 block truncate">{selectedProduct.formulation}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-bold text-slate-900 font-display">Scientific Background</h5>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        {selectedProduct.longDescription}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-bold text-slate-900 font-display">Targeted Research Focus</h5>
                      <div className="p-3 bg-teal-50/50 border border-teal-100 rounded-xl text-teal-950 font-medium text-xs sm:text-sm">
                        🔍 {selectedProduct.researchFocus}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 space-y-1">
                      <h5 className="font-bold text-amber-900 text-xs uppercase font-mono flex items-center gap-1.5">
                        ⚠️ Statutory compliance warning
                      </h5>
                      <p className="text-[11px] text-amber-800 leading-normal">
                        This compound is distributed exclusively for research use and analytical standardisation within academic, clinical, or chemical research environments. It is strictly not intended, licensed, or approved for clinical administration or human use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50 gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Unit cost</span>
                  <span className="text-xl font-display font-extrabold text-slate-900 leading-none">
                    £{selectedProduct.price.toFixed(2)} GBP
                  </span>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="px-5 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
