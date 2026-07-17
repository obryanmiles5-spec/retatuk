/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Beaker, Truck, ArrowRight, Activity, Cpu, Globe } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductGrid from "./components/ProductGrid";
import SafetyDisclaimer from "./components/SafetyDisclaimer";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import FeaturedProducts from "./components/FeaturedProducts";
import HomeFAQ from "./components/HomeFAQ";
import CartDrawer from "./components/CartDrawer";
import WhatsAppLiveChat from "./components/WhatsAppLiveChat";
import { CartItem, PeptideProduct } from "./types";

// Page Header Component for separate pages
interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div 
      className="relative mt-28 mx-4 sm:mx-6 lg:mx-8 py-20 bg-cover bg-center text-white overflow-hidden rounded-3xl border border-slate-200/50 shadow-md"
      style={{
        backgroundImage: `url("https://lh3.googleusercontent.com/d/13iU6B1n3XH4PRd61gy337zfN7aeGlf1W")`
      }}
    >
      {/* Semi-transparent overlay to make background image beautiful and visible while preserving white text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/55 to-slate-950/65" />
      <div className="absolute inset-0 bg-teal-950/10 blend-multiply" />
      
      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Glowing atmospheric lights */}
      <div className="absolute -top-12 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-12 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/20">
            {badge}
          </span>
        )}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// Home page supplemental teaser section
function HomeTeaser() {
  return (
    <div className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Quality Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-teal-50 text-teal-700 w-12 h-12 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Double-Verified Purity
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every compound batch undergoes preparatory HPLC purification and molecular weight verification via Mass Spectrometry. CoAs are archived for full audit traceability.
            </p>
            <a href="#about" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 pt-2 group">
              Our Purity Standards
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-emerald-50 text-emerald-700 w-12 h-12 rounded-2xl flex items-center justify-center">
              <Beaker className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Analytical Catalog
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Access premium lyophilised standards, vacuum sealed and backfilled with inert, sterile argon gas to ensure absolute compound stability and prevent oxidation.
            </p>
            <a href="#products" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 pt-2 group">
              Browse Compounds
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-teal-50 text-teal-700 w-12 h-12 rounded-2xl flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Climate-Shielded Logistics
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dispatched with tracked, temperature-controlled courier services throughout the United Kingdom. Vacuum sealed packaging guarantees material integrity.
            </p>
            <a href="#safety" className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 pt-2 group">
              Compliance & Safety
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Featured Lab Operations Stats */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
              Operations Overview
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              UK Leading Synthesis Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Serving premium reference standards to academic, clinical trials, and bio-engineering environments across the United Kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="block text-3xl font-display font-extrabold text-slate-900">99.4%+</span>
              <span className="block text-xs text-slate-400 font-mono uppercase">HPLC Verified Purity</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <Activity className="w-5 h-5" />
              </div>
              <span className="block text-3xl font-display font-extrabold text-slate-900">24hr</span>
              <span className="block text-xs text-slate-400 font-mono uppercase">UK Despatch Transit</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <Globe className="w-5 h-5" />
              </div>
              <span className="block text-3xl font-display font-extrabold text-slate-900">100%</span>
              <span className="block text-xs text-slate-400 font-mono uppercase">MHRA Compliant Standards</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100/80 shadow-sm space-y-2 text-center">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="block text-3xl font-display font-extrabold text-slate-900">ISO 9001</span>
              <span className="block text-xs text-slate-400 font-mono uppercase">Lab Certified Processes</span>
            </div>
          </div>
        </div>

        {/* Custom Synthesis CTA Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400">
                UK LAB STANDARDS
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                Need a Custom Synthesis or Bulk Order?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                We synthesize customized sequences and provide large volume reference batches for academic projects and laboratory trials across the United Kingdom.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="#products"
                className="px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-center text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
              >
                View Catalog
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-center text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
              >
                Inquire Securely
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("uk_peptide_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // Sync cart state with LocalStorage for durable persistence
  useEffect(() => {
    try {
      localStorage.setItem("uk_peptide_cart", JSON.stringify(cart));
    } catch (e) {
      // Catch exceptions gracefully
    }
  }, [cart]);

  // Cart operations
  const addToCart = (product: PeptideProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Open cart drawer immediately to provide visual confirmation
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validPages = ["home", "about", "products", "safety", "faqs", "contact"];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
      // Scroll to top on page transition
      window.scrollTo(0, 0);
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col selection:bg-teal-600 selection:text-white bg-slate-50/30">
      {/* Sticky header and navigation */}
      <Header
        activePage={currentPage}
        cartCount={totalCartCount}
        onCartOpenClick={() => setIsCartOpen(true)}
      />
      
      {/* Page Content sections with custom motion route transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex flex-col"
          >
            {currentPage === "home" && (
              <>
                <Hero />
                <FeaturedProducts onAddToCart={addToCart} />
                <HomeFAQ />
                <HomeTeaser />
              </>
            )}

            {currentPage === "about" && (
              <>
                <PageHeader 
                  badge="Scientific Overview"
                  title="Understanding Peptides & Analytical Standards" 
                  subtitle="How synthesized messengers drive academic breakthrough, cellular signaling research, and high-fidelity molecular modeling across the UK."
                />
                <AboutSection />
              </>
            )}

            {currentPage === "products" && (
              <>
                <PageHeader 
                  badge="Analytical Catalogue"
                  title="Premium Peptide Reference Standards" 
                  subtitle="HPLC and Mass Spectrometry double-verified compounds lyophilised under class-100 sterile conditions. For research use only."
                />
                <ProductGrid onAddToCart={addToCart} />
              </>
            )}

            {currentPage === "safety" && (
              <>
                <PageHeader 
                  badge="Compliance Specifications"
                  title="Statutory Compliance & Lab Safety" 
                  subtitle="Review our strict non-clinical mandate, climate-shielded logistics workflows, and standard operating procedures for research standard handling."
                />
                <SafetyDisclaimer />
              </>
            )}

            {currentPage === "faqs" && (
              <>
                <PageHeader 
                  badge="Technical Documentation"
                  title="Frequently Asked Questions" 
                  subtitle="Find critical explanations regarding legalities, HPLC purity audits, argon gas encapsulation, storage preservation, and British courier shipping."
                />
                <FAQSection />
              </>
            )}

            {currentPage === "contact" && (
              <>
                <PageHeader 
                  badge="Secure Communications"
                  title="Submit Secure Laboratory Enquiry" 
                  subtitle="Request institutional verification, bulk reference standards procurement quotes, or custom chemical syntheses directly from our scientific specialists."
                />
                <ContactSection />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Static Footer with UK corporate credentials */}
      <Footer />
      
      {/* Scroll-to-top floating helper */}
      <BackToTop />

      {/* Floating WhatsApp Live Chat Widget */}
      <WhatsAppLiveChat />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}
