import React from 'react';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "El Chancho Gastrobar",
    "image": "https://elchanchogastrobar.com/og-image.jpg",
    "url": "https://elchanchogastrobar.com",
    "telephone": "+34945000000",
    "priceRange": "$$",
    "menu": "https://elchanchogastrobar.com/#carta",
    "servesCuisine": "Gastrobar, Cocina a la Brasa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Portal de Castilla, 38",
      "addressLocality": "Vitoria-Gasteiz",
      "postalCode": "01007",
      "addressRegion": "Álava",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.8448,
      "longitude": -2.6841
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "13:30",
        "closes": "23:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "13:30",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "13:30",
        "closes": "16:30"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
