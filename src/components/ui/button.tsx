"use client";

import React from "react";
import Link from "next/link";
import { trackGTMEvent } from "@/lib/analytics";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "gold" | "secondary" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  gtmEventName?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  gtmEventName,
  external = false,
  type = "button",
  icon,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-full tracking-wide text-center focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs md:text-sm gap-2",
    md: "px-6 py-3 text-sm md:text-base gap-2.5",
    lg: "px-8 py-4 text-base md:text-lg gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#171717] text-white hover:bg-[#2c2c2c] focus:ring-[#171717] shadow-sm hover:shadow-lg",
    gold:
      "bg-[#b89b5e] text-white hover:bg-[#a38344] focus:ring-[#b89b5e] shadow-sm hover:shadow-lg hover:shadow-[#b89b5e]/20",
    secondary:
      "bg-white text-[#171717] border border-[#e9e7e2] hover:border-[#b89b5e] hover:bg-[#fafaf8] focus:ring-[#b89b5e] shadow-xs hover:shadow-md",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] focus:ring-[#25D366] shadow-sm hover:shadow-lg hover:shadow-[#25D366]/20",
    ghost:
      "bg-transparent text-[#171717] hover:bg-[#f5f4f1] focus:ring-[#b89b5e]",
  };

  const handleClick = () => {
    if (gtmEventName) {
      trackGTMEvent(gtmEventName);
    }
    if (onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {icon && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={handleClick} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={combinedClasses}>
      {content}
    </button>
  );
}
