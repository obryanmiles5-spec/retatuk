import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function WhatsAppLiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "447916999789";
  const defaultMessage = "Hello UK Peptide Labs, I am interested in your chemical analytical standards. Could you provide some details?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Small Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-800 to-teal-950 p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-teal-300 font-bold font-mono">
                  UKP
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-teal-900 rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-wide">
                  Laboratory Support Desk
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9px] font-mono uppercase font-bold text-teal-300">
                    Online Now
                  </span>
                  <span className="text-[9px] text-white/60">•</span>
                  <span className="text-[9px] text-white/60">Replies in mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 bg-slate-50 space-y-4">
            <div className="bg-white rounded-2xl p-3 border border-slate-150 shadow-sm text-xs text-slate-600 leading-relaxed relative">
              <span className="font-bold text-[10px] text-teal-800 uppercase block font-mono mb-1">
                Dr. Liam Harris • Standards Officer
              </span>
              Hello! Thank you for visiting UK Peptide Labs. 
              <br />
              We synthesise analytical standards of <strong className="font-semibold text-slate-900">99%+ purity</strong>.
              <br />
              How can we assist your institution with procurement or compound specifications today?
              
              {/* Little speech bubble tail */}
              <div className="absolute top-3 -left-1.5 w-3 h-3 bg-white border-l border-b border-slate-150 rotate-45" />
            </div>

            <p className="text-[10px] text-slate-400 font-medium text-center">
              Click below to initiate a secure encrypted chat on WhatsApp.
            </p>
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-white border-t border-slate-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative group ${
          isOpen
            ? "bg-slate-900 rotate-90"
            : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"
        }`}
        aria-label="Toggle WhatsApp Live Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 animate-pulse" />
            {/* Custom green indicator badge */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
            {/* Hover tooltip */}
            <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap shadow border border-slate-800">
              Live Chat Support
            </span>
          </>
        )}
      </button>
    </div>
  );
}
