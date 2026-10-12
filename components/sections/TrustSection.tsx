import React from "react";
import { Star, ShieldCheck, CheckCircle } from "lucide-react";
import { REVIEW_PLATFORMS, CLIENT_LOGOS, TRUST_METRICS } from "@/data/testimonials";

export function TrustSection() {
  return (
    <section
      className="border-y border-slate-800/80 bg-slate-950 py-10 sm:py-14"
      aria-label="Verified Client Trust & Reputation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Verified Performance Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-slate-800/80">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">
                  {metric.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {metric.note}
              </div>
            </div>
          ))}
        </div>

        {/* Review Platforms Ratings Strip */}
        <div className="pt-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Recognized Across Independent Review Platforms
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {REVIEW_PLATFORMS.map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span className="text-xs font-bold text-white">{platform.score}</span>
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  {platform.name}
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  • {platform.reviewCount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Brands Bar */}
        <div className="mt-10 pt-8 border-t border-slate-900">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by Ambitious Brands Across Diverse Industries
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 text-center transition-all"
              >
                <span className="text-xs font-bold text-slate-200">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
