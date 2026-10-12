"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { CONTACT_INFO } from "@/data/navigation";

interface ContactSectionProps {
  selectedService?: string;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-[#101820]"
      aria-label="Contact Section"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0075A2] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101820] mb-3">
            Direct Access to Digital Strategists
          </h2>
          <p className="text-sm text-slate-600">
            Have questions about growing your organic reach or scaling paid advertising? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-[#101820]">
                Official Agency Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0075A2]/10 text-[#0075A2] shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Telephone</span>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-[#101820] font-bold hover:text-[#0075A2] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0075A2]/10 text-[#0075A2] shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Address</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-[#101820] font-bold hover:text-[#0075A2] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0075A2]/10 text-[#0075A2] shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Headquarters</span>
                    <p className="text-[#101820] font-semibold leading-snug">
                      {CONTACT_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0075A2]/10 text-[#0075A2] shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Business Hours</span>
                    <p className="text-[#101820] font-semibold">
                      {CONTACT_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <ContactForm initialService={selectedService} />
          </div>
        </div>
      </div>
    </section>
  );
}
