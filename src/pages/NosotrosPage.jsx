// src/pages/NosotrosPage.jsx
import React from 'react';

import teamImage from '../assets/equipo-trabajando.jfif';
import miembro1 from '../assets/miembro1.jpg';
import miembro2 from '../assets/miembro2.png';

// Datos del equipo
const teamMembers = [
  {
    name: 'Damián C.',
    role: 'Director y Fundador',
    imageUrl: miembro1,
    bio: 'Con más de 10 años de experiencia en la industria, Damián lidera cada proyecto con una visión creativa y una ejecución impecable.'
  },
  {
    name: 'Nombre Apellido',
    role: 'Productor General',
    imageUrl: miembro2,
    bio: 'Experto en logística y planificación, se asegura de que cada detalle, desde el pre hasta el post, se maneje a la perfección.'
  },
];

const NosotrosPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Encabezado de la Página */}
      <header className="pt-32 pb-20 text-center bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Nuestra Esencia</h1>
          <p className="mt-4 text-lg text-gray-400">
            Somos más que una productora; somos un equipo de creativos, técnicos y estrategas apasionados por contar historias.
          </p>
        </div>
      </header>

      {/* Sección de Historia y Filosofía */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Column img */}
          <div>
            <img src={teamImage} alt="Equipo de SDC Producciones trabajando" className="rounded-lg shadow-2xl" />
          </div>
          {/* Column txt */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-400 mb-4 text-lg">
              SDC Producciones nació de la pasión por crear contenido audiovisual y experiencias que no solo se ven bien, sino que también generan una conexión real. Empezamos como un pequeño colectivo y hemos crecido hasta convertirnos en una productora integral, pero nuestra filosofía sigue siendo la misma: cada proyecto es una oportunidad para crear algo extraordinario.
            </p>
            <p className="text-gray-400 text-lg">
              Creemos en la colaboración, la innovación técnica y, sobre todo, en el poder de una buena historia. Desde el concepto inicial hasta la entrega final, nos involucramos por completo para asegurar que tu visión cobre vida de la manera más impactante posible.
            </p>
          </div>
        </div>
      </section>
      
      {/* section Presentacion del Equipo */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Conoce al Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-black p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500" />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;