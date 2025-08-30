import React from 'react';

import cliente1 from '../assets/logos/Cliente1.webp';
import cliente2 from '../assets/logos/Cliente2.webp';
import cliente3 from '../assets/logos/Cliente3.webp';
import cliente4 from '../assets/logos/Cliente4.webp';
import cliente5 from '../assets/logos/Cliente5.webp';
import cliente6 from '../assets/logos/Cliente6.webp';
import cliente8 from '../assets/logos/Cliente8.webp';
import cliente9 from '../assets/logos/Cliente9.webp';
import cliente10 from '../assets/logos/Cliente10.webp';

const logos = [
  { src: cliente1, alt: 'Cliente 1' },
  { src: cliente2, alt: 'Cliente 2' },
  { src: cliente3, alt: 'Cliente 3' },
  { src: cliente4, alt: 'Cliente 4' },
  { src: cliente5, alt: 'Cliente 5' },
  { src: cliente6, alt: 'Cliente 6' },
  { src: cliente8, alt: 'Cliente 8' },
  { src: cliente9, alt: 'Cliente 9' },
  { src: cliente10, alt: 'Cliente 10' },
];

const ClientsCarousel = () => {
  const extendedLogos = [...logos, ...logos];

  return (
    <div 
      className="
        relative w-full overflow-hidden 
        [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]
        md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
      "
    >
      <div className="relative z-10 flex w-max animate-scroll">
        {extendedLogos.map((logo, index) => (
          <div 
            key={index} 
            className="
              flex-shrink-0 h-24 flex items-center justify-center 
              w-32 mx-4  // Estilos para móvil (ancho 128px, margen 16px)
              md:w-48 md:mx-8 // Estilos para escritorio (ancho 192px, margen 32px)
            "
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="
                max-w-full object-contain
                max-h-12 // Altura máxima para móvil
                md:max-h-20 // Altura máxima para escritorio
              " 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;