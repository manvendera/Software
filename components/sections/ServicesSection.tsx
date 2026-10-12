"use client";

import React, { useState } from "react";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Growth & Search",
    "Paid Media",
    "Technology",
    "Creative",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-[#101820]"
      aria-label="Services Section"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Exact Heading matching Xntrova */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#0075A2] bg-[#0075A2]/10 border border-[#0075A2]/20 mb-3.5 uppercase tracking-wider">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101820] mb-3 leading-tight tracking-tight">
            Best Digital Marketing Services in Delhi for Sustainable Business Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Being the best creative digital marketing agency in New Delhi, we offer solutions that help you unlock long-term growth for your business.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0075A2] text-white shadow-md shadow-[#0075A2]/25"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-[#0075A2] border border-slate-200/90 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid matching Xntrova (3-4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom "View More" CTA matching Xntrova */}
        <div className="text-center mt-12">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-sm font-semibold transition-opacity px-8 py-3.5 text-sm bg-[#0075A2] text-white hover:opacity-90 shadow-sm"
          >
            Request Custom Service Scope
          </a>
        </div>
      </div>
    </section>
  );
}
