import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4'; 
import ProjectCard from '../components/ProjectCard';
import ClientsCarousel from '../components/ClientsCarrousel';
import SpotlightCard from '../components/SpotlightCard';

import imgProyecto1 from '../assets/proyectos1.jpg';
import imgProyecto2 from '../assets/proyectos2.jpg';
import imgProyecto3 from '../assets/proyectos3.jpg';


const recentProjects = [
  {
    id: 1,
    image: imgProyecto1,
    title: 'Cliente Corporativo X',
    category: 'Video Corporativo',
  },
  {
    id: 2,
    image: imgProyecto2,
    title: 'Lanzamiento de Producto Y',
    category: 'Producción de Evento',
  },
  {
    id: 3,
    image: imgProyecto3,
    title: 'Artista Musical Z',
    category: 'Video Musical',
  },
];

const HomePage = () => {
  return (
    <div>
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* capa de fondo (osea el video) */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Capa de Superposición (para legibilidad del texto) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* txt y button Contenido */}
      <div className="relative z-20 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-red-700">SDC</span>{' '}
          <span className="text-white">PRODUCCIONES</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          RENTA DE EQUIPOS Y SERVICIOS PARA EVENTOS
        </p>
        <a
          href="/proyectos"
          className="text-red-700 border-2 rounded-full font-bold text-lg py-3 px-8 hover:text-red-800 transition-colors duration-300">
          Conversemos hoy
        </a>
      </div>
    </section>

    {/* Proyectos Recientes */}
      <section className="bg-black py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Proyectos Recientes
          </h2>
          {/* Grilla de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
          <div className="text-center mt-12">
             <a href="/proyectos" className="text-white font-semibold border border-white py-3 px-8 rounded hover:bg-white hover:text-black transition-colors duration-300">
                 Ver Todos los Proyectos
             </a>
          </div>
        </div>
      </section>

      {/*section clientes*/}
      <section className="bg-black py-20">
         <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-semibold text-red-700 mb-12">
                 Clientes que confían en nosotros
             </h2>
             <ClientsCarousel />
         </div>
      </section>


      {/* Sección de Servicios */}
<section className="bg-black py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
      Nuestros Servicios
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Tarjeta 1: Producción Audiovisual */}
       <SpotlightCard>
        <h3 className="text-xl font-bold text-white mb-2">Producción Audiovisual</h3>
        <p className="text-gray-400">Videos que cuentan tu historia con impacto y calidad cinematográfica.</p>
      </SpotlightCard>
      {/* Tarjeta 2: Producción de Eventos */}
      <SpotlightCard>
        <h3 className="text-xl font-bold text-white mb-2">Producción de Eventos</h3>
        <p className="text-gray-400">Creamos y producimos eventos inolvidables que conectan con tu audiencia.</p>
      </SpotlightCard>
      {/* Tarjeta 3: Arriendo de Equipos */}
      <SpotlightCard>
        <h3 className="text-xl font-bold text-white mb-2">Arriendo de Equipos</h3>
        <p className="text-gray-400">Equipamiento pro de video, audio e iluminación para tus proyectos.</p>
      </SpotlightCard>
      {/* Tarjeta 4: Activaciones BTL */}
      <SpotlightCard>
        <h3 className="text-xl font-bold text-white mb-2">Activaciones BTL</h3>
        <p className="text-gray-400">Experiencias de marca creativas que generan resultados medibles.</p>
      </SpotlightCard>
    </div>

    
    {/* botones de servicios */}
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
      <Link 
        to="/servicios" 
        className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition-colors duration-300"
      >
        Conoce Todos los Servicios
      </Link>
      <Link 
        to="/arriendo" 
        className="text-white font-semibold border border-white py-3 px-8 rounded hover:bg-white hover:text-black transition-colors duration-300"
      >
        Ver Catálogo de Arriendo
      </Link>
    </div>
  </div>
  </section>
  </div>
    
  );
};

export default HomePage;