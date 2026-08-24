"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-[#e9e7e2] transition-colors duration-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left gap-4 focus:outline-none focus:text-[#a38344] group"
        aria-expanded={isOpen}
      >
        <span className="font-serif-title text-lg md:text-xl text-[#171717] font-medium group-hover:text-[#a38344] transition-colors">
          {question}
        </span>
        <span className="shrink-0 text-[#686868] group-hover:text-[#a38344] transition-transform duration-300 transform">
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#a38344]" : ""
            }`}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm md:text-base text-[#686868] leading-relaxed font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#e9e7e2] border-t border-[#e9e7e2]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
