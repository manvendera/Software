"use client";

import React from "react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioCard } from "@/components/ui/PortfolioCard";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-[#101820]"
      aria-label="Portfolio and Selected Work"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#0075A2] bg-[#0075A2]/10 border border-[#0075A2]/20 mb-3.5 uppercase tracking-wider">
            <span>Selected Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101820] mb-3 tracking-tight">
            Ideas Brought to Life
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Proven results delivered for established enterprises and ambitious high-growth businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
