"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-[#041624] to-slate-950 relative overflow-hidden"
      aria-label="Client Testimonials and Endorsements"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted Partnerships."
          highlightedText="Meaningful Experiences."
          description="Read genuine, verified feedback from founders and executives who have scaled their businesses alongside the Xntrova growth team."
        />

        {/* Desktop Grid Layout for All 3 Verified Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-slate-900/90 border transition-all duration-300 ${
                activeIndex === idx
                  ? "border-sky-500/50 shadow-xl shadow-sky-500/10 -translate-y-1"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                {/* Rating & Platform */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star
                        key={rIdx}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    {t.platform}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-sm ${t.avatarBg}`}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white truncate">
                      {t.name}
                    </span>
                    <span title="Verified Client">
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-emerald-400 shrink-0"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 truncate block">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel switcher controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prevTestimonial}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs font-semibold text-slate-400">
            {activeIndex + 1} of {TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={nextTestimonial}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
