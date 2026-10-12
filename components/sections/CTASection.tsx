import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#001F2B] text-white relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background Teal Gradients matching Xntrova */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#001320]/80 via-[#012A3A]/60 to-[#01415A]/40"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,117,162,0.2),transparent_60%)] animate-subtle-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider text-[#FAAE39] bg-[#FAAE39]/10 border border-[#FAAE39]/25 uppercase mb-2 backdrop-blur-sm">
            <span>Let's Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Make Your Next Move?
          </h2>

          <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
            Let's identify the opportunities that can move your business forward. Schedule an in-depth audit with our senior digital strategists today.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#audit"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-all duration-200 px-8 py-3.5 text-sm bg-[#FAAE39] text-[#101820] hover:bg-[#e89c25] hover:shadow-[0_8px_24px_rgba(250,174,57,0.3)] active:scale-[0.98]"
            >
              <span>Get Your Free Digital Audit</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+918683828646"
              className="inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-all duration-200 px-8 py-3.5 text-sm bg-[#0075A2] text-white hover:bg-[#008ec2] hover:shadow-[0_8px_24px_rgba(0,117,162,0.3)] active:scale-[0.98]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Talk to Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
