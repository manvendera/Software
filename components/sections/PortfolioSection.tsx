"use client";

import React from "react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-slate-950 relative"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Case Studies & Impact"
          title="Ideas Brought to"
          highlightedText="Life."
          description="Explore how we combine bespoke engineering, strategic media buying, and editorial design to transform business metrics for authentic industry leaders."
        />

        {/* 3 Visually Attractive Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Interested in viewing specific vertical case studies in your sector?
          </p>
          <Button
            href="#contact"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Request Category Case Deck
          </Button>
        </div>
      </div>
    </section>
  );
}
