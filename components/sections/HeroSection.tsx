"use client";

import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-950 via-[#051322] to-slate-950"
      aria-label="Introduction and Value Proposition"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,180,216,0.15),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30 shadow-sm shadow-sky-500/10">
              <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>DIGITAL STRATEGY • CREATIVE • TECHNOLOGY</span>
            </div>

            {/* Oversized Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.08]">
              Turn Digital Potential Into{" "}
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                Measurable Growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              From performance marketing to high-performing digital experiences, we help ambitious businesses build visibility, attract the right audience, and convert opportunities into sustainable growth.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                href="#audit"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto shadow-xl shadow-sky-500/20"
              >
                Get a Free Digital Audit
              </Button>

              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Trust highlights under CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>Zero Lock-in Free Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <span>Full-Funnel CRO Blueprint</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-amber-400" aria-hidden="true" />
                <span>Proven +250% Growth Track</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Marketing Analytics Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 sm:p-6 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl">
              {/* Card top bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white leading-tight">
                      Growth Command Center
                    </h2>
                    <span className="text-[10px] text-slate-400">
                      Live Omnichannel Attribution
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Campaign
                </span>
              </div>

              {/* Metric stats row */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Organic Search</span>
                    <Search className="h-3.5 w-3.5 text-sky-400" />
                  </div>
                  <div className="text-xl font-black text-white">+250%</div>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    ↑ 140+ Ranked Keywords
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Blended ROAS</span>
                    <Target className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                  <div className="text-xl font-black text-white">3.8x</div>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    ↑ -36% Cost Per Acquisition
                  </span>
                </div>
              </div>

              {/* Conversion curve graph illustration */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 mb-4">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-slate-200">
                    Growth Velocity Trajectory
                  </span>
                  <span className="text-[11px] font-bold text-sky-400">
                    High Acceleration
                  </span>
                </div>

                <svg
                  viewBox="0 0 300 90"
                  className="w-full h-20 overflow-visible"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="#1e293b" strokeDasharray="3 3" />

                  {/* Gradient area */}
                  <path
                    d="M 0 75 Q 60 70, 110 55 T 200 32 T 300 12 L 300 90 L 0 90 Z"
                    fill="url(#curveGradient)"
                  />
                  {/* Trend line */}
                  <path
                    d="M 0 75 Q 60 70, 110 55 T 200 32 T 300 12"
                    fill="none"
                    stroke="#00B4D8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Point circles */}
                  <circle cx="110" cy="55" r="4" fill="#00B4D8" />
                  <circle cx="200" cy="32" r="4" fill="#38BDF8" />
                  <circle cx="300" cy="12" r="5" fill="#34D399" />
                </svg>

                <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 font-medium">
                  <span>Audit & Setup</span>
                  <span>Keyword Clustering</span>
                  <span>Scale & Scale</span>
                  <span>Dominance</span>
                </div>
              </div>

              {/* Bottom active test metric */}
              <div className="flex items-center justify-between text-xs px-2 text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Core Web Vitals Pass Rate
                </span>
                <span className="font-bold text-white">99.4%</span>
              </div>

              {/* Floating badges outside card */}
              <div
                className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-xl backdrop-blur-md"
                aria-hidden="true"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Verified Revenue Lift
                  </div>
                  <div className="text-[10px] text-slate-400">
                    500+ Clients Retained
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
