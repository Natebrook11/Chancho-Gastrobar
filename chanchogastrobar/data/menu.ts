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
      { name: "Ensalada de burrata, tomata y atún rojo Balfegó", description: "Con nuestra vinagreta de chipotle, atún ligeramente sellado al kamado, tomate de campo y untuosa burrata.", price: "Media ración: 14,00 € | Ración: 24,50 €", img: "/assets/Plato.webp", allergens: ["Pescado", "Lácteos"] },
      { name: "Guacamole con burrata italiana", description: "Nuestra receta de guacamole, con burrata italiana y totopos de maíz fríos para dippear.", price: "Media ración: 8,00 € | Ración: 14,90 €", img: "/assets/Plato-2.webp", allergens: ["Lácteos"] },
      { name: "Carpaccio de solomillo de vaca madurada", description: "Finas láminas de solomillo, lascas de parmesano de 24 meses, rúcula selvática y esencia de trufa blanca.", price: "18,50 €", img: "/assets/Plato-3.webp", allergens: ["Lácteos"] },
      { name: "Steak Tartar El Chancho", description: "Solomillo de vaca picado a cuchillo, aliño tradicional con toque ahumado y yema de huevo de corral.", price: "21,00 €", img: "/assets/Plato-4.webp", allergens: ["Huevo", "Gluten"] }
    ]
  },
  {
    category: "Ceviches y Crudos",
    items: [
      { name: "Ceviche de dorada y rabas", description: "Con nuestra leche de tigre de mango, boniato, plátano macho crujiente y cebolla morada. Un clásico de nuestra casa.", price: "19,80 €", img: "/assets/Plato-3.webp", allergens: ["Pescado", "Marisco"] },
      { name: "Ceviche Clásico Limeño", description: "Corvina fresca, leche de tigre tradicional, ají limo, choclo y camote glaseado. El sabor más puro de los Andes.", price: "18,50 €", img: "/assets/Plato-4.webp", allergens: ["Pescado"] },
      { name: "Tiradito de Atún Rojo", description: "Láminas de atún Balfegó, leche de tigre de ají amarillo, aguacate y crujiente de quinoa.", price: "22,50 €", img: "/assets/Plato.webp", allergens: ["Pescado"] },
      { name: "Tartar de Salmón y Mango", description: "Salmón noruego, mango maduro, cebollino, lima y un toque de sésamo tostado.", price: "16,00 €", img: "/assets/Plato-2.webp", allergens: ["Pescado", "Gluten"] }
    ]
  },
  {
    category: "Entrantes calientes",
    items: [
      { name: "Pulpo al kamado", description: "Pulpo cocido en casa, con un toque de las brasas de nuestro kamado, servido con panaderas y una mayonesa ligera de pimentón de la Vera.", price: "Media ración: 16,00 € | Ración: 28,00 €", img: "/assets/Plato-4.webp", allergens: ["Marisco", "Huevo"] },
      { name: "Zamburiñas al kamado", description: "Con una suave mayonesa encevichada con toques dulces y huevas de salmón.", price: "Media ración: 11,00 € | Ración: 22,00 €", img: "/assets/PLato-5.webp", allergens: ["Marisco", "Pescado"] },
      { name: "Bao de Panceta Laqueada", description: "Pan al vapor, panceta cocinada a baja temperatura y terminada al fuego, salsa hoisin casera y encurtidos.", price: "2 unidades: 12,50 €", img: "/assets/Plato.webp", allergens: ["Gluten"] },
      { name: "Provolone al Horno de Leña", description: "Queso provolone fundido con tomates cherry confitados, orégano fresco y focaccia artesana.", price: "13,50 €", img: "/assets/Plato-6.webp", allergens: ["Lácteos", "Gluten"] }
    ]
  },
  {
    category: "Fritos caseros",
    items: [
      { name: "Patatas bravas al chipotle", description: "Nuestra salsa brava de chipotle acompañada de nuestras patatas caseras y alioli de lima.", price: "9,00 €", img: "/assets/Plato-6.webp", allergens: ["Picante", "Gluten"] },
      { name: "Croquetas de Jamón Ibérico", description: "Nuestra receta más cremosa, con jamón de bellota y un rebozado extra crujiente. Las llamamos 'Bolas de Oro'.", price: "Media ración: 7,50 € | Ración: 14,00 €", img: "/assets/Plato-2.webp", allergens: ["Gluten", "Lácteos"] },
      { name: "Calamares a la Andaluza", description: "Calamares frescos de potera, harina de garbanzo y alioli de ajo asado.", price: "16,50 €", img: "/assets/Plato-3.webp", allergens: ["Marisco", "Gluten"] }
    ]
  },
  {
    category: "Kamado (Brasas Japonesas)",
    items: [
      { name: "Picaña madurada de vaca (300g)", description: "Con patatas fritas y nuestro chimichurri de lima.", price: "24,50 €", img: "/assets/Plato.webp", allergens: [] },
      { name: "Dorada a la brasa (pieza entera)", description: "Con aromáticos y panaderas (para 2/3 personas).", price: "28,00 €", img: "/assets/Plato-2.webp", allergens: ["Pescado"] },
      { name: "Secreto Ibérico al Carbón", description: "Corte premium de cerdo ibérico, mojo picón canario y pimientos de padrón al humo.", price: "22,00 €", img: "/assets/Plato-3.webp", allergens: ["Picante"] },
      { name: "Hamburguesa El Chancho", description: "200g de carne madurada 45 días, queso ahumado, cebolla caramelizada al bourbon y brioche artesano.", price: "16,50 €", img: "/assets/Plato-4.webp", allergens: ["Gluten", "Lácteos"] },
      { name: "Entrecot de Vaca Vieja (400g)", description: "Carne con 60 días de maduración, flor de sal y pimientos de Guernica.", price: "32,00 €", img: "/assets/Plato-5.webp", allergens: [] },
      { name: "Costillar de Cerdo a la BBQ", description: "Cocinado 12 horas a baja temperatura y lacado en nuestra barbacoa de bourbon.", price: "21,50 €", img: "/assets/Plato-6.webp", allergens: ["Picante"] }
    ]
  },
  {
    category: "Postres Caseros",
    items: [
      { name: "Tarta de Queso Fluida", description: "Nuestra famosa tarta de queso al horno, corazón cremoso y base de galleta artesana. Servida con helado de frutos rojos.", price: "7,50 €", img: "/assets/Plato-5.webp", allergens: ["Lácteos", "Gluten", "Huevo"] },
      { name: "Torrija al Kamado", description: "Torrija caramelizada al fuego de nuestras brasas, infusionada en leche de coco y vainilla de Madagascar.", price: "8,00 €", img: "/assets/Plato-6.webp", allergens: ["Gluten", "Lácteos", "Huevo"] },
      { name: "Coulant de Chocolate Amargo", description: "Bizcocho fluido de chocolate 70%, centro líquido y sorbete de mandarina.", price: "7,50 €", img: "/assets/Plato.webp", allergens: ["Gluten", "Lácteos", "Huevo"] }
    ]
  }
];
