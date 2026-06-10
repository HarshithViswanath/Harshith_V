import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive unique categories from data
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-zinc-50/50 dark:bg-[#0D0D0D] border-y border-zinc-100 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Featured Work
            </span>
            <span className="block text-3xl font-light tracking-tight text-zinc-900 dark:text-white">
              Selected <span className="font-serif italic text-zinc-700 dark:text-zinc-300">Creations</span>
            </span>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm font-light leading-relaxed">
            A carefully selected gallery of products, tools, and digital solutions crafted recently.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              id={`tab-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === category
                  ? "text-white dark:text-zinc-950 z-10 animate-scale"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              {selectedCategory === category && (
                <motion.span
                  layoutId="active-category"
                  className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.article
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col bg-white dark:bg-[#111111] rounded-2xl border border-zinc-150/80 dark:border-white/5 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 relative"
              >
                {/* Visual Top Decorative Banner with Custom Linear Gradient Accent */}
                <div className={`h-32 bg-gradient-to-r ${project.imageAccent} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Hexagonal mesh pattern backdrop */}
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Category Pill */}
                  <span className="self-start text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-white">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="self-end inline-flex items-center space-x-1 text-[10px] bg-white text-zinc-950 font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Content Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white dark:group-hover:opacity-90 group-hover:text-zinc-650 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-550 dark:text-zinc-400">
                      {project.shortDescription}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-450 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badge pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider font-mono font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-[#1A1A1A] text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Operational Anchors/Actions */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-zinc-100 dark:border-white/10 font-mono text-[10px] uppercase font-semibold">
                    {project.liveUrl && (
                      <a
                        id={`project-${project.id}-live`}
                        href={project.liveUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center text-zinc-900 dark:text-white hover:opacity-85 transition-opacity group/link"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        id={`project-${project.id}-github`}
                        href={project.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 mr-1" />
                        Repository
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
