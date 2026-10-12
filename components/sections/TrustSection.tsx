import React from "react";
import { Star } from "lucide-react";
import { REVIEW_PLATFORMS, CLIENT_LOGOS } from "@/data/testimonials";

export function TrustSection() {
  return (
    <section
      className="border-y border-slate-200/90 bg-[#F8FAFC] py-16 sm:py-20 overflow-hidden"
      aria-label="Reviews and Trusted Companies"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section 1: Reviews Platform */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[#0075A2] bg-[#0075A2]/10 border border-[#0075A2]/20 mb-3 uppercase tracking-wider">
            <span>Verified Ratings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101820] tracking-tight">
            Reviews Platform
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            Independently verified ratings from clients worldwide.
          </p>
        </div>

        {/* Reviews Platform Marquee with Edge Fade Masks */}
        <div className="relative w-full overflow-hidden mb-16">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

          <div className="animate-marquee-left flex items-center gap-6 sm:gap-8 py-2">
            {[...REVIEW_PLATFORMS, ...REVIEW_PLATFORMS].map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-lg bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] shrink-0 hover:-translate-y-1 hover:border-[#0075A2]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-1.5 text-[#FAAE39]">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-bold text-[#101820]">
                    {platform.score}
                  </span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <span className="text-xs font-bold text-[#101820]">
                  {platform.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  ({platform.reviewCount})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Trusted by thousands of companies */}
        <div className="text-center max-w-xl mx-auto mb-10 pt-10 border-t border-slate-200/80">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[#0075A2] bg-[#0075A2]/10 border border-[#0075A2]/20 mb-3 uppercase tracking-wider">
            <span>Client Partnerships</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101820] tracking-tight">
            Trusted by thousands of companies
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            Partnering with industry leaders to unlock scalable organic & paid performance.
          </p>
        </div>

        {/* Client Logos Marquee with Edge Fade Masks */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

          <div className="animate-marquee-left flex items-center gap-6 sm:gap-8 py-2">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-8 py-4.5 rounded-lg bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] shrink-0 min-w-[190px] text-center hover:-translate-y-1 hover:border-[#0075A2]/50 hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-bold text-[#101820]">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
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
