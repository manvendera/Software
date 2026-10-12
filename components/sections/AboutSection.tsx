import React from "react";
import { Lightbulb, Compass, BarChart3, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  const pillars = [
    {
      title: "Customized Strategies",
      description: "No templated formulas. We craft bespoke growth roadmaps tailored to your industry, audience, and profit margins.",
      icon: Lightbulb,
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      title: "Transparent Communication",
      description: "Direct access to strategists and real-time reporting dashboards with zero jargon or hidden metrics.",
      icon: Compass,
      color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    },
    {
      title: "Data-Informed Decisions",
      description: "Every creative hypothesis and ad budget allocation is backed by deep analytics, attribution modeling, and search intent.",
      icon: BarChart3,
      color: "text-teal-400 bg-teal-400/10 border-teal-400/20",
    },
    {
      title: "Long-Term Business Growth",
      description: "We build compounding organic authority and repeatable acquisition flywheels that scale profitably over time.",
      icon: TrendingUp,
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-[#071524] to-slate-950 relative overflow-hidden"
      aria-label="About Xntrova Technologies"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>About Xntrova</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Creative Thinking.{" "}
              <span className="block text-sky-400">Strategic Execution.</span>{" "}
              <span className="bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              At Xntrova, we believe great marketing starts with understanding people and ends with verifiable performance. We combine fresh creative ideas, robust planning, and modern technology to craft digital experiences that engage audiences and inspire action.
            </p>

            <div className="border-l-2 border-sky-500/40 pl-4 py-1 text-sm text-slate-300 leading-relaxed italic">
              “Whether you are looking to define your brand story, build search visibility, or maximize return on ad spend, we take a disciplined, data-informed approach to ensure every marketing rupee drives tangible business outcomes.”
            </div>

            <div className="pt-2">
              <Button
                href="#process"
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Discover Our Approach
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Pillars Balanced Layout */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border mb-4 ${pillar.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Strategic commitment badge */}
            <div className="mt-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Dedicated Senior Strategists on Every Account
              </span>
              <span className="font-bold text-sky-400">100% In-House Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
