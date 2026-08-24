import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses =
    align === "center"
      ? "text-center mx-auto max-w-3xl"
      : "text-left max-w-3xl";

  return (
    <div className={`space-y-3 md:space-y-4 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#a38344]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#686868] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
