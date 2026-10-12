"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, RotateCcw } from "lucide-react";
import { Button } from "./Button";
import { SERVICES } from "@/data/services";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  auditScope: string;
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
    auditScope: "Complete Growth & CRO Audit",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>("");

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g., name@company.com).";
      }
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number or leave blank.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please choose a primary service of interest.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API endpoint request with artificial latency
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      const simulatedId = `XN-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(simulatedId);
      setIsSubmitted(true);
    } catch {
      // Handled graceful fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "Search Engine Optimization (SEO)",
      message: "",
      auditScope: "Complete Growth & CRO Audit",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-2xl bg-slate-900 border border-emerald-500/30 p-8 sm:p-10 text-center animate-fade-in shadow-2xl"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-5 border border-emerald-500/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
          Audit Request Received • Ref #{submissionId}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">
          Thank you, {formData.fullName.split(" ")[0]}!
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
          Your digital audit request for <span className="font-semibold text-white">{formData.service}</span> has been staged in the client pipeline. Our senior growth strategist will review your business benchmarks within 1 business day.
        </p>

        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-left max-w-sm mx-auto mb-6 text-xs text-slate-300 space-y-1.5">
          <div><strong className="text-white">Business Email:</strong> {formData.email}</div>
          {formData.company && <div><strong className="text-white">Company:</strong> {formData.company}</div>}
          <div><strong className="text-white">Audit Focus:</strong> {formData.auditScope}</div>
        </div>

        <Button
          type="button"
          onClick={handleReset}
          variant="secondary"
          size="sm"
          leftIcon={<RotateCcw className="h-3.5 w-3.5" />}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-slate-900/95 border border-slate-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md"
      aria-label="Lead generation and free digital audit form"
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Claim Your Free Digital Audit
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          No obligation. We’ll analyze your SEO, paid channels, and technical performance within 24 hours.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name & Business Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-300 mb-1.5"
            >
              Full Name <span className="text-rose-400" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g., Ananya Deshmukh"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full rounded-lg px-3.5 py-2.5 text-sm bg-slate-950/80 text-white border transition-colors outline-none focus:ring-2 focus:ring-sky-500/50 ${
                errors.fullName
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-slate-800 focus:border-sky-500"
              }`}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="mt-1 flex items-center gap-1 text-xs text-rose-400"
              >
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-300 mb-1.5"
            >
              Business Email <span className="text-rose-400" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ananya@company.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-lg px-3.5 py-2.5 text-sm bg-slate-950/80 text-white border transition-colors outline-none focus:ring-2 focus:ring-sky-500/50 ${
                errors.email
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-slate-800 focus:border-sky-500"
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 flex items-center gap-1 text-xs text-rose-400"
              >
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Phone & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-slate-300 mb-1.5"
            >
              Phone Number <span className="text-slate-500 text-[11px]">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full rounded-lg px-3.5 py-2.5 text-sm bg-slate-950/80 text-white border transition-colors outline-none focus:ring-2 focus:ring-sky-500/50 ${
                errors.phone
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-slate-800 focus:border-sky-500"
              }`}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1 flex items-center gap-1 text-xs text-rose-400"
              >
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold text-slate-300 mb-1.5"
            >
              Company Name <span className="text-slate-500 text-[11px]">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g., Acme Innovations Ltd."
              className="w-full rounded-lg px-3.5 py-2.5 text-sm bg-slate-950/80 text-white border border-slate-800 transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50"
            />
          </div>
        </div>

        {/* Primary Service Selection */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold text-slate-300 mb-1.5"
          >
            Service of Interest <span className="text-rose-400" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm bg-slate-950 text-white border border-slate-800 transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 cursor-pointer"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Complete Agency Retainer (Full-Stack Growth)">
              Complete Agency Retainer (Full-Stack Growth)
            </option>
          </select>
        </div>

        {/* Project Message / Requirements */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-300 mb-1.5"
          >
            Project Details & Growth Goals{" "}
            <span className="text-slate-500 text-[11px]">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your primary challenge: increasing organic traffic, lowering ad CPA, redesigning your platform, or establishing brand identity..."
            className="w-full rounded-lg px-3.5 py-2.5 text-sm bg-slate-950/80 text-white border border-slate-800 transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 resize-y"
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[11px] text-slate-400">
          🔒 Strictly confidential. Never shared with third parties.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          rightIcon={<Send className="h-4 w-4" />}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Processing Audit Request..." : "Request Free Digital Audit"}
        </Button>
      </div>
    </form>
  );
}
