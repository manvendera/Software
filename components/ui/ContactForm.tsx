"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, RotateCcw } from "lucide-react";
import { SERVICES } from "@/data/services";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
}

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: initialService || "Search Engine Optimization (SEO)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please choose a service.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    const simulatedId = `XN-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(simulatedId);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "Search Engine Optimization (SEO)",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-xl bg-white border border-emerald-200/90 p-8 text-center animate-fade-in shadow-[0_4px_24px_-4px_rgba(16,185,129,0.08)]"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
          Ref #{submissionId}
        </span>
        <h3 className="text-xl font-bold text-[#101820] mb-2">
          Thank you, {formData.fullName}!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
          Your inquiry regarding <strong className="text-[#0075A2]">{formData.service}</strong> has been logged. Our senior growth director will contact you via {formData.email}.
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 active:scale-[0.98] transition-all cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Submit Another Request</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(0,117,162,0.06)] text-[#101820]"
      aria-label="Contact and audit inquiry form"
    >
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#101820]">
          Send Us a Message
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Fill out the details below and we’ll get back to you within 24 hours.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="form-name"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="form-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
            />
            {errors.fullName && (
              <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-500">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="form-email"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Business Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="form-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
            />
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-500">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="form-phone"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="form-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
            />
            {errors.phone && (
              <p className="mt-1.5 flex items-center gap-1 text-[11px] text-rose-500">
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="form-company"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Company Name
            </label>
            <input
              type="text"
              id="form-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="form-service"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Which service are you interested in?
          </label>
          <select
            id="form-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25 cursor-pointer"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Complete Agency Retainer">
              Complete Agency Retainer
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="form-message"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Tell us about your business goals
          </label>
          <textarea
            id="form-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details regarding your current challenges, target audience, or timelines..."
            className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-[#101820] outline-none transition-all duration-200 focus:border-[#0075A2] focus:ring-2 focus:ring-[#0075A2]/25 resize-y"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-slate-400">
          🔒 We treat your information with strict confidentiality.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#0075A2] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#005f85] hover:shadow-md active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-sm"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
