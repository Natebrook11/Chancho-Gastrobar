"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, Trophy, Award, StarHalf, Quote } from "lucide-react";

const reviews = [
  {
    name: "Noticias de Álava",
    rating: 5,
    source: "Prensa / Gastronomía",
    comment: "Una auténtica caja de sorpresas que pone a Vitoria en el mapa gastronómico. El Chef Boris y Nadia fusionan la mejor cocina casera con toques internacionales y carnes de gran calidad.",
    url: "https://www.noticiasdealava.eus/gastronomia/2025/06/23/restaurante-menu-sorprendente-vitoria-sabores-internacionales-platos-creativos-el-chancho-gastrobar-9797028.html"
  },
  {
    name: "Javier M.",
    rating: 5,
    source: "Google Reviews",
    comment: "La mejor picaña que he probado jamás. El toque del kamado es único y el ambiente es simplemente espectacular.",
  },
  {
    name: "Elena S.",
    rating: 5,
    source: "TripAdvisor",
    comment: "Un rincón de los Andes en el centro de Vitoria. El ceviche es obligatorio y el servicio es de diez.",
  },
  {
    name: "Mikel A.",
    rating: 4.5,
    source: "Google Reviews",
    comment: "Atención impecable y un diseño brutalista que te atrapa. El taco de chancho pibil es de otro mundo.",
  }
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".review-card", {
      scrollTrigger: {
        trigger: ".review-grid",
        start: "top 80%",
      },
      x: -40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "expo.out",
    });
  }, { scope: sectionRef });

  return (
    <section id="reviews" ref={sectionRef} className="py-24 md:py-40 bg-bg-primary px-6 md:px-12 border-t border-text-primary/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Reviews Section */}
        <div className="pt-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.2em] block mb-4">
                [ Testimonios ]
              </span>
              <h2 className="font-sans font-black text-5xl md:text-8xl text-text-primary uppercase tracking-tighter leading-[0.85]">
                Lo que dicen <br />
                <span className="text-brand-gold">de nosotros</span>
              </h2>
            </div>
          </div>

          <div className="review-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
            {reviews.map((review, i) => (
              <div key={i} className="review-card relative">
                {review.url ? (
                  <a 
                    href={review.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block p-10 md:p-14 bg-bg-dark text-text-inverse rounded-sm border border-white/5 hover:border-brand-gold/30 transition-all duration-700 relative overflow-hidden"
                  >
                    <Quote className="absolute -top-4 -left-4 text-brand-gold/10 w-24 h-24 group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="relative z-10 space-y-8">
                      <div className="space-y-6">
                        <div className="flex gap-1 text-brand-gold">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                        </div>
                        
                        <p className="font-sans text-2xl md:text-4xl text-text-inverse leading-tight uppercase tracking-tighter font-black">
                          "{review.comment}"
                        </p>
                      </div>

                      <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <h4 className="font-sans font-bold text-sm uppercase tracking-tight text-brand-gold">
                            {review.name}
                          </h4>
                          <p className="text-[10px] uppercase tracking-widest text-text-inverse/40 font-bold">
                            {review.source}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 group-hover:text-brand-gold transition-colors">
                          <span className="text-[10px] uppercase font-bold tracking-widest">Leer Noticia</span>
                          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                            <Award size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="p-10 md:p-14 bg-bg-secondary border border-text-primary/5 rounded-sm relative overflow-hidden h-full">
                    <Quote className="absolute -top-4 -left-4 text-brand-gold/5 w-24 h-24" />
                    
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                      <div className="space-y-6">
                        <div className="flex gap-1 text-brand-gold">
                          {[...Array(Math.floor(review.rating))].map((_, idx) => (
                            <Star key={idx} size={16} fill="currentColor" />
                          ))}
                          {review.rating % 1 !== 0 && <StarHalf size={16} fill="currentColor" />}
                        </div>
                        
                        <p className="font-sans text-xl md:text-2xl text-text-primary leading-relaxed italic">
                          "{review.comment}"
                        </p>
                      </div>

                      <div className="pt-8 border-t border-text-primary/5 flex items-center justify-between">
                        <div>
                          <h4 className="font-sans font-bold text-sm uppercase tracking-tight text-text-primary">
                            {review.name}
                          </h4>
                          <p className="text-[10px] uppercase tracking-widest text-text-secondary/40 font-bold">
                            {review.source}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-[1px] bg-brand-gold/30"></div>
                          <span className="text-[10px] font-black text-brand-gold">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
