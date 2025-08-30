import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../PantallaPage.css';

import FinalCTA from '../components/FinalCTA';


import imgIntro from '../assets/otros/otros-catering.webp'; 
import imgMobiliario from '../assets/otros/Mobilario-evento.webp'; 
import imgJuegos from '../assets/otros/maquinas-arcade.webp';
import imgAdicionales from '../assets/otros/pista-baileLED.webp';

//DATOS
const otherServices = [
  {
    title: 'MOBILIARIO Y AMBIENTACIÓN',
    description: 'Complementa tu evento con arriendo de sillas, mesas, sofás, alfombras y todo lo necesario para crear un ambiente cómodo y elegante para tus invitados.',
    image: imgMobiliario,
    link: '/contacto'
  },
  {
    title: 'ENTRETENCIÓN Y JUEGOS',
    description: 'Añade un toque de diversión con nuestros juegos: taca-taca, mesas de ping-pong, juegos inflables para niños y adultos, y mucho más.',
    image: imgJuegos,
    link: '/contacto'
  },
  {
    title: 'SERVICIOS ADICIONALES',
    description: 'Ofrecemos soluciones 360°: Fotografía y video profesional, pistas de baile LED, servicios de catering y todo lo que necesites para una producción completa.',
    image: imgAdicionales,
    link: '/contacto'
  }
];

const OtrosPage = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}  
          exit={{ opacity: 0, y: -20 }}    
          transition={{ duration: 0.5 }}
          className="bg-black pt-24">
          
      {/*Seccion de Introduccion */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="block relative group rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img src={imgIntro} alt="Evento con pantallas LED" className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                  </div>
                </motion.div>
      
                <motion.div
                  className="text-white text-center md:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold text-red-600 uppercase tracking-wider">
                    Producción Integral con Precisión y Estilo
                  </h2>
                  <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tighter">
                    Desde juegos inflables hasta asesoría técnica. Lo tenemos cubierto.
                  </h1>
                </motion.div>
              </div>
            </section>

      {/*  Slider Interactivo de Productos*/}
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
          {[...otherServices, ...otherServices].map((service, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="info">
                  <h2 className='text-red-700 text-5xl font-bold'>{service.title}</h2>
                  <p className='text-white text-lg'>{service.description}</p>
                </div>
                <Link to={service.link}>
                  <button className="explore-btn">
                    <span>Cotizar Servicio</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33334 12.6667L12.6667 3.33333M12.6667 3.33333H4.66667M12.6667 3.33333V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </Link>
              </div>
              <div className="slide-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="slide-img-blur">
                <img src={service.image} alt={service.title} />
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

export default OtrosPage;