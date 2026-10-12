import React from "react";
import { Search, Compass, Rocket, Gauge, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

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
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-[#051424] to-slate-950 relative"
      aria-label="Process and How We Work"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="A Clear Path From"
          highlightedText="Idea to Impact."
          description="A disciplined four-phase delivery methodology that removes guesswork and guarantees measurable accountability from day one."
        />

        {/* Desktop Horizontal Timeline / Mobile Vertical Cards */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-sky-500/20 via-teal-500/40 to-amber-500/20 -translate-y-8"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
                >
                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-sm font-black font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-lg">
                        {step.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block mb-1">
                      {step.phase}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables mini tags */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-[10px] font-semibold text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300"
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

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <Button
            href="#audit"
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Start Phase 01: Request Free Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
