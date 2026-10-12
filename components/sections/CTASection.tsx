import React from "react";
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section
      id="audit"
      className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden"
      aria-label="Conversion Call to Action"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-950 via-[#072438] to-slate-950 border border-sky-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-sky-950/50 overflow-hidden text-center lg:text-left">
          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Headline and Copy */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Next-Quarter Growth Strategy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Ready to Make Your Next Move?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Let’s identify the high-leverage opportunities that can move your business forward. Receive an exhaustive audit of your search footprint, ad performance, and conversion architecture within 24 hours.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-400" />
                  100% Free & Actionable
                </span>
                <span>•</span>
                <span>Custom Competitor Gap Analysis</span>
                <span>•</span>
                <span>No Obligation Required</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <Button
                href="#contact"
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="w-full text-center"
              >
                Get Your Free Digital Audit
              </Button>

              <Button
                href="tel:+918683828646"
                variant="secondary"
                size="lg"
                leftIcon={<PhoneCall className="h-4 w-4 text-sky-400" />}
                className="w-full text-center"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
