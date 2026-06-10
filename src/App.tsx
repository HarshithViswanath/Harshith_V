import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import { PORTFOLIO_OWNER } from "./data";
import { Github, Linkedin, Twitter, ArrowUp, Sun, Moon } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Initial fetch from localStorage or system theme settings
    try {
      const savedTheme = localStorage.getItem("portfolio_theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true; // Default to dark theme for modern styling
    }
  });

  // Apply dark mode styling class updates dynamically
  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("portfolio_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("portfolio_theme", "light");
      }
    } catch (e) {
      console.warn("Theme write persistence failed:", e);
    }
  }, [isDarkMode]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0A0A0A] text-zinc-900 dark:text-zinc-350 selection:bg-zinc-950 dark:selection:bg-white selection:text-white dark:selection:text-zinc-950 transition-colors duration-300">
      
      {/* Floating Scroll to Top button */}
      <button
        id="btn-scroll-top"
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-md hover:scale-105 active:scale-95 transition-all text-xs border border-zinc-100/10 dark:border-white/10 print:hidden cursor-pointer"
        aria-label="Scroll back top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Main Global Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Primary Section Blocks */}
      <main className="flex-1">
        <Hero />
        <Projects />
        <Achievements />
        <Resume />
        <Certifications />
        <ContactForm />
      </main>

      {/* Standard Fully Accessible Footer Panel */}
      <footer className="bg-white dark:bg-[#0A0A0A] border-t border-zinc-150 dark:border-white/10 py-12 transition-colors duration-300 print:hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs">HV</span>
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">{PORTFOLIO_OWNER.name}</span>
            </div>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Designed with a minimal, elegant dark aesthetic. Built using React, Tailwind CSS, and lightweight entrance animations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-8 text-xs font-mono">
            {/* Quick Contact parameters */}
            <div className="space-y-1">
              <span className="block text-2xs text-zinc-400 dark:text-zinc-650 uppercase font-bold">Coordinates</span>
              <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                {PORTFOLIO_OWNER.email}
              </a>
            </div>

            {/* Social Anchors in footer */}
            <div className="space-y-1">
              <span className="block text-2xs text-zinc-400 dark:text-zinc-650 uppercase font-bold">Social networks</span>
              <div className="flex items-center space-x-3.5 pt-0.5">
                <a
                  id="footer-github"
                  href={PORTFOLIO_OWNER.socials.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-zinc-450 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  id="footer-linkedin"
                  href={PORTFOLIO_OWNER.socials.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-zinc-450 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  id="footer-twitter"
                  href={PORTFOLIO_OWNER.socials.twitter}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-zinc-450 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  X
                </a>
                <a
                  id="footer-instagram"
                  href={PORTFOLIO_OWNER.socials.instagram}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-zinc-450 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copy banner */}
        <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-zinc-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center text-2xs text-zinc-400 dark:text-zinc-650 font-mono gap-4">
          <span>&copy; {new Date().getFullYear()} {PORTFOLIO_OWNER.name}. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
