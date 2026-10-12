import React from "react";
import { Sliders, FileSpreadsheet, Cpu, RefreshCw } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      step: "01",
      title: "Tailored Strategies",
      subtitle: "Aligned with your unique commercial objectives",
      description:
        "We build solutions customized specifically for your market dynamics, margins, and customer lifecycles—never generic playbooks.",
      icon: Sliders,
    },
    {
      step: "02",
      title: "Transparent Reporting",
      subtitle: "Clear communication and measurable progress",
      description:
        "Gain complete visibility with unified analytics dashboards, honest attribution metrics, and candid bi-weekly growth syncs.",
      icon: FileSpreadsheet,
    },
    {
      step: "03",
      title: "Integrated Expertise",
      subtitle: "Creative, marketing, and technology capabilities",
      description:
        "No silos. Brand designers, media buyers, SEO specialists, and frontend engineers collaborate seamlessly under one roof.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Continuous Optimization",
      subtitle: "Data insights turned into high-impact iterations",
      description:
        "Digital marketing is never static. We continuously run split tests, audit core conversion funnels, and refine targeting.",
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="benefits"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-[#101820]"
      aria-label="Why Choose Xntrova"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0075A2] block mb-2">
            The Xntrova Edge
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101820] mb-3">
            Why Forward-Thinking Brands Choose Xntrova
          </h2>
          <p className="text-sm text-slate-600">
            We combine the strategic depth of a high-tier consultancy with the agile execution speed of a digital lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#0075A2] bg-[#0075A2]/10 px-2.5 py-1 rounded-sm">
                      {benefit.step}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#0075A2] group-hover:bg-[#0075A2] group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#101820] mb-1 group-hover:text-[#0075A2] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 mb-2">
                    {benefit.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Standard of Work</span>
                  <span className="font-semibold text-emerald-600">Verified SLA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
