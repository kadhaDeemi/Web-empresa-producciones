import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4'; 
import ProjectCard from '../components/ProjectCard';
import ClientsCarousel from '../components/ClientsCarrousel';
import SpotlightCard from '../components/SpotlightCard';
import TestimonialsWall from '../components/TestimonialsWall';
import FinalCTA from '../components/FinalCTA';

import imgProyecto1 from '../assets/proyectos1.webp';
import imgProyecto2 from '../assets/proyectos2.webp';
import imgProyecto3 from '../assets/proyectos3.webp';


const recentProjects = [
  {
    id: 1,
    image: imgProyecto1,
    title: 'CLIENTE CORPORATIVO X',
    category: 'Video Corporativo',
  },
  {
    id: 2,
    image: imgProyecto2,
    title: 'LANZAMIENTO DE PRODUCTO Y',
    category: 'Producción de Evento',
  },
  {
    id: 3,
    image: imgProyecto3,
    title: 'ARTISTA MUSICAL Z',
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
        <Link
          to="/contacto"
          className="text-red-700 border-2 border-red-700 rounded-full font-bold text-base py-3 px-8 hover:bg-red-700 hover:text-white transition-colors duration-300">
          CONVERSEMOS HOY
        </Link>
      </div>
    </section>

    {/* Proyectos Recientes */}
      <section className="bg-black py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-12 text-center">
            PROYECTOS RECIENTES
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
             <a href="/proyectos" className="text-white font-semibold text-base border border-white py-3 px-8 rounded hover:bg-white hover:text-black transition-colors duration-300">
                 VER TODOS LOS EVENTOS
             </a>
          </div>
        </div>
      </section>

      {/*section clientes*/}
      <section className="bg-black py-20">
         <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-3xl md:text-3xl font-bold text-red-700 mb-12">
                 CLIENTES QUE CONFÍAN EN NOSOTROS
             </h2>
             <ClientsCarousel />
         </div>
      </section>


      {/* Sección de Servicios */}
<section className="bg-black py-20 px-4 md:px-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-3xl font-bold text-red-700 mb-12">
      NUESTROS SERVICIOS
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
<section
  className="relative bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${imgProyecto3})` }}
>
  {/* Superposicion */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>

  {/* Contenedor del contenido */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
    <div className="max-w-3xl">
      <h2 className="text-red-600 text-3xl font-bold uppercase tracking-widest">
        Equipo de trabajo
      </h2>
      <h3 className="mt-4 text-2xl md:text-4xl font-bold text-white">
        NUESTROS PROFESIONALES NO SE CONFORMAN CON “<span className='text-red-700'>BIEN</span>”. APUNTAN A “<span className='text-red-700'>INVOLVIDABLE</span>”.
      </h3>
    </div>
  </div>
</section>

<TestimonialsWall />
<FinalCTA/>
  </div>
    
  );
};

export default HomePage;