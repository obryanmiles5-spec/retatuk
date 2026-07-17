import React, { useState } from "react";
import { PEPTIDES_DATA } from "../data";
import { PeptideProduct } from "../types";
import { Beaker, FlaskConical, FileText, X, Check, ShoppingCart } from "lucide-react";

interface ProductGridProps {
  onAddToCart: (product: PeptideProduct) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<PeptideProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically extract and sort unique categories
  const categories = ["All", ...Array.from(new Set(PEPTIDES_DATA.map((p) => p.category)))];

  const filteredProducts = selectedCategory === "All"
    ? PEPTIDES_DATA
    : PEPTIDES_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-700">
            Analytical Catalogue
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Premium Peptide Reference Standards
          </h2>
          <div className="h-1 w-20 bg-teal-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All chemical compounds are lyophilised under cleanroom conditions, vacuum sealed in sterile vials, and double-tested by HPLC and Mass Spectrometry. Strictly for research use only.
          </p>
        </div>

        {/* Shop Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 max-w-5xl mx-auto">
          {categories.map((category) => {
            const count = category === "All"
              ? PEPTIDES_DATA.length
              : PEPTIDES_DATA.filter((p) => p.category === category).length;
            
            const isSelected = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? "bg-teal-700 text-white border-teal-750 shadow-md"
                    : "bg-white text-slate-600 border-slate-100 hover:border-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{category === "All" ? "All Compounds" : category}</span>
                <span className={`px-1.5 py-0.5 rounded-full font-mono text-[9px] ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top border decor accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-100 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {product.purity} Purity
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative w-full h-44 bg-slate-50/80 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-slate-100/50 group-hover:border-teal-100/40 transition-colors duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-teal-800 transition-colors">
                    {product.name}
                  </h3>
                  {product.casNumber && (
                    <span className="block text-[10px] font-mono text-slate-400">
                      CAS: {product.casNumber}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Spec Indicators */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-50 text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Standard unit</span>
                    <span className="font-bold text-slate-700 mt-0.5 block">{product.size} Vial</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Formulation</span>
                    <span className="font-bold text-slate-700 mt-0.5 block truncate">{product.formulation.split(" ")[0]} Crystals</span>
                  </div>
                </div>
              </div>

              {/* Card Footer / Pricing & Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Indicative price</span>
                  <span className="text-2xl font-display font-extrabold text-slate-900 leading-none">
                    £{product.price.toFixed(2)}
                    <span className="text-xs text-slate-500 font-normal ml-0.5"> GBP</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2.5 text-slate-500 hover:text-teal-700 hover:bg-teal-50 border border-slate-100 hover:border-teal-100 rounded-xl transition-all duration-200 cursor-pointer"
                    title="View analytical specifications"
                  >
                    <FileText className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs tracking-wide uppercase rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLIANT PROCUREMENT NOTE */}
        <div className="mt-12 bg-white border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-teal-50 rounded-2xl flex-shrink-0 text-teal-700">
              <Beaker className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base">Bulk Orders & Special Syntheses</h4>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Need bulk quantities or custom amino acid sequences for your organisation? We offer tailored laboratory syntheses with complete compliance documentation.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-850 text-white font-medium text-sm rounded-2xl transition-colors shrink-0 text-center w-full md:w-auto"
          >
            Submit Bulk Request
          </a>
        </div>

        {/* ANALYTICAL SPECIFICATIONS MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-100 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
              
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
                    <div className="w-full bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-center aspect-square md:sticky md:top-0">
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
                      <h4 className="text-xl font-display font-extrabold text-slate-900 font-sans">
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
                      <h5 className="font-bold text-slate-900 font-display text-sm">Scientific Background</h5>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        {selectedProduct.longDescription}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-bold text-slate-900 font-display text-sm">Targeted Research Focus</h5>
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
