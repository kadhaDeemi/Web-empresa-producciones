import React from 'react';
import miembro1 from '../assets/miembro1.jpg';
import miembro2 from '../assets/miembro2.png';
const testimonials = [
  {
    image: miembro1,
    quote: "La calidad audiovisual y la profesionalidad superaron todas nuestras expectativas. El evento fue un éxito.",
    name: 'Javiera Rojas',
    role: 'Gerenta de Marketing, Empresa Alfa'
  },
  {
    image: miembro2,
    quote: "Increíble atención al detalle. Transformaron nuestra idea en una producción visualmente impactante.",
    name: 'Matías González',
    role: 'Productor, Productora Beta'
  },
  {
    image: miembro1,
    quote: "El arriendo de equipos fue fácil y rápido. Tenían exactamente lo que necesitábamos en perfectas condiciones.",
    name: 'Sofía Castro',
    role: 'Directora de Arte'
  },
];

//bucle
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialsWall = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-red-700 mb-12">
         TESTIMONIOS DE CONFIANZA
        </h2>
        
        <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max animate-scroll2">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 p-8 mx-4 bg-black border-2 border-red-700 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img className="w-12 h-12 rounded-full object-cover mr-4" src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <div className="text-white font-bold text-left">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm text-left">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-left">
                  <p className="italic">"{testimonial.quote}"</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWall;