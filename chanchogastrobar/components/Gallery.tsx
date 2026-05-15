"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/assets/Plato.webp", alt: "Atún Rojo Balfegó", caption: "Atún Rojo Balfegó", category: "Producto" },
  { src: "/assets/Plato-2.webp", alt: "Guacamole con Burrata", caption: "Guacamole & Burrata", category: "Fusión" },
  { src: "/assets/Plato-3.webp", alt: "Kamado en acción", caption: "El Corazón de la Cocina", category: "Proceso" },
  { src: "/assets/Plato-4.webp", alt: "Pulpo al Kamado", caption: "Pulpo a las Brasas", category: "Especialidad" },
  { src: "/assets/PLato-5.webp", alt: "Zamburiñas premium", caption: "Zamburiñas del Cantábrico", category: "Mar" },
  { src: "/assets/Plato-6.webp", alt: "Patatas Bravas", caption: "Bravas al Chipotle", category: "Tradición" },
  { src: "/assets/Foto-hero.webp", alt: "Ambiente El Chancho", caption: "Atmósfera & Diseño", category: "Local" },
  { src: "/assets/Plato.webp", alt: "Picaña Madurada", caption: "Carnes Maduradas", category: "Brasas" },
  { src: "/assets/Plato-2.webp", alt: "Tarta de Queso", caption: "Dulzura Artesana", category: "Postres" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useGSAP(() => {
    const images = gsap.utils.toArray(".gallery-item");
    
    images.forEach((img: any, i) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: (i % 3) * 0.1,
      });

      const inner = img.querySelector(".inner-img");
      if (inner) {
        gsap.fromTo(inner, 
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
    }
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextImage();
    if (touchStart - touchEnd < -75) prevImage();
  };

  return (
    <section id="galeria" ref={sectionRef} className="py-24 md:py-40 bg-bg-primary px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="h-[1px] w-12 bg-brand-gold mb-6"></div>
            <h2 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-text-primary uppercase tracking-tighter leading-[0.85]">
              Arte en <br />
              <span className="text-brand-gold">la mesa</span>
            </h2>
          </div>
          <div className="md:mb-4">
            <p className="text-text-secondary font-sans text-sm md:text-base tracking-[0.2em] uppercase font-bold">
              [ Galería Visual ]
            </p>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Row 1 */}
          <div onClick={() => setSelectedIdx(0)} className="gallery-item md:col-span-7 aspect-[16/10] relative overflow-hidden border border-text-primary/5 group cursor-pointer rounded-2xl">
            <div className="inner-img absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-1000 ease-expo group-hover:scale-110">
              <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{photos[0].category}</span>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl uppercase tracking-tight">{photos[0].caption}</h4>
            </div>
          </div>

          <div onClick={() => setSelectedIdx(1)} className="gallery-item md:col-span-5 aspect-[4/5] relative overflow-hidden border border-text-primary/5 group cursor-pointer md:mt-12 rounded-2xl">
            <div className="inner-img absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-1000 ease-expo group-hover:scale-110">
              <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{photos[1].category}</span>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl uppercase tracking-tight">{photos[1].caption}</h4>
            </div>
          </div>

          {/* Row 2 */}
          <div onClick={() => setSelectedIdx(2)} className="gallery-item md:col-span-4 aspect-square relative overflow-hidden border border-text-primary/5 group cursor-pointer rounded-2xl">
            <div className="inner-img absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-1000 ease-expo group-hover:scale-110">
              <Image src={photos[2].src} alt={photos[2].alt} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{photos[2].category}</span>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl uppercase tracking-tight">{photos[2].caption}</h4>
            </div>
          </div>

          <div onClick={() => setSelectedIdx(3)} className="gallery-item md:col-span-8 aspect-[16/9] relative overflow-hidden border border-text-primary/5 group cursor-pointer rounded-2xl">
            <div className="inner-img absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-1000 ease-expo group-hover:scale-110">
              <Image src={photos[3].src} alt={photos[3].alt} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{photos[3].category}</span>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl uppercase tracking-tight">{photos[3].caption}</h4>
            </div>
          </div>

          {/* Row 3 */}
          <div onClick={() => setSelectedIdx(6)} className="gallery-item md:col-span-5 aspect-square relative overflow-hidden border border-text-primary/5 group cursor-pointer rounded-2xl">
            <div className="inner-img absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-1000 ease-expo group-hover:scale-110">
              <Image src={photos[6].src} alt={photos[6].alt} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{photos[6].category}</span>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl uppercase tracking-tight">{photos[6].caption}</h4>
            </div>
          </div>

          <div onClick={() => setSelectedIdx(4)} className="gallery-item md:col-span-7 aspect-[4/3] relative overflow-hidden border border-text-primary/5 group cursor-pointer md:mt-12 rounded-2xl">
            <div className="inner-img absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-1000 ease-expo group-hover:scale-110">
              <Image src={photos[4].src} alt={photos[4].alt} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:from-black/60">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 md:mb-2">{photos[4].category}</span>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl uppercase tracking-tight">{photos[4].caption}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-bg-dark/60 backdrop-blur-[60px] flex items-center justify-center p-4 md:p-12 overflow-hidden"
          onClick={(e) => e.target === e.currentTarget && setSelectedIdx(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-text-inverse p-4 hover:bg-white/10 rounded-full transition-all duration-500 hover:rotate-90 z-[110] border border-white/10"
          >
            <X size={24} className="md:w-8 md:h-8" />
          </button>
          
          {/* Navigation Controls */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-inverse p-4 hover:bg-white/10 rounded-full transition-all duration-300 z-[110] border border-white/5 opacity-40 hover:opacity-100"
          >
            <ChevronLeft size={32} className="md:w-12 md:h-12" />
          </button>
 
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-inverse p-4 hover:bg-white/10 rounded-full transition-all duration-300 z-[110] border border-white/5 opacity-40 hover:opacity-100"
          >
            <ChevronRight size={32} className="md:w-12 md:h-12" />
          </button>
 
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div key={selectedIdx} className="relative w-full h-[60vh] md:h-[80vh] animate-in fade-in zoom-in-95 slide-in-from-right-8 duration-700 ease-expo">
              <Image 
                src={photos[selectedIdx].src} 
                alt={photos[selectedIdx].alt} 
                fill 
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
              
              {/* Lightbox Caption */}
              <div className="absolute -bottom-16 left-0 right-0 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold block mb-1">
                  {photos[selectedIdx].category}
                </span>
                <h3 className="text-white font-sans text-xl md:text-2xl uppercase tracking-tight font-bold">
                  {photos[selectedIdx].caption}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
