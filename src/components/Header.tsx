import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  activePage: string;
}

export default function Header({ activePage }: HeaderProps) {
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
    { label: "Safety & Compliance", href: "#safety", id: "safety" },
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
        </div>
      )}
    </header>
  );
}
