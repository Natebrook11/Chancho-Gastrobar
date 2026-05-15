"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Facebook = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Instagram = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".footer-section");
    
    sections.forEach((section: any) => {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });
    });

    gsap.from(".footer-legal", {
      opacity: 0,
      y: 30,
      duration: 1.8,
      delay: 0.3,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".footer-legal",
        start: "top 98%"
      }
    });

    gsap.from(".footer-massive-text", {
      y: 150,
      opacity: 0,
      duration: 2.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".footer-massive-text",
        start: "top 100%"
      }
    });

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} id="contacto" className="relative bg-bg-dark text-text-inverse pt-24 md:pt-40 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/10">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Superior Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-32 relative z-10">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer-section flex flex-col gap-8">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <p className="font-sans text-xl md:text-2xl leading-relaxed max-w-xs">
              Sabor Andino, Alma Rústica. Fuego, brasas y honestidad en <span className="text-brand-gold italic">Vitoria-Gasteiz</span>.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-inverse bg-white/5"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-inverse bg-white/5"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="footer-section space-y-8">
            <span className="text-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.2em] block">[ Localización ]</span>
            <ul className="space-y-6 font-sans text-base leading-relaxed opacity-70">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="shrink-0 text-brand-gold/60" />
                <span>Portal de Castilla, 38<br/>01007 Vitoria-Gasteiz</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="shrink-0 text-brand-gold/60" />
                <span>945 000 000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="shrink-0 text-brand-gold/60" />
                <span>hola@elchancho.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div className="footer-section space-y-8">
            <span className="text-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.2em] block">[ Servicio ]</span>
            <ul className="space-y-4 font-sans text-base leading-relaxed">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-50">Mar - Jue</span>
                <span className="text-brand-gold">13:30 - 23:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-50">Vie - Sáb</span>
                <span className="text-brand-gold">13:30 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-50">Domingo</span>
                <span className="text-brand-gold">13:30 - 16:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="footer-legal pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8 relative z-10 mb-20">
          <div className="flex items-center gap-4 cursor-default">
            <div className="w-8 h-8 relative opacity-20 grayscale invert">
              <Image src="/assets/Logo-Llama.svg" alt="Llama" fill className="object-contain" />
            </div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">
              © 2026 El Chancho Gastrobar <span className="mx-2 text-brand-gold">|</span> Sabor con Alma
            </p>
          </div>
        </div>

        {/* Massive Logo Section - Refined for Mobile */}
        <div className="mt-20 md:mt-32 -mb-8 overflow-hidden footer-massive-text select-none pointer-events-none">
          <h2 className="text-[15vw] md:text-[18.5vw] font-black uppercase text-center leading-[0.8] tracking-tighter text-white">
            EL CHANCHO
          </h2>
        </div>
      </div>
    </footer>
  );
}
