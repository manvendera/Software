import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text-link" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/20 hover:from-sky-400 hover:to-teal-400 hover:shadow-sky-500/35 border border-sky-400/30",
    secondary:
      "bg-slate-900 text-slate-100 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 shadow-sm",
    outline:
      "border border-slate-700 text-slate-200 bg-transparent hover:bg-slate-800/60 hover:border-slate-500 hover:text-white",
    "text-link":
      "bg-transparent text-sky-400 hover:text-sky-300 underline-offset-4 hover:underline p-0 h-auto font-medium focus-visible:ring-offset-0",
    gold:
      "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 border border-amber-400/40",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  // If text-link, do not apply button padding or height
  const appliedSize = variant === "text-link" ? "text-sm gap-1.5" : sizeStyles[size];

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    appliedSize,
    className
  );

  const content = (
    <>
      {isLoading ? (
        <span
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2 shrink-0"
          aria-hidden="true"
        />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
