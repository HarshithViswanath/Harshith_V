import { motion } from "motion/react";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) return null;

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0A0A0A] border-t border-zinc-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-zinc-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Credentials validating my technical proficiencies and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#111111] border border-zinc-200/80 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors shadow-xs group flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-200/50 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-zinc-200 dark:border-white/10">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white leading-tight mb-2">
                {cert.name}
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 mb-3">
                {cert.issuer}
              </p>
              {cert.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>
              )}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200/80 dark:border-white/5">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
                  {cert.issueDate}
                </span>
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center space-x-1 hover:text-zinc-900 dark:hover:text-white transition-colors group/link text-xs font-semibold text-zinc-600 dark:text-zinc-300"
                    aria-label={`View ${cert.name} credential`}
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
