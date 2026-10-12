"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="group rounded-md border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
        {/* Project Image Preview */}
        <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-sm bg-white/95 text-[#0075A2] shadow-sm">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-sm bg-[#0075A2] text-white shadow-sm">
              {project.impact}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-1 flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 mb-1">
              Client: <span className="text-[#101820] font-bold">{project.client}</span>
            </div>
            <h3 className="text-lg font-bold text-[#101820] tracking-tight group-hover:text-[#0075A2] transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Production Case</span>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0075A2] hover:underline cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </article>

      {/* Case Study Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div
            className="relative w-full max-w-2xl rounded-lg bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-[#101820]"
            tabIndex={-1}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-sm text-slate-400 hover:text-[#101820] hover:bg-slate-100"
              aria-label="Close case study details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-sm bg-[#0075A2]/10 text-[#0075A2] mb-2 uppercase">
                {project.category} • Client: {project.client}
              </span>
              <h3 className="text-2xl font-bold text-[#101820]">
                {project.title}
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-md bg-[#F8FAFC] border border-slate-200 text-center">
              {project.details.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-xl sm:text-2xl font-black text-[#0075A2]">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-[#101820] mb-1">The Challenge:</h4>
                <p className="leading-relaxed">{project.details.challenge}</p>
              </div>
              <div>
                <h4 className="font-bold text-[#101820] mb-1">Xntrova Strategy & Solution:</h4>
                <p className="leading-relaxed">{project.details.solution}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#audit"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-bold rounded-sm bg-[#0075A2] text-white hover:opacity-90"
              >
                Discuss Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
