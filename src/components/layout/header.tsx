"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Menu, X, MessageCircle } from "lucide-react";

import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Tratamentos", href: "#tratamentos" },
    { name: "Dr. Alan", href: "#sobre" },
    { name: "Resultados", href: "#resultados" },
    { name: "Consultório", href: "#consultorio" },
    { name: "Contato", href: "#localizacao" },
  ];

  const whatsappUrl = getWhatsAppLink("Olá Dr. Alan, gostaria de agendar uma avaliação.");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header border-b border-[#e9e7e2]/70 py-3 shadow-sm"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <Container size="default">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Dr. Alan Buchmann - Home"
          >
            <Image
              src="/images/dr-alan/logo-dr-alan-redondo.png"
              alt="Logo Dr. Alan Buchmann"
              width={44}
              height={44}
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full shrink-0 border border-[#e9e7e2]/80 bg-white"
            />
            <div className="flex flex-col">
              <span className="font-serif-title text-lg sm:text-xl font-normal tracking-tight text-[#171717] group-hover:text-[#a38344] transition-colors leading-tight">
                DR. ALAN BUCHMANN
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#686868] font-medium">
                Odontologia Estética
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-normal text-[#171717] hover:text-[#a38344] transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <Button
              href={whatsappUrl}
              external
              variant="gold"
              size="sm"
              gtmEventName="click_whatsapp_header"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Agendar avaliação
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171717] hover:text-[#a38344] focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#fafaf8] border-b border-[#e9e7e2] p-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#171717] hover:text-[#a38344] py-2 border-b border-[#e9e7e2]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <Button
            href={whatsappUrl}
            external
            variant="whatsapp"
            size="md"
            className="w-full"
            gtmEventName="click_whatsapp_header"
            onClick={() => setMobileMenuOpen(false)}
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Agendar minha avaliação
          </Button>
        </div>
      )}
    </header>
  );
}
