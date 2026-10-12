"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService?: (serviceTitle: string) => void;
}

// High quality curated preview images corresponding to each service
const SERVICE_IMAGES: Record<string, string> = {
  seo: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=800&auto=format&fit=crop",
  "paid-ads": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  "social-media": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
  "web-dev": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "content-marketing": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  ecommerce: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  "app-dev": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
  branding: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop",
};

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const imgSrc =
    SERVICE_IMAGES[service.id] ||
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";

  return (
    <article className="group rounded-md border border-slate-200 bg-white shadow-sm p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div>
        {/* Top Image Preview matching Xntrova */}
        <div className="relative h-48 sm:h-52 w-full rounded-sm overflow-hidden mb-4 bg-slate-100">
          <img
            src={imgSrc}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2.5 right-2.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-white/95 text-[#0075A2] shadow-sm uppercase tracking-wider">
              {service.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#101820] text-lg mb-2 group-hover:text-[#0075A2] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Deliverables */}
        <ul className="space-y-1.5 mb-5 text-xs text-slate-500">
          {service.deliverables.slice(0, 3).map((d, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#0075A2] shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More link in #0075A2 matching Xntrova */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#0075A2]">
          {service.metricsHighlight}
        </span>
        <a
          href="#audit"
          onClick={() => onSelectService && onSelectService(service.title)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0075A2] hover:underline"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
