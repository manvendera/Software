"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { MAIN_NAV_ITEMS, CONTACT_INFO } from "@/data/navigation";
import { SERVICES } from "@/data/services";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Upper Newsletter & Advisory CTA strip */}
      <div className="border-b border-slate-900 bg-slate-950/60 py-10 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Subscribe to Growth & Digital Insights
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Monthly breakdown on SEO algorithm changes, performance ad benchmarks, and conversion engineering.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex w-full sm:w-auto max-w-md items-center gap-2"
          >
            {newsletterSuccess ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 rounded-lg">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscribed! Check your inbox for our latest briefing.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  aria-label="Email address for monthly insights newsletter"
                  className="w-full sm:w-72 rounded-lg bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-4 py-2.5 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <span>Join</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-xl font-black text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-sky-400 to-teal-300 text-slate-950 font-black shadow-md shadow-sky-500/20">
                X
              </div>
              <span className="font-extrabold tracking-tight">
                XNTROVA<span className="text-sky-400">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Xntrova Technologies is an award-grade digital marketing, creative strategy, and engineering agency based in New Delhi NCR. We empower high-growth brands to scale organic authority, dominate paid channels, and build exceptional digital products.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex flex-wrap gap-2">
                {CONTACT_INFO.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-850 transition-all"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#audit"
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                >
                  Get Free Audit →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Office
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Xntrova Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <span className="h-3 w-px bg-slate-800" />
            <a href="#hero" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </a>
            <span className="h-3 w-px bg-slate-800" />
            <a href="#hero" className="hover:text-slate-400 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
