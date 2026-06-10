import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Resume", href: "#resume" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-100 dark:border-white/10 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-logo"
          href="#about"
          onClick={(e) => handleLinkClick(e, "#about")}
          className="group flex items-center space-x-2.5 font-mono"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center text-white dark:text-zinc-950 font-bold text-xs transition-transform group-hover:rotate-6">
            HV
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white group-hover:opacity-80">
            {PORTFOLIO_OWNER.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all relative py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 border-l border-zinc-200 dark:border-white/10 pl-4">
            {/* Premium Theme Toggle Container mimicking Jordan Miller layout */}
            <button
              id="btn-theme-toggle"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 bg-white dark:bg-white/5 p-1 rounded-full border border-zinc-200 dark:border-white/10 transition-all cursor-pointer relative"
              aria-label="Toggle structural theme"
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all duration-200 ${!isDarkMode ? 'bg-white text-zinc-950 shadow-xs scale-110' : 'text-zinc-500 opacity-50'}`}>
                ☀️
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all duration-200 ${isDarkMode ? 'bg-zinc-800 dark:bg-white text-zinc-950 shadow-xs scale-110' : 'text-zinc-500 opacity-50'}`}>
                🌙
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu controllers */}
        <div className="md:hidden flex items-center space-x-2.5">
          {/* Mobile Theme Switch Button */}
          <button
            id="btn-theme-toggle-mobile"
            onClick={toggleTheme}
            className="flex items-center gap-1 bg-white dark:bg-white/5 p-1 rounded-full border border-zinc-200 dark:border-white/10 cursor-pointer"
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${!isDarkMode ? 'bg-white text-zinc-950 shadow-xs' : 'text-zinc-500 opacity-50'}`}>
              ☀️
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isDarkMode ? 'bg-zinc-800 dark:bg-white text-zinc-950 shadow-xs' : 'text-zinc-500 opacity-50'}`}>
              🌙
            </div>
          </button>

          <button
            id="btn-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-white/10"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-zinc-100 dark:border-white/10 bg-white dark:bg-[#0A0A0A] overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      id={`nav-link-mobile-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block text-xs uppercase tracking-wider font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-2xs font-mono text-zinc-450 uppercase">Base: {PORTFOLIO_OWNER.location}</span>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="inline-flex items-center text-xs font-semibold text-zinc-950 dark:text-white group"
                >
                  Hire me <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
