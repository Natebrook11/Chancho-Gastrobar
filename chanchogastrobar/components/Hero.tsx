"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { UtensilsCrossed, CalendarDays } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    // Entrance animation for text
    gsap.from(".hero-content-reveal", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.2,
      delay: 3.8,
    });

    // Parallax effect on the background image
    gsap.to(imageRef.current, {
      yPercent: 30,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section 
      id="inicio"
      className="relative h-dvh w-full flex items-center justify-center overflow-hidden bg-bg-dark m-0 p-0"
      style={{ marginTop: 0, paddingTop: 0 }}
      ref={container}
    >
      {/* Background - Full Screen */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/assets/Foto-hero.webp" 
          alt="El Chancho Gastrobar" 
          fill 
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <div className="overflow-visible py-4">
          <h1 className="hero-content-reveal font-sans text-5xl md:text-8xl lg:text-[10rem] text-text-inverse font-black uppercase leading-[1.1] md:leading-[0.85] tracking-tighter drop-shadow-2xl select-none">
            <span className="block md:hidden mb-2">Cocina</span>
            <span className="block md:hidden mb-2">con</span>
            <span className="hidden md:block mb-2">Cocina con</span>
            <span className="block text-brand-gold">honestidad</span>
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="hero-content-reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <a 
            href="#carta" 
            onClick={(e) => handleLinkClick(e, "#carta")}
            className="btn-premium btn-primary w-[80%] sm:w-auto group gap-3 flex items-center justify-center"
          >
            <UtensilsCrossed size={16} className="shrink-0 transition-transform duration-500 group-hover:rotate-12" />
            <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden">
              {"Ver Carta".split("").map((char, i) => (
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
            href="#reservas" 
            onClick={(e) => handleLinkClick(e, "#reservas")}
            className="btn-premium btn-outline w-[80%] sm:w-auto group gap-3 flex items-center justify-center"
          >
            <CalendarDays size={16} className="shrink-0 transition-transform duration-500 group-hover:scale-110" />
            <span className="relative flex items-center h-[1.2em] leading-none overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
