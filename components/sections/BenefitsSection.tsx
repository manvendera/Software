import React from "react";
import { Sliders, FileSpreadsheet, Cpu, RefreshCw, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BenefitsSection() {
  const benefits = [
    {
      step: "01",
      title: "Tailored Strategies",
      subtitle: "Aligned with your unique commercial objectives",
      description:
        "We build solutions customized specifically for your market dynamics, margins, and customer lifecycles—never generic playbooks.",
      icon: Sliders,
      tag: "Custom Growth",
    },
    {
      step: "02",
      title: "Transparent Reporting",
      subtitle: "Clear communication and measurable progress",
      description:
        "Gain 24/7 visibility with unified analytics dashboards, honest attribution metrics, and candid bi-weekly growth syncs.",
      icon: FileSpreadsheet,
      tag: "Zero Ambiguity",
    },
    {
      step: "03",
      title: "Integrated Expertise",
      subtitle: "Creative, marketing, and technology capabilities",
      description:
        "No silos. Brand designers, media buyers, SEO specialists, and frontend engineers collaborate seamlessly under one roof.",
      icon: Cpu,
      tag: "Full-Stack Agency",
    },
    {
      step: "04",
      title: "Continuous Optimization",
      subtitle: "Data insights turned into high-impact iterations",
      description:
        "Digital marketing is never static. We continuously run split tests, audit core conversion funnels, and refine targeting.",
      icon: RefreshCw,
      tag: "Agile Sprints",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 sm:py-28 bg-slate-950 relative"
      aria-label="Why Choose Xntrova Technologies"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Xntrova Difference"
          title="Why Forward-Thinking Brands"
          highlightedText="Choose Xntrova."
          description="We combine the strategic depth of a high-tier consultancy with the agile execution speed of a digital lab."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 font-mono">
                      {benefit.step}
                    </span>
                    <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                      {benefit.tag}
                    </span>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/80 text-sky-400 mb-5 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 mb-3">
                    {benefit.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Guaranteed Standards</span>
                  <span className="font-semibold text-emerald-400">Verified SLA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
