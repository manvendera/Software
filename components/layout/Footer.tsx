"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <footer className="w-full bg-[#00141D] text-slate-300 text-sm border-t border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,117,162,0.1),transparent)]" />

      {/* Upper Newsletter Strip */}
      <div className="border-b border-slate-800/80 bg-[#001822]/90 backdrop-blur-sm py-8 px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Subscribe to Digital Growth Insights
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Monthly breakdown of SEO algorithm updates, PPC bidding shifts, and conversion frameworks.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex w-full sm:w-auto max-w-md items-center gap-2"
          >
            {newsletterSuccess ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 rounded-md">
                <CheckCircle2 className="h-4 w-4" />
                <span>Thank you! You are subscribed to Xntrova Insights.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  aria-label="Email address for monthly insights"
                  className="w-full sm:w-72 rounded-md bg-slate-900/90 border border-slate-700/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/30"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#FAAE39] text-[#101820] font-bold text-xs px-5 py-2.5 hover:bg-[#ffb94d] hover:shadow-md active:scale-[0.98] transition-all duration-200 shrink-0 flex items-center gap-1.5 cursor-pointer"
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
      <div className="max-w-[1440px] mx-auto py-12 lg:py-16 px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                alt="Xntrova"
                width={150}
                height={38}
                className="h-8 lg:h-9 w-auto object-contain brightness-0 invert"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Xntrova is the premier digital marketing and technology company in Delhi NCR. We help ambitious brands create high-impact search presence, scale paid acquisition channels, and engineer seamless web platforms.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2.5">
                Follow Us
              </span>
              <div className="flex flex-wrap gap-2">
                {CONTACT_INFO.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-700/70 text-xs font-medium text-slate-300 hover:text-white hover:border-[#0075A2] hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all duration-200"
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
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-[#0075A2] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#audit"
                  className="text-[#FAAE39] font-semibold hover:text-[#ffb94d] transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Get Free Audit →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#0075A2] transition-colors duration-200"
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
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0075A2] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0075A2] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-slate-300 hover:text-[#0075A2] transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0075A2] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-300 hover:text-[#0075A2] transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Xntrova. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="h-3 w-px bg-slate-800" />
            <a href="#hero" className="hover:text-slate-300 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
