export interface MenuItem {
  name: string;
  description: string;
  price: string;
  img?: string;
  allergens: string[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Ensaladas y fríos",
    items: [
      { 
        name: "Ensalada de burrata, tomata y atún rojo balfego.", 
        description: "Con nuestra vinagreta de chipotle, atún ligeramente sellado al kamado, tomate de campo y untuosa burrata", 
        price: "Media ración: 14,00 € | Ración: 24,50 €", 
        img: "/assets/Plato.webp", 
        allergens: ["Pescado", "Lácteos"] 
      },
      { 
        name: "Guacamole con burrata italiana", 
        description: "Nuestra receta de guacamole, con burrata italiana y totopos de maíz fríos para dippear", 
        price: "Media ración: 8,00 € | Ración: 14,90 €", 
        img: "/assets/Plato-2.webp", 
        allergens: ["Lácteos"] 
      },
      { 
        name: "Escalibada", 
        description: "Pimientos y berenjenas asadas al fuego con un toque de aceite de oliva virgen extra", 
        price: "12,50 €", 
        img: "/assets/Plato-3.webp", 
        allergens: [] 
      },
      { 
        name: "Ensalada de tomata a la brasa con puerro asado", 
        description: "Tomates de campo pasados por el kamado con la suavidad del puerro confitado", 
        price: "14,00 €", 
        img: "/assets/Plato-4.webp", 
        allergens: [] 
      },
      { 
        name: "Berenjena asada con almagrote", 
        description: "Berenjena tierna con nuestra versión del tradicional paté de queso canario", 
        price: "13,80 €", 
        img: "/assets/Plato-5.webp", 
        allergens: ["Lácteos"] 
      }
    ]
  },
  {
    category: "Ceviches",
    items: [
      { 
        name: "Ceviche de lubina y rabas", 
        description: "Con nuestra leche de tigre de mango, boniato, plátano macho crujiente y cebolla morada. El plato estrella recomendado por la crítica.", 
        price: "19,80 €", 
        img: "/assets/Plato-3.webp", 
        allergens: ["Pescado", "Marisco"] 
      }
    ]
  },
  {
    category: "Entrantes calientes",
    items: [
      { 
        name: "Pulpo al kamado", 
        description: "Pulpo cocido en casa, con un toque de las brasas de nuestro kamado, servido con panaderas y una mayonesa ligera de pimentón De la Vera", 
        price: "Media ración: 16,00 € | Ración: 28,00 €", 
        img: "/assets/Plato-4.webp", 
        allergens: ["Marisco", "Huevo"] 
      },
      { 
        name: "Zamburiñas al kamado", 
        description: "Con una suave mayonesa encevichada con toques dulces y huevas de salmón.", 
        price: "Media ración: 11,00 € | Ración: 22,00 €", 
        img: "/assets/PLato-5.webp", 
        allergens: ["Marisco", "Pescado"] 
      },
      { 
        name: "Wok de shitakes", 
        description: "Salteado de setas shitake al fuego con vegetales de temporada y toque oriental", 
        price: "14,50 €", 
        img: "/assets/Plato.webp", 
        allergens: [] 
      }
    ]
  },
  {
    category: "Fritos 100% caseros",
    items: [
      { name: "Croquetas de jamón ibérico (5ud)", description: "Croquetas caseras elaboradas con jamón ibérico y bechamel cremosa.", price: "9,00 €", img: "/assets/Plato-2.webp", allergens: ["Gluten", "Lácteos"] },
      { name: "Croquetas de hongos y shitakes (5ud)", description: "Elaboradas con una mezcla de setas silvestres y shitakes seleccionados.", price: "9,00 €", img: "/assets/Plato.webp", allergens: ["Gluten", "Lácteos"] },
      { name: "Croquetas de boletus (5ud)", description: "Cremosas croquetas de boletus edulis con un sabor intenso a bosque.", price: "9,50 €", img: "/assets/Plato-3.webp", allergens: ["Gluten", "Lácteos"] },
      { 
        name: "Tempura japonésa de vegetales", 
        description: "Vegetales de temporada en tempura ligera con nuestra salsa fresca.", 
        price: "12,00 €", 
        img: "/assets/Plato-3.webp", 
        allergens: ["Gluten"] 
      },
      { 
        name: "Tempura japonesa de vegetales y gambones", 
        description: "Gambones y vegetales frescos en tempura con un toque mexicano.", 
        price: "16,80 €", 
        img: "/assets/Plato-4.webp", 
        allergens: ["Gluten", "Marisco"] 
      },
      { 
        name: "Pollo frito al estilo coreano", 
        description: "Pollo crujiente con mayonesa de jalapeño tatemado.", 
        price: "9,00 €", 
        img: "/assets/Plato-5.webp", 
        allergens: ["Gluten", "Huevo"] 
      },
      { 
        name: "Patatas bravas al chipotle", 
        description: "Patatas caseras con salsa brava de chipotle y ali oli de lima.", 
        price: "9,00 €", 
        img: "/assets/Plato-6.webp", 
        allergens: ["Picante"] 
      },
      { 
        name: "Rabas con harina de garbanzos", 
        description: "Calamares fritos con harina de garbanzo, aptas para celíacos.", 
        price: "16,50 €", 
        img: "/assets/Plato.webp", 
        allergens: ["Marisco"] 
      }
    ]
  },
  {
    category: "Los tacos (2ud)",
    items: [
      { 
        name: "Taco de pícaña a la brasa, guacamole y pecorino", 
        description: "Corte de picaña al carbón con guacamole y queso pecorino.", 
        price: "16,00 €", 
        img: "/assets/Plato.webp", 
        allergens: ["Lácteos"] 
      },
      { 
        name: "Nuestro taco de chancho pibil", 
        description: "Cerdo marinado en achiote cocinado a fuego lento con cebolla encurtida.", 
        price: "9,80 €", 
        img: "/assets/Plato-2.webp", 
        allergens: ["Gluten"] 
      },
      { 
        name: "Taco vegetariano de temporada", 
        description: "Opción vegetal con productos frescos del mercado según temporada.", 
        price: "9,00 €", 
        img: "/assets/Plato-3.webp", 
        allergens: [] 
      }
    ]
  },
  {
    category: "Arroces (Bajo reserva - Mínimo 2 personas)",
    items: [
      { name: "Arroz negro de txipirones, ali oli y lima", description: "Arroz meloso con tinta de calamar, txipirones frescos y ali oli.", price: "Consultar precio", img: "/assets/Plato-4.webp", allergens: ["Marisco", "Pescado", "Huevo"] },
      { name: "Arroz de vieiras y langostinos", description: "Arroz marinero con vieiras selladas y langostinos de calidad.", price: "Consultar precio", img: "/assets/Plato-5.webp", allergens: ["Marisco"] },
      { name: "Arroz seco de picaña de vaca madurada", description: "Arroz con el sabor intenso de nuestra carne madurada al kamado.", price: "Consultar precio", img: "/assets/Plato-6.webp", allergens: [] },
      { name: "Arroz de pulpo", description: "Arroz con pulpo al estilo de la casa y toques de pimentón.", price: "Consultar precio", img: "/assets/Plato.webp", allergens: ["Marisco"] },
      { name: "Arroz ibérico", description: "Arroz con cortes de cerdo ibérico y verduras de temporada.", price: "Consultar precio", img: "/assets/Plato-2.webp", allergens: [] },
      { name: "Paella de marisco", description: "Receta tradicional con selección de mariscos frescos del día.", price: "Consultar precio", img: "/assets/Plato-3.webp", allergens: ["Marisco", "Pescado"] },
      { name: "Paella de verduras", description: "Arroz con verduras de la huerta alavesa.", price: "Consultar precio", img: "/assets/Plato-4.webp", allergens: [] },
      { name: "Arroz con bogabante", description: "Arroz caldoso con bogavante entero y sofrito tradicional.", price: "Consultar precio", img: "/assets/Plato-5.webp", allergens: ["Marisco", "Pescado"] },
      { name: "Arroz con rape y almejas", description: "Arroz meloso con medallones de rape y almejas finas.", price: "Consultar precio", img: "/assets/Plato-6.webp", allergens: ["Marisco", "Pescado"] }
    ]
  },
  {
    category: "Kamado (nuestras brasas japonesas)",
    items: [
      { 
        name: "Pícaña madurada de vaca (300g)", 
        description: "Carne madurada cocinada al kamado con patatas fritas y chimichurri.", 
        price: "24,50 €", 
        img: "/assets/Plato.webp", 
        allergens: [] 
      },
      { 
        name: "Dorada a la brasa (pieza entera)", 
        description: "Dorada entera asada al carbón con guarnición de patatas panaderas.", 
        price: "28,00 €", 
        img: "/assets/Plato-2.webp", 
        allergens: ["Pescado"] 
      },
      { 
        name: "Pícaña de angus (300g)", 
        description: "Corte premium de angus a la brasa con guarnición.", 
        price: "29,00 €", 
        img: "/assets/Plato-3.webp", 
        allergens: [] 
      },
      { 
        name: "Pícaña de novillo argentino de importación (300g)", 
        description: "Carne de novillo argentino seleccionada y asada al kamado.", 
        price: "34,50 €", 
        img: "/assets/Plato-4.webp", 
        allergens: [] 
      },
      { 
        name: "Degustación de nuestras picañas (600g)", 
        description: "Selección de nuestras mejores carnes para compartir.", 
        price: "39,50 €", 
        img: "/assets/Plato-5.webp", 
        allergens: [] 
      }
    ]
  },
  {
    category: "Postres 100% caseros",
    items: [
      { 
        name: "TARTA DE QUESO ITZIAR", 
        description: "Nuestra famosa tarta de queso artesanal de textura fluida.", 
        price: "6,20 €", 
        img: "/assets/Plato-5.webp", 
        allergens: ["Lácteos", "Gluten", "Huevo"] 
      },
      { 
        name: "POSTRE DEL DIA", 
        description: "Elaboración casera del día preparada por Nadia.", 
        price: "6,00 €", 
        img: "/assets/Plato-6.webp", 
        allergens: [] 
      },
      { 
        name: "Torrija lemon pie con merengue", 
        description: "Torrija caramelizada con crema de limón y merengue tostado.", 
        price: "6,50 €", 
        img: "/assets/Plato.webp", 
        allergens: ["Gluten", "Lácteos", "Huevo"] 
      }
    ]
  }
];
