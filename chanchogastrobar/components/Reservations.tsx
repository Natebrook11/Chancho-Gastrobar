"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, ExternalLink } from "lucide-react";

export default function Reservations() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".res-animate", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1.8,
      stagger: 0.15,
      ease: "expo.out",
    });
  }, { scope: sectionRef });

  return (
    <section id="reservas" ref={sectionRef} className="relative bg-[#1A110A] text-text-inverse overflow-hidden min-h-dvh flex items-center py-24 border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.3]">
        <Image 
          src="/assets/Foto-interior.webp" 
          alt="Ambiente" 
          fill 
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A110A] via-transparent to-[#1A110A]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="res-animate h-[1px] w-24 bg-brand-gold mx-auto mb-12"></div>
        
        <h2 className="res-animate font-sans font-black text-5xl md:text-9xl uppercase tracking-tighter leading-[0.85] mb-8">
          Reserva tu <br />
          <span className="text-brand-gold">Mesa</span>
        </h2>
        
        <p className="res-animate font-sans text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-16 leading-relaxed">
          Asegura tu lugar en el corazón de Vitoria-Gasteiz. Disfruta de nuestra cocina honesta, fuego y brasas en un ambiente inigualable.
        </p>

        <div className="res-animate flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Call Button */}
          <a 
            href="tel:+34945025926" 
            className="btn-premium btn-outline w-full md:w-auto gap-4 group flex items-center justify-center"
          >
            <Phone size={16} />
            <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden">
              {"Llamar Ahora".split("").map((char, i) => (
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
 
          {/* Reserve Link Button */}
          <a 
            href="https://www.google.com/maps/reserve/v/dine/c/LYFhsDSmgUs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-premium btn-primary w-full md:w-auto gap-4 group flex items-center justify-center"
          >
            <ExternalLink size={16} />
            <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden">
              {"Reservar Online".split("").map((char, i) => (
                <span key={i} className="relative inline-flex flex-col overflow-hidden h-full">
                  <span className="inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full" style={{ transitionDelay: `${i * 20}ms` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                  <span className="absolute top-full left-0 inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-full text-black" style={{ transitionDelay: `${i * 20}ms` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              ))}
            </span>
          </a>
        </div>

        <div className="res-animate mt-24 flex items-center justify-center gap-4 opacity-20">
          <div className="w-10 h-10 relative invert grayscale">
            <Image src="/assets/Logo-Llama.svg" alt="Llama" fill className="object-contain" />
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold">El Chancho Gastrobar</span>
        </div>
      </div>
    </section>
  );
}
