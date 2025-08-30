import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

//mismos estilos q los deemas
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../PantallaPage.css';

import FinalCTA from '../components/FinalCTA';

// --- 1. CONSIGUE Y REEMPLAZA ESTAS IMÁGENES ---
import imgIntro from '../assets/estructura/estructura-intro.webp'; 
import imgTarimas from '../assets/estructura/tarimas-modulares.webp'; 
import imgTruss from '../assets/estructura/estructura-truss.webp'; 
import imgPasarelas from '../assets/estructura/pasarela-evento.webp'; 

//DATOS 
const stageTypes = [
  {
    title: 'TARIMAS MODULARES',
    description: 'Montamos superficies de cualquier tamaño y altura, adaptables a todo tipo de terrenos. Perfectas para escenarios principales, podios o plataformas.',
    image: imgTarimas,
    link: '/contacto'
  },
  {
    title: 'ESTRUCTURAS TRUSS',
    description: 'Sistemas de Truss de aluminio para rigging de iluminación, sonido y pantallas. Creamos arcos, parrillas y estructuras personalizadas seguras y versátiles.',
    image: imgTruss,
    link: '/contacto'
  },
  {
    title: 'PASARELAS Y GRADERÍAS',
    description: 'Soluciones especializadas para desfiles de moda, eventos deportivos o cualquier producción que requiera visibilidad y un diseño específico.',
    image: imgPasarelas,
    link: '/contacto'
  }
];

const EscenariosPage = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}  
          exit={{ opacity: 0, y: -20 }}    
          transition={{ duration: 0.5 }}
          className="bg-black pt-24">
      {/* Seccion de Introduccion*/}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
                <div className="block relative group rounded-2xl overflow-hidden cursor-pointer">
                    <img src={imgIntro} alt="Evento con pantallas LED" className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center"></div>
                </div>
            </motion.div>
            <motion.div className="text-white text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                <h2 className="text-xl font-semibold text-red-600 uppercase tracking-wider">
                    No es solo un escenario. Es tu marca en alto
                </h2>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tighter">
                   Montaje técnico, diseño visual y ejecución impecable para eventos que marcan.
                </h1>
            </motion.div>
        </div>
      </section>

      {/* Slider Interactivo de Productos */}
      <div className="w-full h-[85vh] relative group">
        <Swiper
          className="pantallas-swiper h-full w-full"
          modules={[Navigation, Pagination]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          slidesPerView={4}
          pagination={{ clickable: true }}
          speed={1200}
          spaceBetween={0}
        >
          {[...stageTypes, ...stageTypes].map((stage, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="info">
                  <h2 className='text-red-700 text-5xl font-bold'>{stage.title}</h2>
                  <p className='text-white text-lg'>{stage.description}</p>
                </div>
                <Link to={stage.link}>
                  <button className="explore-btn">
                    <span>Cotizar Servicio</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33334 12.6667L12.6667 3.33333M12.6667 3.33333H4.66667M12.6667 3.33333V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </Link>
              </div>
              <div className="slide-img">
                <img src={stage.image} alt={stage.title} />
              </div>
              <div className="slide-img-blur">
                <img src={stage.image} alt={stage.title} />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
          <div className="swiper-button-next transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </Swiper>
      </div>

      {/* CTA */}
      <FinalCTA />

    </motion.div>
  );
};

export default EscenariosPage;