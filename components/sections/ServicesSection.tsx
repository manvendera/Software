"use client";

import React, { useState } from "react";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Growth & Search", "Paid Media", "Technology", "Creative"];

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-slate-950 relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Integrated Capabilities"
          title="Digital Solutions Built Around"
          highlightedText="Your Growth."
          description="We align organic visibility, targeted paid media, and custom technology into a unified engine designed to lower customer acquisition costs and build long-term enterprise value."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                selectedCategory === cat
                  ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 Cards Per Row on Large Screens, 2 on Tablets, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom audit callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-[#041d2e] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Unsure which channel delivers the highest ROI for your business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Let our senior growth analysts benchmark your competitive position across search, paid, and UX.
              </p>
            </div>
          </div>

          <Button
            href="#audit"
            variant="gold"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
            className="shrink-0 w-full sm:w-auto"
          >
            Claim Free Multi-Channel Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
