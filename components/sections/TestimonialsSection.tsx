"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

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
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#101820]"
      aria-label="Client Testimonials"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0075A2] block mb-2">
            Verified Endorsements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101820] mb-3">
            Trusted Partnerships. Meaningful Experiences.
          </h2>
          <p className="text-sm text-slate-600">
            Read direct feedback from company leaders partnering with Xntrova to scale organic and paid digital performance.
          </p>
        </div>

        {/* 3 Authentic Client Reviews matching Xntrova */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header with Avatar, Name, and Google Icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-sm font-bold ${
                        idx === 0
                          ? "bg-[#0075A2]"
                          : idx === 1
                          ? "bg-[#0A4257]"
                          : "bg-[#FAAE39]"
                      }`}
                    >
                      {t.initial}
                    </span>
                    <div>
                      <p className="font-bold text-[#101820] text-sm leading-tight">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Google Icon Badge matching Xntrova */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="shrink-0 mt-0.5"
                  >
                    <path
                      fill="#4285F4"
                      d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0 0 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.11Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.76 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.61l4 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
                    />
                  </svg>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex gap-1 text-[#FAAE39] mb-4">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Client Review</span>
                <span className="font-semibold text-emerald-600">5.0 / 5.0 ★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={prevTestimonial}
            className="p-2 rounded-sm border border-slate-200 bg-white text-slate-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs font-semibold text-slate-500">
            {activeIndex + 1} of {TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={nextTestimonial}
            className="p-2 rounded-sm border border-slate-200 bg-white text-slate-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
