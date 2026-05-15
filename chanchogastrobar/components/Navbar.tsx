"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, Calendar, Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Esencia", href: "#historia" },
    { name: "Galería", href: "#galeria" },
    { name: "Carta", href: "#carta" },
    { name: "Reseñas", href: "#reviews" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // NavLink Component for the letter-by-letter roll effect
    const NavLink = ({ link, mobile = false, isButton = false }: { link: any, mobile?: boolean, isButton?: boolean }) => {
      const letters = link.name.split("");
      
      return (
        <a
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className={`group relative flex items-center overflow-hidden ${
            isButton
              ? "px-6 py-2.5 bg-text-primary text-text-inverse text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brand-gold transition-all duration-300 shadow-sm"
              : "text-[18px] md:text-[12px] uppercase font-bold tracking-[0.2em] text-text-primary/70 py-4 md:py-1"
          }`}
        >
        <div className="relative flex items-center h-full">
          {letters.map((char: string, i: number) => (
            <span 
              key={i} 
              className="relative inline-flex flex-col overflow-hidden h-[1.1em] leading-none"
            >
              <span 
                className={`inline-block transition-transform duration-400 ease-expo group-hover:-translate-y-full ${
                  isButton ? "group-hover:text-bg-dark" : ""
                }`}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
              <span 
                className={`absolute top-full left-0 inline-block transition-transform duration-400 ease-expo group-hover:-translate-y-full ${
                  isButton ? "text-bg-dark" : "text-brand-gold"
                }`}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </div>
      </a>
    );
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-4 pointer-events-none">
      <nav 
        ref={navRef}
        className={`max-w-4xl mx-auto pointer-events-auto bg-bg-primary/20 backdrop-blur-xl border border-text-primary/5 shadow-[0_8px_32px_rgba(75,54,33,0.1)] transition-all duration-500 ease-expo overflow-hidden rounded-[2rem] px-4 md:px-6 ${
          isOpen ? "py-6" : "py-2 md:py-3"
        }`}
      >
        <div className="flex flex-col">
          {/* Main Bar - Fixed Height to prevent shifting */}
          <div className="flex justify-between items-center w-full h-10 md:h-12">
            {/* Logo area */}
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, "#inicio")}
              className="flex items-center gap-2 group shrink-0 select-none"
            >
              <div className="relative w-7 h-7 md:w-8 md:h-8 overflow-hidden">
                <Image
                  src="/assets/Logo-Llama.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <span className="font-sans font-black text-base md:text-lg text-text-primary tracking-tighter uppercase leading-none">
                El Chancho
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
              <a 
                href="#reservas"
                onClick={(e) => handleLinkClick(e, "#reservas")}
                className="btn-premium btn-primary !px-6 !py-2 group gap-2.5 flex items-center"
              >
                <Calendar size={14} className="shrink-0" />
                <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden">
                  {"Reservar".split("").map((char, i) => (
                    <span key={i} className="relative inline-flex flex-col overflow-hidden h-full">
                      <span className="inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full translate-y-[0.05em]" style={{ transitionDelay: `${i * 20}ms` }}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                      <span className="absolute top-full left-0 inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full translate-y-[0.05em] text-black" style={{ transitionDelay: `${i * 20}ms` }}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                    </span>
                  ))}
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-text-primary hover:text-brand-gold transition-colors flex flex-col gap-1.5 items-end group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`h-[2px] bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </button>
          </div>

          {/* Expandable Mobile Content */}
          <div className={`md:hidden flex flex-col transition-all duration-500 ease-expo ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
          }`}>
            <div className="h-[1px] w-full bg-text-primary/5 mb-3"></div>
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <NavLink key={link.name} link={link} mobile />
              ))}
            </div>
            
            <div className="flex flex-col gap-2.5 mt-5">
              <a
                href="#reservas"
                onClick={(e) => handleLinkClick(e, "#reservas")}
                className="btn-premium btn-primary w-full group gap-3 flex items-center justify-center"
              >
                <Calendar size={16} className="shrink-0" />
                <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden justify-center">
                    {"Reservar Mesa".split("").map((char, i) => (
                      <span key={i} className="relative inline-flex flex-col overflow-hidden h-full">
                        <span className="inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full translate-y-[0.05em]" style={{ transitionDelay: `${i * 20}ms` }}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                        <span className="absolute top-full left-0 inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full translate-y-[0.05em] text-black" style={{ transitionDelay: `${i * 20}ms` }}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      </span>
                    ))}
                  </span>
              </a>

              <a
                href="tel:+34945025926"
                className="btn-premium btn-outline w-full group gap-3 flex items-center justify-center"
              >
                <Phone size={16} className="shrink-0" />
                <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden justify-center">
                    {"Llamar ahora".split("").map((char, i) => (
                      <span key={i} className="relative inline-flex flex-col overflow-hidden h-full">
                        <span className="inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full translate-y-[0.05em]" style={{ transitionDelay: `${i * 20}ms` }}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                        <span className="absolute top-full left-0 inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full translate-y-[0.05em] text-black" style={{ transitionDelay: `${i * 20}ms` }}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      </span>
                    ))}
                  </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
