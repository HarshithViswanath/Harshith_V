import { motion } from "motion/react";
import { Github, Linkedin, Twitter, FileText, ArrowRight, MapPin, Instagram } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";
import avatar from '../assets/images/avatar.jpg';

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300"
    >
      {/* Decorative backdrop blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full glow-mesh -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-zinc-50 dark:bg-zinc-900/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/10 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Creating the Next Generation of AI Applications</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
          >
            I architect intelligent{" "}
            <span className="font-serif italic text-zinc-800 dark:text-white block sm:inline">
              autonomous systems
            </span>{" "}
            & scalable cloud apps.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-600 dark:text-slate-300 max-w-xl font-light leading-relaxed"
          >
            Hi, I'm <strong className="font-semibold text-zinc-900 dark:text-white">{PORTFOLIO_OWNER.name}</strong>, {PORTFOLIO_OWNER.tagline} {PORTFOLIO_OWNER.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              id="btn-hero-projects"
              onClick={() => handleScrollToSection("#projects")}
              className="group inline-flex items-center justify-center px-6 h-12 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:opacity-90 text-white dark:text-zinc-950 font-medium text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              See my work
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="btn-hero-resume"
              onClick={() => handleScrollToSection("#resume")}
              className="inline-flex items-center justify-center px-6 h-12 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-white/5 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Resume
            </button>
          </motion.div>

          {/* Social icons, location and metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-zinc-150 dark:border-white/10 w-full"
          >
            <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-xs font-mono leading-none uppercase tracking-wide">
              <MapPin className="w-4 h-4 mr-2 text-zinc-400" />
              {PORTFOLIO_OWNER.location}
            </div>

            <div className="flex items-center space-x-3">
              <a
                id="link-github"
                href={PORTFOLIO_OWNER.socials.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-650 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                title="GitHub Context Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="link-linkedin"
                href={PORTFOLIO_OWNER.socials.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-650 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                title="LinkedIn Profile Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="link-twitter"
                href={PORTFOLIO_OWNER.socials.twitter}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-650 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                title="X (Twitter) Profile Link"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="link-instagram"
                href={PORTFOLIO_OWNER.socials.instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-650 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                title="Instagram Profile Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[340px] aspect-square rounded-3xl relative"
          >
            {/* Elegant avatar border backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-sky-500/20 to-indigo-500/20 rotate-3 blur-md dark:opacity-40" />

            {/* Simulated UI/UX Profile Card */}
            <div className="absolute inset-0 rounded-3xl bg-white dark:bg-[#111111] border border-zinc-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-xs relative overflow-hidden group">
              
              {/* Profile image placeholder */}
              <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-4 overflow-hidden relative border border-zinc-200 dark:border-white/5 flex items-center justify-center">
                 <img 
                    src={avatar} 
                    alt="Harshith V Avatar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
                 {/* Subtle overlay gradients */}
                 <div className="absolute inset-0 bg-linear-to-t from-zinc-100/50 dark:from-zinc-950/50 to-transparent mix-blend-overlay" />
              </div>

              <div className="space-y-3">
                <div className="h-[1px] bg-zinc-150 dark:bg-white/10 w-full" />
                
                <div className="flex justify-between items-center px-1">
                  <div className="space-y-1">
                    <p className="text-zinc-900 dark:text-white font-medium text-xs tracking-tight">{PORTFOLIO_OWNER.name}</p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-mono">{PORTFOLIO_OWNER.title}</p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
