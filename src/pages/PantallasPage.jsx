import React from 'react';
import { Link } from 'react-router-dom';

// IMPORTACIONES DE SWIPE
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// CSS PERSONALIZADO
import '../PantallaPage.css';

// img
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
  return (
    <div className="bg-black pt-24"> 
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
          pagination={{ clickable: true, }} 
          speed={1500}
          spaceBetween={0}
        >
          {[...screenTypes, ...screenTypes].map((screen, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="info">
                  <h2 className='text-red-800 text-5xl text-semibold'>{screen.title}</h2>
                  <p className='text-white text-lg'>{screen.description}</p>
                </div>
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
    </div>
  );
};

export default PantallasPage;   