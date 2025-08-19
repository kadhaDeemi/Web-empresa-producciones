import React from 'react';

import cliente1 from '../assets/logos/Cliente1.png';
import cliente2 from '../assets/logos/Cliente2.png';
import cliente3 from '../assets/logos/Cliente3.png';
import cliente4 from '../assets/logos/Cliente4.png';
import cliente5 from '../assets/logos/Cliente5.png';
import cliente6 from '../assets/logos/Cliente6.png';

const logos = [
  { src: cliente1, alt: 'Cliente 1' },
  { src: cliente2, alt: 'Cliente 2' },
  { src: cliente3, alt: 'Cliente 3' },
  { src: cliente4, alt: 'Cliente 4' },
  { src: cliente5, alt: 'Cliente 5' },
  { src: cliente6, alt: 'Cliente 6' },
];

const ClientsCarousel = () => {
  // bucle infinito logos
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="relative z-10 flex w-max animate-scroll">
        {extendedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8">
            <img src={logo.src} alt={logo.alt} className="max-w-full max-h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;