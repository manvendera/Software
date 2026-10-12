"use client";

import React, { useEffect } from "react";
import { X, Phone, Mail, ArrowRight } from "lucide-react";
import { MAIN_NAV_ITEMS, CONTACT_INFO } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-950/95 backdrop-blur-xl animate-fade-in text-white"
    >
      {/* Top Bar with Brand and Close Button */}
      <div className="flex h-16 items-center justify-between px-5 sm:px-8 border-b border-slate-800">
        <a
          href="#hero"
          onClick={onClose}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-500 to-teal-400 text-slate-950 font-black text-base shadow-md shadow-sky-500/20">
            X
          </span>
          <span className="font-extrabold tracking-tight">
            XNTROVA<span className="text-sky-400">.</span>
          </span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Close navigation menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Nav items list */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-2" aria-label="Mobile menu navigation">
        {MAIN_NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-xl text-lg font-semibold text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>{item.label}</span>
            <ArrowRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
          </a>
        ))}

        <div className="pt-6 mt-6 border-t border-slate-800 space-y-4">
          <Button
            href="#audit"
            variant="gold"
            size="lg"
            className="w-full text-center"
            onClick={onClose}
          >
            Get a Free Digital Audit
          </Button>

          {/* Quick contact details in mobile menu */}
          <div className="space-y-3 pt-4 text-xs text-slate-400">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-sky-400 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Mail className="h-4 w-4 text-sky-400 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
