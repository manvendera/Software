"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, Globe, Menu, ChevronDown } from "lucide-react";
import { MAIN_NAV_ITEMS, CONTACT_INFO } from "@/data/navigation";
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
      <header className="sticky top-0 z-40 w-full bg-white transition-all duration-200">
        {/* Top Utility Announcement & Contact Bar */}
        <div className="hidden lg:block bg-[#F8FAFC] border-b border-slate-200 text-xs py-2 px-5 sm:px-8 lg:px-10">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
            {/* Social Profile Badges */}
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/xntrova/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  style={{ width: "12px", height: "12px", display: "block" }}
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/xntrova.agency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
                }}
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  style={{ width: "12px", height: "12px", display: "block" }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/xntrova/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on LinkedIn"
                className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#0A66C2" }}
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  style={{ width: "12px", height: "12px", display: "block" }}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/xntrova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Xntrova on Twitter"
                className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#000000" }}
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  style={{ width: "12px", height: "12px", display: "block" }}
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Direct Contact info + CTA */}
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-[#0075A2] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#0075A2]" aria-hidden="true" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#0075A2] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#0075A2]" aria-hidden="true" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href="#audit"
                className="ml-2 inline-flex items-center px-4 py-1.5 rounded-sm bg-[#FAAE39] text-[#101820] text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div
          className={cn(
            "w-full px-5 sm:px-8 lg:px-10 border-b border-slate-200/90 transition-all duration-300",
            isScrolled
              ? "py-2.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] bg-white/95 backdrop-blur-md"
              : "py-3.5 lg:py-4 bg-white"
          )}
        >
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
            {/* Real Xntrova Brand Logo from Cloudinary */}
            <a
              href="#hero"
              className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0075A2] rounded-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Xntrova Homepage"
            >
              <Image
                src="https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                alt="Xntrova"
                width={150}
                height={38}
                priority
                className="h-8 lg:h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary Navigation"
            >
              {MAIN_NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium text-[#101820] hover:text-[#0075A2] transition-colors rounded-sm"
                >
                  <span>{item.label}</span>
                  {/* Yellow hover indicator line underneath matching Xntrova */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 right-3.5 -bottom-px h-0.5 rounded-full bg-[#FAAE39] origin-left transition-transform duration-200 scale-x-0 group-hover:scale-x-100"
                  />
                </a>
              ))}
            </nav>

            {/* Right-Side Region & CTA Controls */}
            <div className="flex items-center gap-3">
              {/* Region Pill */}
              <div className="hidden lg:flex items-center gap-1.5 rounded-sm border border-slate-300/80 bg-slate-50/60 px-3 py-1.5 text-xs font-medium text-[#101820] transition-colors hover:border-[#0075A2]/50 hover:bg-white cursor-pointer select-none">
                <Globe className="h-3.5 w-3.5 text-[#0075A2]" />
                <span>India</span>
                <ChevronDown className="h-3 w-3 text-slate-500" />
              </div>

              {/* Free Audit Button */}
              <a
                href="#audit"
                className="inline-flex items-center px-5 py-2.5 rounded-sm bg-[#FAAE39] text-[#101820] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md hover:bg-[#e89c25] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0075A2]"
              >
                Get Free Audit
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#101820] lg:hidden rounded-sm hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0075A2]"
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
