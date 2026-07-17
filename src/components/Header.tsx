import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Instagram, Facebook } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  activePage: string;
  cartCount: number;
  onCartOpenClick: () => void;
}

export default function Header({ activePage, cartCount, onCartOpenClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Products", href: "#products", id: "products" },
    { label: "FAQs", href: "#faqs", id: "faqs" },
    { label: "Contact Us", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.hash = href;
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-slate-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                  activePage === link.id
                    ? "bg-teal-50 text-teal-800 font-semibold border border-teal-100/50"
                    : isScrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    : "text-slate-700 hover:text-slate-950 hover:bg-white/40"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              id="cta-nav-button"
              href="#products"
              onClick={(e) => handleLinkClick(e, "#products")}
              className="ml-4 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-full shadow-sm hover:shadow transition-all duration-200 tracking-wide"
            >
              Shop Peptides
            </a>
            
            {/* Research Cart Button */}
            <button
              onClick={onCartOpenClick}
              className="relative ml-3 p-2.5 text-slate-700 hover:text-teal-700 hover:bg-slate-50 border border-slate-100 hover:border-teal-100 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
              title="View Research Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white font-mono text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-1.5 ml-2.5 pl-3 border-l border-slate-200/80">
              <a
                href="https://www.tiktok.com/@buy_peptides_online?_r=1&_t=ZS-986j3hq0zvc"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 hover:text-teal-700 hover:bg-slate-50 flex items-center justify-center cursor-pointer ${
                  isScrolled ? "text-slate-500" : "text-slate-600 hover:bg-white/40"
                }`}
                title="Follow us on TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.15 2.27 1.93 3.71 2.22l-.01 3.97c-1.21-.12-2.39-.58-3.41-1.25-.87-.58-1.59-1.37-2.11-2.28a9.42 9.42 0 0 1-.16 3.19c-.31 1.76-1.12 3.4-2.35 4.69a9.6 9.6 0 0 1-5.18 2.87c-1.92.38-3.92.11-5.69-.76A9.72 9.72 0 0 1 .49 11.72c-.52-1.89-.37-3.92.42-5.71A9.82 9.82 0 0 1 5.92 1.34c1.88-.51 3.92-.35 5.69.46.01 1.44.01 2.88.02 4.31-.9-.55-1.95-.82-3-.76a5.18 5.18 0 0 0-4.04 2.85 5.37 5.37 0 0 0 .19 4.32c.76 1.48 2.28 2.45 3.93 2.5a5.19 5.19 0 0 0 4.32-2.32c.52-.86.75-1.87.66-2.88.01-4.41.01-8.83.02-13.24Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/buy_peptides_online_?igsh=NDFwcTAyaDY0b2g2"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 hover:text-teal-700 hover:bg-slate-50 flex items-center justify-center cursor-pointer ${
                  isScrolled ? "text-slate-500" : "text-slate-600 hover:bg-white/40"
                }`}
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/p/1Y2GX7aqWQ/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 hover:text-teal-700 hover:bg-slate-50 flex items-center justify-center cursor-pointer ${
                  isScrolled ? "text-slate-500" : "text-slate-600 hover:bg-white/40"
                }`}
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </nav>

          {/* Right Side Accessories for Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Research Cart Button */}
            <button
              onClick={onCartOpenClick}
              className="relative p-2.5 text-slate-700 hover:text-teal-700 hover:bg-slate-50 border border-slate-100 hover:border-teal-100 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
              title="View Research Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white font-mono text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 sm:px-6 flex flex-col gap-2 transition-all duration-300 ease-in-out"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`mobile-nav-link-${link.id}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activePage === link.id
                  ? "bg-teal-50 text-teal-900 font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            id="mobile-cta-nav-button"
            href="#products"
            onClick={(e) => handleLinkClick(e, "#products")}
            className="mt-2 w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-medium text-center rounded-lg shadow-sm transition-colors"
          >
            Shop Peptides
          </a>

          {/* Mobile Social Links inside Drawer */}
          <div className="flex items-center justify-center gap-4 py-4 mt-3 border-t border-slate-100">
            <a
              href="https://www.tiktok.com/@buy_peptides_online?_r=1&_t=ZS-986j3hq0zvc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 rounded-xl border border-slate-150 text-slate-500 transition-colors flex items-center justify-center cursor-pointer"
              title="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.15 2.27 1.93 3.71 2.22l-.01 3.97c-1.21-.12-2.39-.58-3.41-1.25-.87-.58-1.59-1.37-2.11-2.28a9.42 9.42 0 0 1-.16 3.19c-.31 1.76-1.12 3.4-2.35 4.69a9.6 9.6 0 0 1-5.18 2.87c-1.92.38-3.92.11-5.69-.76A9.72 9.72 0 0 1 .49 11.72c-.52-1.89-.37-3.92.42-5.71A9.82 9.82 0 0 1 5.92 1.34c1.88-.51 3.92-.35 5.69.46.01 1.44.01 2.88.02 4.31-.9-.55-1.95-.82-3-.76a5.18 5.18 0 0 0-4.04 2.85 5.37 5.37 0 0 0 .19 4.32c.76 1.48 2.28 2.45 3.93 2.5a5.19 5.19 0 0 0 4.32-2.32c.52-.86.75-1.87.66-2.88.01-4.41.01-8.83.02-13.24Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/buy_peptides_online_?igsh=NDFwcTAyaDY0b2g2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 rounded-xl border border-slate-150 text-slate-500 transition-colors flex items-center justify-center cursor-pointer"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/p/1Y2GX7aqWQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-50 hover:bg-teal-50 hover:text-teal-700 rounded-xl border border-slate-150 text-slate-500 transition-colors flex items-center justify-center cursor-pointer"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
