"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, Globe, Menu, ArrowRight } from "lucide-react";
import { MAIN_NAV_ITEMS, CONTACT_INFO } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Utility Announcement & Contact Bar (Desktop & Tablet) */}
        <div className="hidden md:block bg-slate-950/90 text-slate-400 border-b border-slate-800/80 text-xs py-2 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Direct Contact info */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
              >
                <Phone className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <span className="h-3 w-px bg-slate-800" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
              >
                <Mail className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            {/* Region / Status indicator */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Globe className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
                <span>New Delhi NCR • Global Strategy & Engineering</span>
              </div>
              <span className="h-3 w-px bg-slate-800" aria-hidden="true" />
              <div className="flex items-center gap-1 text-emerald-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Q2 Growth Audits Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation Bar */}
        <div
          className={cn(
            "w-full transition-all duration-300 px-5 sm:px-8 lg:px-12",
            isScrolled
              ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5"
              : "bg-slate-950/60 backdrop-blur-md border-b border-slate-800/50 py-4 sm:py-5"
          )}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
            {/* Logo / Wordmark */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
              aria-label="Xntrova Technologies Homepage"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-sky-400 to-teal-300 text-slate-950 font-black shadow-md shadow-sky-500/25">
                X
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold tracking-tight text-white">
                  XNTROVA<span className="text-sky-400">.</span>
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
                  Technologies
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-800/80 px-3 py-1.5 shadow-inner"
              aria-label="Primary Navigation"
            >
              {MAIN_NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA and Mobile Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                href="#audit"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex text-xs"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Get a Free Audit
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
