import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import imgPantallas from '../assets/pantallas-led.webp';
import imgIluminacion from '../assets/iluminacion-evento.webp';
import imgEscenarios from '../assets/estructura-evento.webp';
import imgOtros from '../assets/otros-evento.webp';

//categorias
const serviceCategories = [
  {
    title: 'Pantallas LED',
    description: 'Soluciones visuales de alto impacto, indoor y outdoor.',
    image: imgPantallas,
    link: '/servicios/pantallas'
  },
  {
    title: 'Iluminación Profesional',
    description: 'Creamos atmósferas y damos vida a tus eventos con luces de última generación.',
    image: imgIluminacion,
    link: '/servicios/iluminacion'
  },
  {
    title: 'Escenarios y Estructuras',
    description: 'Montaje de escenarios seguros y versátiles para cualquier tipo de evento.',
    image: imgEscenarios,
    link: '/servicios/escenarios'
  },
  {
    title: 'Otros Servicios',
    description: 'Sonido, CCTV, producción audiovisual y más. Soluciones integrales.',
    image: imgOtros,
    link: '/servicios/otros'
  },
];

const ServiciosPage = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}  
    exit={{ opacity: 0, y: -20 }}    
    transition={{ duration: 0.5 }} 
    className="bg-black text-white min-h-screen">
      <header className="pt-48 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-red-700 font-bold">NUESTROS SERVICIOS</h1>
          <p className="mt-4 text-lg text-gray-200">
            Explora nuestras áreas de especialización. Hacemos clic en una categoría para ver todos los detalles.
          </p>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Link to={category.link} key={index} className="block group">
                <div className="relative rounded-lg overflow-hidden h-96">
                  {/* Imagen de Fondo */}
                  <img 
                    src={category.image} 
                    alt={`Imagen de ${category.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Superposicion de Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  {/* Contenido de Texto */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-200 text-base mt-2">{category.description}</p>
                    <div className="mt-4 text-red-500 font-semibold flex items-center
                                    opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0
                                    transition-all duration-300">
                      Ver más
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ServiciosPage;