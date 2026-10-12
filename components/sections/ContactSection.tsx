"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_INFO } from "@/data/navigation";

interface ContactSectionProps {
  selectedService?: string;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-slate-950 relative"
      aria-label="Contact and Free Digital Audit Form"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Start the Conversation"
          title="Direct Access to"
          highlightedText="Digital Strategists."
          description="Ready to scale search rankings, improve paid return on ad spend, or build high-conversion digital experiences? Connect directly with our team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Office Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Official Agency Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Telephone</span>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-white font-semibold hover:text-sky-400 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Inquiry Inbox</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white font-semibold hover:text-sky-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Headquarters</span>
                    <p className="text-white font-semibold leading-snug">
                      {CONTACT_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Consultation Hours</span>
                    <p className="text-white font-semibold">
                      {CONTACT_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Commitments Box */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#031d2b] border border-sky-500/20 p-6 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>What Happens After Submission?</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">1.</span>
                  <span>A senior strategist reviews your domain and competitive category.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">2.</span>
                  <span>We prepare a 9-point technical audit report outlining missed traffic & ROI leaks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">3.</span>
                  <span>We schedule an optional 20-minute strategy walk-through with zero sales pressure.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Controlled Lead Form */}
          <div className="lg:col-span-7">
            <ContactForm initialService={selectedService} />
          </div>
        </div>
      </div>
    </section>
  );
}
