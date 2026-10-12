"use client";

import React from "react";
import {
  Search,
  Target,
  Share2,
  Code2,
  FileText,
  ShoppingBag,
  Smartphone,
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Target,
  Share2,
  Code2,
  FileText,
  ShoppingBag,
  Smartphone,
  Palette,
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService?: (serviceTitle: string) => void;
}

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Sparkles;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7",
        "bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-md",
        "border border-slate-800/80 hover:border-sky-500/40",
        "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10",
        "overflow-hidden"
      )}
    >
      {/* Decorative gradient corner light */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-sky-500/20"
        aria-hidden="true"
      />

      <div>
        {/* Top bar with icon and category badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-slate-950">
            <IconComponent className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-sky-300 transition-colors">
          {service.title}
        </h3>

        {/* Short benefit-oriented description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Key deliverables */}
        <ul className="space-y-2 mb-6" aria-label={`Deliverables for ${service.title}`}>
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2
                className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer with metric highlight & CTA button */}
      <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
            Target Outcome
          </span>
          <span className="text-xs font-bold text-emerald-400">
            {service.metricsHighlight}
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            if (onSelectService) {
              onSelectService(service.title);
            }
            const formElement = document.getElementById("contact");
            if (formElement) {
              formElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link cursor-pointer p-1 -m-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
          aria-label={`Explore ${service.title} service and request audit`}
        >
          <span>Explore Service</span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
