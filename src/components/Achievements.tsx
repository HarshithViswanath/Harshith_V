import { motion } from "motion/react";
import { Award, Calendar } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

export default function Achievements() {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-zinc-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Selected achievements and key milestones spanning my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#111111] border border-zinc-200/80 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-white/10 flex items-center justify-center mb-5 text-zinc-900 dark:text-white group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white tracking-tight mb-2">
                {item.title}
              </h3>
              <div className="flex items-center space-x-3 text-xs font-mono text-zinc-500 dark:text-zinc-450 mb-4">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-tight">{item.organization}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="flex items-center tracking-tight"><Calendar className="w-3 h-3 mr-1" />{item.date}</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
