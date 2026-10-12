"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        className={cn(
          "group relative flex flex-col rounded-2xl overflow-hidden",
          "bg-slate-900/90 border border-slate-800/80 hover:border-sky-500/50",
          "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10"
        )}
      >
        {/* Project Image Preview */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-sky-300">
              {project.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300">
              {project.impact}
            </span>
          </div>

          {/* Client tag on bottom of image */}
          <div className="absolute bottom-3 left-4">
            <span className="text-xs font-medium text-slate-300 bg-slate-900/80 px-2.5 py-0.5 rounded border border-slate-700/50">
              Client: {project.client}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-2.5">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Link */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Verified Production Case Study
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded px-2 py-1 -mr-2"
              aria-label={`View detailed breakdown for ${project.title}`}
            >
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>

      {/* Interactive Case Study Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Close case study details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 mb-2">
                {project.category} • Client: {project.client}
              </span>
              <h3
                id={`modal-title-${project.id}`}
                className="text-2xl font-bold text-white tracking-tight"
              >
                {project.title}
              </h3>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              {project.details.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-6 text-sm text-slate-300">
              <div>
                <h4 className="font-semibold text-white mb-1">The Challenge:</h4>
                <p className="leading-relaxed text-slate-300">
                  {project.details.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Xntrova Strategy & Solution:</h4>
                <p className="leading-relaxed text-slate-300">
                  {project.details.solution}
                </p>
              </div>
            </div>

            {/* Tags & Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
              >
                Discuss Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
