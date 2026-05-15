"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function History() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".history-reveal");
    
    elements.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="historia" ref={sectionRef} className="py-32 md:py-56 bg-bg-primary px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square opacity-[0.02] pointer-events-none">
        <Image 
          src="/assets/Logo-Llama.svg" 
          alt="" 
          fill 
          className="object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="history-reveal mb-8">
           <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"></div>
           <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
             Esencia
           </span>
        </div>

        <h2 className="history-reveal font-sans font-black text-5xl md:text-8xl text-text-primary uppercase tracking-tighter leading-[0.9] mb-12 text-balance">
          Fuego, origen <br />
          <span className="text-brand-gold">& contraste</span>
        </h2>

        <div className="history-reveal max-w-2xl">
          <p className="text-text-secondary leading-relaxed font-sans text-xl md:text-2xl font-light tracking-tight italic">
            "Unimos la fuerza de las brasas con la elegancia andina. Producto local, técnicas globales y una honestidad brutal. Sin artificios, solo sabor."
          </p>
        </div>

        <div className="history-reveal mt-16 flex items-center gap-6">
          <div className="h-[1px] w-8 bg-text-primary/20"></div>
          <div className="relative w-12 h-12 opacity-40">
            <Image 
              src="/assets/Logo-Llama.svg" 
              alt="Sello" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="h-[1px] w-8 bg-text-primary/20"></div>
        </div>
      </div>
    </section>
  );
}
