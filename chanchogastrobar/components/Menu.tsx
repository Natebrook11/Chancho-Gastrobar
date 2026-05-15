"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { 
  Wheat, 
  Milk, 
  Fish, 
  Flame, 
  Egg, 
  Nut, 
  Waves,
  X
} from "lucide-react";
import { menuData } from "@/data/menu";

const allergenConfig: Record<string, { icon: any, color: string, bg: string }> = {
  "Gluten": { icon: Wheat, color: "#B58B5D", bg: "rgba(181, 139, 93, 0.1)" },
  "Lácteos": { icon: Milk, color: "#8B9DA9", bg: "rgba(139, 157, 169, 0.1)" },
  "Frutos Secos": { icon: Nut, color: "#8D6E63", bg: "rgba(141, 110, 99, 0.1)" },
  "Pescado": { icon: Fish, color: "#78909C", bg: "rgba(120, 144, 156, 0.1)" },
  "Marisco": { icon: Waves, color: "#A1887F", bg: "rgba(161, 136, 127, 0.1)" },
  "Huevo": { icon: Egg, color: "#D4B483", bg: "rgba(212, 180, 131, 0.1)" },
  "Picante": { icon: Flame, color: "#BC5D58", bg: "rgba(188, 93, 88, 0.1)" },
};

const allergensList = Object.keys(allergenConfig);

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedDish, setExpandedDish] = useState<string | null>(null);
  const [activeExclusions, setActiveExclusions] = useState<string[]>([]);

  useGSAP(() => {
    const categories = gsap.utils.toArray(".menu-category-block");
    
    categories.forEach((cat: any) => {
      gsap.from(cat, {
        scrollTrigger: {
          trigger: cat,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Stagger items within the category
      const items = cat.querySelectorAll(".menu-item-row");
      gsap.from(items, {
        scrollTrigger: {
          trigger: cat,
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    });
  }, { scope: sectionRef });

  const toggleDish = (id: string) => {
    setExpandedDish(expandedDish === id ? null : id);
  };

  const toggleExclusion = (allergen: string) => {
    setActiveExclusions(prev => 
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  const isDishSafe = (dishAllergens: string[]) => {
    return !activeExclusions.some(excluded => dishAllergens.includes(excluded));
  };

  return (
    <section id="carta" ref={sectionRef} className="py-24 md:py-40 bg-bg-primary px-6 md:px-12 border-t border-text-primary/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="h-[1px] w-12 bg-brand-gold mb-8"></div>
            <h2 className="font-sans font-black text-6xl md:text-9xl lg:text-[11rem] text-text-primary uppercase tracking-tighter leading-[0.8] text-balance">
              La <br />
              <span className="text-brand-gold">Carta</span>
            </h2>
          </div>
          <div className="md:max-w-xs md:mb-6">
            <p className="text-text-secondary font-sans text-lg md:text-xl leading-relaxed italic">
              "Fuego, producto local y una pizca de alma andina para compartir en el centro de Vitoria."
            </p>
          </div>
        </div>

        {/* Allergen Filter Bar */}
        <div className="mb-24 md:mb-32">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary/40 mb-6">[ Filtrar sin alérgenos ]</p>
          <div className="flex flex-wrap gap-3">
            {allergensList.map(allergen => {
              const config = allergenConfig[allergen];
              const Icon = config.icon;
              const isActive = activeExclusions.includes(allergen);

              return (
                <button
                  key={allergen}
                  onClick={() => toggleExclusion(allergen)}
                  className={`px-6 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? "bg-text-primary border-text-primary text-text-inverse shadow-xl"
                      : "border-text-primary/10 text-text-primary/60 hover:border-text-primary/30"
                  }`}
                  style={isActive ? { backgroundColor: config.color, borderColor: config.color, color: '#fff' } : {}}
                >
                  <Icon size={14} />
                  Sin {allergen}
                </button>
              );
            })}
            {activeExclusions.length > 0 && (
              <button 
                onClick={() => setActiveExclusions([])}
                className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold flex items-center gap-2 hover:opacity-70"
              >
                <X size={14} />
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Menu Content - Editorial Layout */}
        <div className="space-y-24 md:space-y-32">
          {menuData.map((category, idx) => {
            const safeItems = category.items.filter(item => isDishSafe(item.allergens));
            if (safeItems.length === 0) return null;

            return (
              <div key={idx} className="menu-category-block grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                {/* Category Sidebar */}
                <div className="md:col-span-5 lg:col-span-4 relative">
                  <div className="sticky top-[50vh] -translate-y-1/2 py-4">
                    <span className="text-brand-gold font-sans font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
                      [ 0{idx + 1} ]
                    </span>
                    <h3 className="font-sans font-black text-3xl md:text-5xl lg:text-7xl text-text-primary uppercase tracking-tighter leading-[0.9] whitespace-normal">
                      {category.category}
                    </h3>
                    <div className="h-[1px] w-12 bg-brand-gold mt-6"></div>
                  </div>
                </div>

                {/* Items List */}
                <div className="md:col-span-7 lg:col-span-8">
                  <div className="grid grid-cols-1 gap-y-10 md:gap-y-12">
                    {safeItems.map((item, itemIdx) => {
                      const dishId = `${idx}-${itemIdx}`;
                      const isExpanded = expandedDish === dishId;

                      return (
                        <div key={itemIdx} className="menu-item-row group border-b border-text-primary/5 pb-8 last:border-0">
                          <button 
                            onClick={() => toggleDish(dishId)}
                            className="w-full text-left flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 mb-4"
                          >
                            <div className="max-w-xl">
                              <h4 className="font-sans font-bold text-xl md:text-2xl text-text-primary uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                                {item.name}
                              </h4>
                              {/* Allergen Pills */}
                              <div className="flex flex-wrap gap-2 mt-4">
                                {item.allergens.map(a => {
                                  const config = allergenConfig[a];
                                  const Icon = config.icon;
                                  return (
                                    <span 
                                      key={a} 
                                      className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full flex items-center gap-1.5 border"
                                      style={{ color: config.color, borderColor: `${config.color}20`, backgroundColor: config.bg }}
                                    >
                                      <Icon size={10} />
                                      {a}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="hidden md:block h-[1px] flex-grow bg-text-primary/10 mx-4 opacity-50"></div>
                            <span className="font-sans font-medium text-base md:text-lg text-brand-gold whitespace-nowrap text-right">
                              {item.price}
                            </span>
                          </button>
                          
                          {item.description && (
                            <p className="text-text-secondary/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-4">
                              {item.description}
                            </p>
                          )}

                          {/* Interactive Image Reveal */}
                          <div 
                            className={`grid transition-all duration-1000 ease-expo ${
                              isExpanded ? "grid-rows-[1fr] opacity-100 mt-10" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className={`relative w-full max-w-md aspect-square rounded-sm overflow-hidden border border-text-primary/5 transition-transform duration-1000 ease-expo ${isExpanded ? "scale-100" : "scale-95"}`}>
                                <Image src={item.img || "/assets/Plato.webp"} alt={item.name} fill className="object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Detail */}
        <div className="mt-40 md:mt-60 pt-20 border-t border-text-primary/10 flex flex-col items-center text-center">
          <p className="font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-text-secondary/30">
            Precios con IVA incluido · Producto de temporada
          </p>
        </div>
      </div>
    </section>
  );
}
