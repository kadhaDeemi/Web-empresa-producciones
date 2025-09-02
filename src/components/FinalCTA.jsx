import React from 'react';
import ContactForm from './ContactForm';

import contactBgImage from '../assets/evento-4.webp';

const FinalCTA = () => {
  return (
    <section
      className="relative bg-cover bg-center lg:bg-fixed"
      style={{ backgroundImage: `url(${contactBgImage})` }}
    >
      {/* Superposición con degradado para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna Izquierda (con texto centrado en móvil) */}
          <div className="text-white text-center lg:text-left"> {/* Texto centrado en móvil, a la izquierda en escritorio */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hagamos que tu <span className="text-red-600">próximo proyecto</span> sea inolvidable.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Estamos listos para escuchar tu idea. Al trabajar con nosotros, obtienes:
            </p>
            {/*la lista se alinee a la izquierda en escritorio */}
            <ul className="space-y-4 text-gray-200 inline-block text-left"> 
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-600 mr-3 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><span className="font-semibold text-white">Asesoría Personalizada:</span> Te acompañamos en cada paso del proceso creativo y técnico.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-600 mr-3 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                <span><span className="font-semibold text-white">Equipos de Última Generación:</span> Calidad profesional garantizada para tu producción.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-600 mr-3 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.93L5.5 8m7 2v5m0 0v5m0-5h-5" /></svg>
                <span><span className="font-semibold text-white">Compromiso y Pasión:</span> Nos involucramos al 100% para que tu visión cobre vida.</span>
              </li>
            </ul>
          </div>

          {/* Columna Derecha */}
          <div className="bg-black/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="text-center text-white mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                Conversemos de tu Proyecto
              </h3>
              <p className="text-gray-400 mt-2">
                Rellena el formulario y te contactaremos a la brevedad.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;