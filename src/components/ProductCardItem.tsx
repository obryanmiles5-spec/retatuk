import React, { useState, useMemo } from "react";
import { PeptideProduct } from "../types";
import { Check, ShoppingCart, Eye } from "lucide-react";

interface ProductCardItemProps {
  variants: PeptideProduct[];
  onViewDetails: (product: PeptideProduct) => void;
  onAddToCart: (product: PeptideProduct) => void;
}

const ProductCardItem: React.FC<ProductCardItemProps> = ({ variants, onViewDetails, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const viewersCount = useMemo(() => Math.floor(Math.random() * 15) + 3, []);

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-100 uppercase tracking-wider">
            {selectedVariant.category}
          </span>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            {selectedVariant.purity} Purity
          </span>
        </div>

        <div className="relative w-full h-44 bg-slate-50/80 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-slate-100/50 group-hover:border-teal-100/40 transition-colors duration-300">
          <img
            src={selectedVariant.image}
            alt={selectedVariant.name}
            referrerPolicy="no-referrer"
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-teal-800 transition-colors line-clamp-2">
            {selectedVariant.name}
          </h3>
          {selectedVariant.casNumber && (
            <span className="block text-[10px] font-mono text-slate-400">
              CAS: {selectedVariant.casNumber}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {selectedVariant.description}
        </p>

        {/* Spec Indicators */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-50 text-xs">
          <div>
            <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Standard unit</span>
            <span className="font-bold text-slate-700 mt-0.5 block">{selectedVariant.size}</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Formulation</span>
            <span className="font-bold text-slate-700 mt-0.5 block truncate">{selectedVariant.formulation.split(" ")[0]} Crystals</span>
          </div>
        </div>

        {/* Variants Selection */}
        {variants.length > 1 && (
          <div className="pt-2">
            <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2">Select Variant</span>
            <div className="flex flex-wrap gap-2">
              {variants.map(v => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors border ${
                    selectedVariant.id === v.id
                      ? 'bg-teal-50 border-teal-200 text-teal-800'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                  }`}
                >
                  {v.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Viewers count */}
        <div className="pt-3 text-[11px] text-slate-500 flex items-center gap-2 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {viewersCount} people viewing</span>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Price</span>
          <span className="text-2xl font-display font-extrabold text-slate-900 leading-none">
            £{selectedVariant.price.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <button
            onClick={() => onViewDetails(selectedVariant)}
            className="text-[10px] uppercase tracking-wider font-bold text-teal-700 hover:text-teal-800 text-right transition-colors"
          >
            View Specs
          </button>
          <button
            onClick={() => onAddToCart(selectedVariant)}
            className="w-10 h-10 bg-slate-900 hover:bg-teal-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCardItem;
