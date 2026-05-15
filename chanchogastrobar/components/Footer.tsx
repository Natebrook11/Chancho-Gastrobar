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
    <footer ref={footerRef} id="contacto" className="relative bg-bg-dark text-text-inverse pt-24 md:pt-40 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Google Maps Section - Integrated */}
        <div className="footer-section mb-32 overflow-hidden rounded-2xl border border-white/5 group relative h-[300px] md:h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.32623348123!2d-2.684123023423!3d42.844832971151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc25000000000%3A0x0!2sPortal%20de%20Castilla%2C%2038%2C%2001007%20Vitoria-Gasteiz!5e0!3m2!1ses!2ses!4v1715000000000!5m2!1ses!2ses" 
            className="w-full h-full border-0 transition-all duration-1000 ease-expo" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Map Overlay to prevent scroll hijacking */}
          <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300"></div>
          <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Column 1: Brand & Socials (5/12) */}
          <div className="footer-section lg:col-span-5 flex flex-col gap-10">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <div>
              <h3 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6 leading-none">
                Donde el fuego <br /> <span className="text-brand-gold">tiene alma</span>
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-60 max-w-md">
                Sabor Andino y técnicas ancestrales en el corazón de <span className="text-white border-b border-brand-gold/30">Vitoria-Gasteiz</span>. Una experiencia honesta alrededor de la brasa.
              </p>
            </div>
            
            <div className="flex gap-4 select-none">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-text-inverse bg-white/5 hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-500 hover:-translate-y-2"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-text-inverse bg-white/5 hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-500 hover:-translate-y-2"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact & Hours (7/12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="footer-section space-y-10">
              <span className="text-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.2em] block">[ Encuéntranos ]</span>
              <ul className="space-y-8 font-sans text-base md:text-lg leading-relaxed">
                <li className="flex items-start gap-4 group">
                  <MapPin size={24} className="shrink-0 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">Portal de Castilla, 38<br/>01007 Vitoria-Gasteiz</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={24} className="shrink-0 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity font-bold">945 02 59 26</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Mail size={24} className="shrink-0 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity border-b border-white/10">hola@elchancho.com</span>
                </li>
              </ul>
            </div>

            <div className="footer-section space-y-10">
              <span className="text-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.2em] block">[ El Servicio ]</span>
              <ul className="space-y-6 font-sans text-base md:text-lg leading-relaxed">
                <li className="flex justify-between border-b border-white/5 pb-3 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">Lunes</span>
                  <span className="text-brand-gold font-bold">12:00 - 23:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-3 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">Mar, Mié y Dom</span>
                  <span className="text-brand-gold font-bold">12:00 - 17:00</span>
                </li>
                <li className="flex justify-between group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">Jue, Vie y Sáb</span>
                  <span className="text-brand-gold font-bold">12:00 - 00:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Brand Bar */}
        <div className="footer-legal pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 mb-20">
          <div className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="w-10 h-10 relative grayscale invert">
              <Image src="/assets/Logo-Llama.svg" alt="Llama" fill className="object-contain" />
            </div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em]">
              © 2026 El Chancho Gastrobar <span className="mx-3 text-brand-gold">|</span> Vitoria-Gasteiz
            </p>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Cookies</a>
          </div>
        </div>

        {/* Massive Logo Section */}
        <div className="mt-20 md:mt-32 -mb-8 overflow-hidden footer-massive-text select-none pointer-events-none">
          <h2 className="text-[15vw] md:text-[18.5vw] font-black uppercase text-center leading-[0.8] tracking-tighter text-white opacity-5 select-none">
            EL CHANCHO
          </h2>
        </div>
      </div>
    </footer>
  );
}
