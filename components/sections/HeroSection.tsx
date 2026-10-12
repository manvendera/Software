"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICES } from "@/data/services";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg("Please fill in your name and business email.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#001F2B] text-white py-16 sm:py-20 lg:py-24"
      aria-label="Hero Section"
    >
      {/* Background Gradients and Subtle Ambient Mesh */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#001320]/80 via-[#012A3A]/60 to-[#01415A]/35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_18%_45%,rgba(0,15,26,0.65),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,117,162,0.25),transparent_50%)] animate-subtle-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
          {/* Left Hero Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider text-[#FAAE39] bg-[#FAAE39]/10 border border-[#FAAE39]/25 uppercase mb-5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FAAE39] animate-pulse" />
              <span>DIGITAL STRATEGY • CREATIVE • TECHNOLOGY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-[1.12] mb-3">
              Scale Your Business With The Best Digital Marketing Agency in Delhi
            </h1>

            {/* Gold squiggly underline matching Xntrova */}
            <svg
              width="130"
              height="10"
              viewBox="0 0 120 10"
              fill="none"
              aria-hidden="true"
              className="mb-6 text-[#FAAE39]"
            >
              <path
                d="M2 7C24 2 96 2 118 7"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-8 max-w-xl">
              Unlock your business potential and connect with your targeted customers by partnering with Xntrova, the best digital marketing agency in Delhi. From performance marketing to high-performing digital experiences, we help ambitious businesses build visibility, attract the right audience, and convert opportunities into growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#audit"
                className="inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-200 px-8 py-3.5 text-sm bg-[#0075A2] text-white hover:bg-[#008ec2] hover:shadow-[0_8px_24px_rgba(0,117,162,0.35)] active:scale-[0.98]"
              >
                Get Free Digital Audit
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-200 px-8 py-3.5 text-sm border border-white/30 text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.98]"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Right Hero: Floating White Free Audit Card */}
          <div
            id="audit"
            className="w-full max-w-md justify-self-center lg:justify-self-end rounded-xl border border-white/90 bg-white/98 shadow-[0_24px_60px_-12px_rgba(0,19,32,0.45)] p-6 sm:p-8 text-[#101820] backdrop-blur-sm"
          >
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101820] tracking-tight">
                Get a Free Digital Audit
              </h2>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Tell us about your business and our growth directors will analyze your digital footprint.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-6 text-center animate-fade-in">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3 shadow-inner">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-[#101820] mb-1">
                  Audit Request Received!
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our digital growth director will analyze your domain and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-[#0075A2] hover:underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMsg && (
                  <div className="p-2.5 rounded-md text-xs bg-rose-50 text-rose-600 border border-rose-200 flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
                  />
                  <input
                    type="email"
                    required
                    placeholder="you@company.com*"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
                  />
                </div>

                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25 cursor-pointer"
                >
                  <option value="" disabled>
                    Which service are you interested in?
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Complete Agency Retainer">
                    Complete Agency Retainer
                  </option>
                </select>

                <textarea
                  rows={2}
                  placeholder="Tell us about your business goals"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25 resize-y"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-md bg-[#0075A2] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#005f85] hover:shadow-md active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
