import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FinalCTA from '../components/FinalCTA';

// IMPORTACIONES DE SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// IMPORTACIONES DEL LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

// CSS PERSONALIZADO
import '../PantallaPage.css'; 

// img
import imgIntro from '../assets/pantallas/Pantalla-intro.webp';
import imgIndoor from '../assets/pantallas/pantalla-indoor.webp';
import imgOutdoor from '../assets/pantallas/pantallas-outdoor.webp';
import imgCustom from '../assets/pantallas/pantallas-medidas.webp'; 

const screenTypes = [
  {
    title: 'PANTALLAS INDOOR',
    description: 'Resolución ultra alta (P2.9 y superior) para una nitidez impecable en conferencias, stands y eventos corporativos donde cada detalle cuenta.',
    image: imgIndoor,
    link: '/contacto'
  },
  {
    title: 'PANTALLAS OUTDOOR',
    description: 'Alto brillo y protección IP65 para resistir cualquier condición climática. Perfectas para conciertos, festivales y activaciones al aire libre.',
    image: imgOutdoor,
    link: '/contacto'
  },
  {
    title: 'DISEÑOS ESCENOGRÁFICOS',
    description: 'Vamos más allá del rectángulo. Creamos tótems, cubos, suelos y formas personalizadas con LED para escenografías inmersivas e inolvidables.',
    image: imgCustom,
    link: '/contacto'
  }
];


const PantallasPage = () => {
  const [open, setOpen] = useState(false);

  return (
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}  
      exit={{ opacity: 0, y: -20 }}    
      transition={{ duration: 0.5 }}
      className="bg-black pt-24">
      
      {/* Sección de Introduccion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div onClick={() => setOpen(true)} className="block relative group rounded-2xl overflow-hidden cursor-pointer">
              <img src={imgIntro} alt="Evento con pantallas LED" className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-700/80 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-white text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h2 className="text-xl font-semibold text-red-600 uppercase tracking-wider">
              Arriendo de Pantallas LED
            </h2>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter">
              El tamaño lo eliges tú. La calidad siempre es Full HD.
            </h1>
          </motion.div>
        </div>
      </section>
 
      {/* Slider */}
      <div className="w-full h-[75vh] md:h-[85vh] relative group overflow-hidden">
        <Swiper
          className="pantallas-swiper h-full w-full"
          modules={[Navigation, Pagination]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          pagination={{ clickable: true }} 
          speed={1500}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              centeredSlides: true,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            }
          }}>
          {[...screenTypes, ...screenTypes].map((screen, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                {/* Estructura corregida sin div "info" y con textos responsivos */}
                <h2 className='text-red-700 text-3xl sm:text-4xl lg:text-5xl font-bold'>{screen.title}</h2>
                <p className='text-white text-base sm:text-lg'>{screen.description}</p>
                <Link to={screen.link}>
                  <button className="explore-btn">
                    <span>Cotizar Servicio</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33334 12.6667L12.6667 3.33333M12.6667 3.33333H4.66667M12.6667 3.33333V11.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="slide-img">
                <img src={screen.image} alt={screen.title} />
              </div>
              <div className="slide-img-blur">
                <img src={screen.image} alt={screen.title} />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
          <div className="swiper-button-next transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </Swiper>
      </div>
      
      {/* El componente Lightbox para el video */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Video]}
        carousel={{ finite: true }}
        slides={[
          {
            type: 'video',
            sources: [
              { src: '/video-pantalla.mp4', type: 'video/mp4' }
            ],
            autoPlay: true,
          },
        ]}/>
      {/*CTA*/}
      <FinalCTA />
    </motion.div>
  );
};

export default PantallasPage;