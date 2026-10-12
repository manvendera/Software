import React from "react";
import Image from "next/image";
import {
  Lightbulb,
  Compass,
  BarChart3,
  TrendingUp,
  Eye,
  Users,
  MousePointerClick,
  Gauge,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#101820] overflow-hidden"
      aria-label="About Xntrova"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#0075A2] bg-[#0075A2]/10 border border-[#0075A2]/20 mb-4 uppercase tracking-wider">
              <span>About Xntrova</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#101820] leading-[1.15] mb-5 tracking-tight">
              <span className="block">Driven By Ideas.</span>
              <span className="block">
                Focused on <span className="text-[#0075A2]">Results</span>
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              At Xntrova, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.
            </p>

            <p className="border-l-2 border-[#0075A2]/40 pl-4 py-1 text-sm text-slate-500 leading-relaxed mb-8 bg-slate-50/50 rounded-r-md">
              Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results. Standing as the premier digital marketing agency in Delhi NCR, we aim to create work that delivers measurable outcomes and helps your business climb the competitive ladder with confidence.
            </p>

            {/* 4 Feature Points with Xntrova Circular Icons */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div className="flex items-start gap-3">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <Lightbulb className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#101820] text-sm">
                    Creative Ideas
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fresh thinking that builds powerful brand stories.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <Compass className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#101820] text-sm">
                    Strategic Planning
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Smart strategies backed by deep market insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#101820] text-sm">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Decisions tied to real impact and ROI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0075A2]/10 text-[#0075A2]">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-[#101820] text-sm">
                    Measurable Results
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Real results that drive growth and long-term success.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#audit"
                className="inline-flex items-center justify-center rounded-sm font-semibold transition-opacity px-7 py-3.5 text-sm bg-[#0075A2] text-white hover:opacity-90 shadow-sm"
              >
                Let’s Grow Together
              </a>
            </div>
          </div>

          {/* Right Column: Signature Xntrova Orbiting Diagram Visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[460px]">
              {/* Inner ring */}
              <div
                className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0075A2]/20"
                aria-hidden="true"
              />
              {/* Outer spinning dashed ring with subtle glow */}
              <div
                className="animate-spin-slow absolute inset-0 m-auto h-[90%] w-[90%] rounded-full border border-dashed border-[#0075A2]/30 shadow-[0_0_40px_rgba(0,117,162,0.06)]"
                aria-hidden="true"
              />

              {/* Center circular badge with Xntrova Logo */}
              <div className="absolute inset-0 m-auto flex h-32 w-32 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200/90 bg-white p-4 text-center shadow-[0_12px_40px_rgba(0,117,162,0.18)] z-10 hover:scale-105 transition-transform duration-300">
                <div className="relative h-7 w-24">
                  <Image
                    src="https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                    alt="Xntrova"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Driven by Results
                </span>
              </div>

              {/* 4 Corner Orbiting Floating Cards */}
              {/* Top Left */}
              <div className="absolute left-0 top-[4%] w-[140px] sm:w-[155px]">
                <div className="rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#0075A2]/50 hover:shadow-md transition-all duration-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0075A2]/10 text-[#0075A2]">
                    <Eye className="h-4 w-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#101820] text-xs leading-tight">
                    Build Visibility
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug hidden sm:block">
                    Increase your reach online.
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="absolute right-0 top-[4%] w-[140px] sm:w-[155px]">
                <div className="rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#0075A2]/50 hover:shadow-md transition-all duration-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0075A2]/10 text-[#0075A2]">
                    <Users className="h-4 w-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#101820] text-xs leading-tight">
                    Engage Audience
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug hidden sm:block">
                    Turn visitors into loyal fans.
                  </p>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute left-0 bottom-[4%] w-[140px] sm:w-[155px]">
                <div className="rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#0075A2]/50 hover:shadow-md transition-all duration-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0075A2]/10 text-[#0075A2]">
                    <MousePointerClick className="h-4 w-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#101820] text-xs leading-tight">
                    Drive Conversions
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug hidden sm:block">
                    Turn clicks into customers.
                  </p>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute right-0 bottom-[4%] w-[140px] sm:w-[155px]">
                <div className="rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-[#0075A2]/50 hover:shadow-md transition-all duration-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0075A2]/10 text-[#0075A2]">
                    <Gauge className="h-4 w-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#101820] text-xs leading-tight">
                    Measure & Improve
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug hidden sm:block">
                    Track & optimize daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Overview Card matching Xntrova with Gradient Chart Fill */}
            <div className="mt-6 sm:mt-8 max-w-xs mx-auto">
              <div className="rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-4.5 shadow-[0_12px_36px_rgba(0,117,162,0.08)] hover:shadow-[0_16px_40px_rgba(0,117,162,0.12)] transition-shadow">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold text-[#101820]">
                    Performance Overview
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0075A2]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#0075A2]">
                    <TrendingUp className="h-3 w-3" />
                    Growing
                  </span>
                </div>

                {/* SVG trend line with subtle gradient fill */}
                <svg
                  viewBox="0 0 120 40"
                  className="mt-3 w-full h-11"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0075A2" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0075A2" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 35 C 20 32, 30 24, 42 26 S 62 16, 74 14 S 96 6, 118 4 L 118 40 L 2 40 Z"
                    fill="url(#trendGradient)"
                  />
                  <path
                    d="M2 35 C 20 32, 30 24, 42 26 S 62 16, 74 14 S 96 6, 118 4"
                    fill="none"
                    stroke="#0075A2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
                  <div>
                    <dt className="text-[10px] text-slate-500 leading-tight">
                      Organic Traffic
                    </dt>
                    <dd className="text-xs font-bold text-[#101820] mt-0.5">
                      +250%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] text-slate-500 leading-tight">
                      Delivered
                    </dt>
                    <dd className="text-xs font-bold text-[#101820] mt-0.5">
                      120+
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] text-slate-500 leading-tight">
                      Clients
                    </dt>
                    <dd className="text-xs font-bold text-[#101820] mt-0.5">
                      500+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
