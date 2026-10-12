import React from "react";
import { Star } from "lucide-react";
import { REVIEW_PLATFORMS, CLIENT_LOGOS } from "@/data/testimonials";

export function TrustSection() {
  return (
    <section
      className="border-y border-slate-200 bg-[#F8FAFC] py-12 lg:py-16 overflow-hidden"
      aria-label="Reviews and Trusted Companies"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section 1: Reviews Platform */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101820]">
            Reviews Platform
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Independently verified ratings from clients worldwide.
          </p>
        </div>

        {/* Reviews Platform Marquee */}
        <div className="relative w-full overflow-hidden mb-14">
          <div className="animate-marquee-left flex items-center gap-6 sm:gap-10">
            {[...REVIEW_PLATFORMS, ...REVIEW_PLATFORMS].map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-md bg-white border border-slate-200 shadow-sm shrink-0 hover:border-[#0075A2] transition-colors"
              >
                <div className="flex items-center gap-1 text-[#FAAE39]">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-bold text-[#101820]">
                    {platform.score}
                  </span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <span className="text-xs font-bold text-[#101820]">
                  {platform.name}
                </span>
                <span className="text-[11px] text-slate-500">
                  ({platform.reviewCount})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Trusted by thousands of companies */}
        <div className="text-center max-w-xl mx-auto mb-8 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101820]">
            Trusted by thousands of companies
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Partnering with industry leaders to unlock scalable organic & paid performance.
          </p>
        </div>

        {/* Client Logos Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-6 sm:gap-10">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-8 py-4 rounded-md bg-white border border-slate-200 shadow-sm shrink-0 min-w-[180px] text-center"
              >
                <span className="text-sm font-bold text-[#101820]">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
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
