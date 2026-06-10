import { Briefcase, GraduationCap, Download, Layers, ShieldCheck } from "lucide-react";
import { WORK_HISTORY, EDUCATION_HISTORY, SKILL_TAXONOMY, PORTFOLIO_OWNER } from "../data";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="resume"
      className="py-20 bg-zinc-50/50 dark:bg-[#0D0D0D] border-y border-zinc-100 dark:border-white/10 transition-colors duration-300 print:py-4 print:bg-white print:border-none"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 print:mb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-550 dark:text-zinc-400 print:text-zinc-650">
              Career Journey
            </span>
            <span className="block text-3xl font-light tracking-tight text-zinc-900 dark:text-white print:text-zinc-900 print:text-2xl">
              Professional <span className="font-serif italic text-zinc-700 dark:text-zinc-300">Resume</span>
            </span>
          </div>
          <button
            id="btn-print-resume"
            onClick={handlePrint}
            className="self-start inline-flex items-center justify-center h-10 px-5 rounded-full border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200 text-xs font-mono tracking-tight font-medium cursor-pointer transition-all print:hidden"
          >
            <Download className="w-4 h-4 mr-2" />
            Print / Save PDF
          </button>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:gap-4">
          
          {/* LEFT PANEL: Work History & Education */}
          <div className="lg:col-span-7 space-y-12 print:space-y-6">
            
            {/* Work History Timeline */}
            <div className="space-y-8 print:space-y-4">
              <h3 className="text-base font-normal uppercase tracking-wider text-zinc-900 dark:text-white flex items-center space-x-2.5 border-b border-zinc-150 dark:border-white/10 pb-3 print:text-zinc-900 print:border-zinc-200">
                <Briefcase className="w-4 h-4 text-zinc-600 dark:text-zinc-400 print:text-zinc-600" />
                <span>Work Experience</span>
              </h3>

              <div className="relative border-l border-zinc-150 dark:border-white/10 ml-3 pl-6 space-y-10 print:space-y-6 print:border-zinc-200">
                {WORK_HISTORY.map((exp) => (
                  <div key={exp.id} className="relative group">
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border border-zinc-900 bg-white dark:bg-[#0A0A0A] dark:border-white transition-all group-hover:scale-125 print:bg-white" />
                    
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <h4 className="text-base font-semibold text-zinc-900 dark:text-white print:text-zinc-900 leading-tight">
                          {exp.role}
                        </h4>
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-650 dark:text-zinc-300 bg-zinc-100/50 dark:bg-white/5 border dark:border-white/5 px-2 py-0.5 rounded-md print:bg-zinc-100 print:text-zinc-800">
                          {exp.period}
                        </span>
                      </div>

                      <div className="text-2xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex flex-wrap gap-x-3 gap-y-1">
                        <span className="font-bold text-zinc-700 dark:text-zinc-300 print:text-zinc-700">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="list-disc list-outside text-xs text-zinc-650 dark:text-zinc-400 space-y-1.5 pl-4 font-light leading-relaxed print:text-zinc-750">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>

                      {/* Timeline Card skills badges */}
                      <div className="flex flex-wrap gap-1 pt-2 print:hidden">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] font-mono uppercase tracking-tight px-2 py-0.5 rounded bg-zinc-50 dark:bg-[#161616] text-zinc-500 dark:text-zinc-400 border border-zinc-150/50 dark:border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education History */}
            <div className="space-y-8 print:space-y-4">
              <h3 className="text-base font-normal uppercase tracking-wider text-zinc-900 dark:text-white flex items-center space-x-2.5 border-b border-zinc-150 dark:border-white/10 pb-3 print:text-zinc-900 print:border-zinc-200">
                <GraduationCap className="w-4.5 h-4.5 text-zinc-650 dark:text-zinc-400 print:text-zinc-600" />
                <span>Education</span>
              </h3>

              <div className="relative border-l border-zinc-150 dark:border-white/10 ml-3 pl-6 space-y-8 print:border-zinc-200">
                {EDUCATION_HISTORY.map((edu) => (
                  <div key={edu.id} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border border-zinc-900 bg-white dark:bg-[#0A0A0A] dark:border-white print:bg-white" />
                    
                    <div className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white print:text-zinc-900">
                          {edu.degree}
                        </h4>
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-white/5 border dark:border-white/5 px-2 py-0.5 rounded-md print:bg-zinc-100 print:text-zinc-705">
                          {edu.period}
                        </span>
                      </div>

                      <div className="text-2xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex flex-wrap gap-x-2">
                        <span className="font-bold text-zinc-700 dark:text-zinc-300 print:text-zinc-700">{edu.school}</span>
                        {edu.gpa && (
                          <>
                            <span>•</span>
                            <span className="text-zinc-900 dark:text-zinc-100 font-semibold">GPA: {edu.gpa}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Skills Taxonomy */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-base font-normal uppercase tracking-wider text-zinc-900 dark:text-white flex items-center space-x-2.5 border-b border-zinc-150 dark:border-white/10 pb-3 print:text-zinc-900 print:border-zinc-200">
              <Layers className="w-4 h-4 text-zinc-650 dark:text-zinc-400 print:text-zinc-600" />
              <span>Skill Classification</span>
            </h3>

            <div className="space-y-6 print:grid print:grid-cols-2 print:gap-4 print:space-y-0">
              {SKILL_TAXONOMY.map((cat) => (
                <div
                  id={`skill-category-panel-${cat.id}`}
                  key={cat.id}
                  className="p-5 rounded-2xl border border-zinc-150/80 dark:border-white/5 bg-zinc-50/30 dark:bg-[#111111]/40 space-y-3 shadow-xs hover:border-zinc-250 dark:hover:border-white/10 transition-colors print:p-2 print:bg-transparent print:border-none"
                >
                  <h4 className="text-2xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 print:text-zinc-550">
                    {cat.name}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center space-x-1.5 text-2xs font-mono uppercase tracking-wider font-semibold px-2.5 py-1.5 bg-white dark:bg-[#0A0A0A] border border-zinc-150 dark:border-white/10 text-zinc-700 dark:text-zinc-300 rounded-lg shadow-3xs hover:scale-[1.02] hover:bg-zinc-50 dark:hover:bg-white/5 transition-all print:border-zinc-200 print:text-zinc-800"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-zinc-600 dark:text-white" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Social Context for Quick Outreach */}
            <div className="p-6 rounded-2xl border border-dashed border-zinc-200 dark:border-white/10 bg-white dark:bg-[#111111] flex flex-col space-y-4 print:hidden">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 dark:text-white">
                Interested in working together?
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Feel free to print this digital resume for your records, or drop a quick query right below in the contact form to discuss roles, projects, or consulting agreements.
              </p>
              <div className="text-2xs font-mono uppercase tracking-wider text-zinc-400">
                Primary Inquiry: <a href={`mailto:${PORTFOLIO_OWNER.email}`} className="text-zinc-900 dark:text-white underline">{PORTFOLIO_OWNER.email}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
