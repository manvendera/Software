import React from "react";
import { Search, Compass, Rocket, Gauge } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      phase: "Research & Audit",
      description:
        "Understand business goals, target customer personas, competitive landscape, technical bottlenecks, and untapped market opportunities.",
      icon: Search,
      deliverables: ["Tech Stack Audit", "Competitor Benchmarking", "Intent Mapping"],
    },
    {
      num: "02",
      title: "Strategize",
      phase: "Architecture & Roadmap",
      description:
        "Define channel allocation, audience segmentation, creative direction, campaign sequencing, and quantifiable success metrics.",
      icon: Compass,
      deliverables: ["Omnichannel Blueprint", "Creative Guidelines", "KPI Forecasting"],
    },
    {
      num: "03",
      title: "Execute",
      phase: "Launch & Deployment",
      description:
        "Build, launch, and deploy agreed digital solutions across high-performance search campaigns, paid acquisition, and custom web architecture.",
      icon: Rocket,
      deliverables: ["Campaign Activation", "Fast Jamstack Builds", "Event Tracking"],
    },
    {
      num: "04",
      title: "Measure & Improve",
      phase: "Optimization Flywheel",
      description:
        "Review real-time performance, communicate actionable insights in transparent reports, and continuously optimize for scalable ROI.",
      icon: Gauge,
      deliverables: ["Attribution Insights", "A/B Testing Loops", "Scale Allocation"],
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#101820]"
      aria-label="Process Section"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0075A2] block mb-2">
            Our Delivery Path
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101820] mb-3">
            A Clear Path From Idea to Impact
          </h2>
          <p className="text-sm text-slate-600">
            A disciplined four-phase methodology that removes guesswork and guarantees measurable accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-md border border-slate-200 bg-[#F8FAFC] p-6 hover:border-[#0075A2] hover:bg-white transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-black font-mono text-[#0075A2] bg-white border border-slate-200 px-3 py-1 rounded-sm shadow-xs">
                      {step.num}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-xs">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075A2] block mb-1">
                    {step.phase}
                  </span>

                  <h3 className="text-lg font-bold text-[#101820] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block mb-2 uppercase">
                    Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-white text-slate-600 border border-slate-200"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
