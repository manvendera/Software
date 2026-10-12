import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "accent" | "success" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-semibold rounded-full tracking-wide transition-colors";

  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    primary: "bg-sky-500/10 text-sky-400 border border-sky-500/25",
    accent: "bg-amber-500/10 text-amber-300 border border-amber-500/25",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
    outline: "bg-transparent text-slate-300 border border-slate-700",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  const dotColorMap = {
    default: "bg-slate-400",
    primary: "bg-sky-400",
    accent: "bg-amber-400",
    success: "bg-emerald-400",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full", dotColorMap[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
