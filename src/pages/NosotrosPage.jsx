import React from 'react';
import { motion } from 'framer-motion';

import teamImage from '../assets/equipo-trabajando.webp';
import miembro1 from '../assets/miembro1.webp';
import miembro2 from '../assets/miembro2.webp';

// Datos del equipo
const teamMembers = [
  {
    name: 'Marcela Boux',
    role: 'Director y Fundador',
    imageUrl: miembro1,
    bio: 'Con más de 10 años de experiencia en la industria, Marcela lidera cada proyecto con una visión creativa y una ejecución impecable.'
  },
  {
    name: 'Nombre Apellido',
    role: 'Productor General',
    imageUrl: miembro2,
    bio: 'Experto en logística y planificación, se asegura de que cada detalle, desde el pre hasta el post, se maneje a la perfección.'
  },
  {
    name: 'Personal 3',
    role: "Soporte tecnico",
    imageUrl: miembro2,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];

const NosotrosPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}  
    exit={{ opacity: 0, y: -20 }}    
    transition={{ duration: 0.5 }} 
    className="bg-black text-white min-h-screen">
      {/* Encabezado de la Página */}
      <header className="pt-48 pb-20 text-center bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-red-700 font-bold">SOBRE NOSOTROS</h1>
        </div>
      </header>

     {/* HISTORIA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative group cursor-pointer">

            <div 
              className="absolute inset-0 border-2 border-red-700 rounded-lg 
                         translate-x-4 translate-y-4 group-hover:-translate-x-0 
                         group-hover:-translate-y-0 transition-transform duration-300 ease-in-out"
              aria-hidden="true"
            ></div>

            <img 
              src={teamImage} 
              alt="Equipo de SDC Producciones trabajando" 
              className="relative rounded-lg shadow-lg hover:shadow-red-800
                         transition-transform duration-300 ease-in-out 
                         group-hover:-translate-x-0 group-hover:-translate-y-0 hover:scale-101" 
            />
          </div>

          {/* Columna de Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className='text-red-700'>SDC</span> PRODUCCIONES</h2>
            <h4 className='text-xl font-bold mb-4'>SURGE COMO UNA RESPUESTA CREATIVA A LA NECESIDAD DE TRANSFORMAR IDEAS EN EVENTOS MEMORABLES.</h4>
            <p className="text-gray-300 mb-4 text-lg">
              Nuestro objetivo es la innovación técnica y, sobre todo, en el poder de una buena historia. Desde el concepto inicial hasta la entrega final, nos involucramos por completo para asegurar que tu visión cobre vida de la manera más impactante posible.
            </p>
          </div>
        </div>
      </section>
      
      {/* section Presentacion del Equipo */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Conoce al Equipo</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-black p-8 border-2 border-red-700 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-800" />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-200">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
    <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white">¿Listo para empezar tu próximo proyecto?</h2>
        <p className="text-gray-400 mt-4 mb-8 text-lg">
            Hablemos de cómo podemos llevar tus ideas al siguiente nivel.
        </p>
        <a 
            href="/contacto" 
            className="inline-block border-2 rounded-2xl border-white text-red-800 font-bold py-4 px-12 hover:bg-red-800 text-white hover:border-red-800 transition-colors duration-300 text-lg"
        >
            Contáctanos
        </a>
    </div>
</section>
    </motion.div>
  );
};

export default NosotrosPage;