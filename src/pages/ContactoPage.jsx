import { motion } from 'framer-motion';

import ContactForm from '../components/ContactForm';
import headerBgImage from '../assets/proyectos1.webp';
import infoImage from '../assets/proyectos2.webp';

const ContactoPage = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}  
     exit={{ opacity: 0, y: -20 }}    
     transition={{ duration: 0.5 }}
     className="bg-black text-red-700 min-h-screen">
      
      {/*Encabezado con Imagen de Fondo*/}
      <header 
        className="relative pt-36 pb-24 md:pt-48 md:pb-32 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        {/* Superposicion*/}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">CONTACTO</h1>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/*Columna Izquierda */}
          <div className="space-y-8">
            <img src={infoImage} alt="Equipo en un evento" className="rounded-lg shadow-2xl w-full" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">Canales Directos</h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-200">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-red-600"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  <a href="tel:+56912345678" className="hover:text-white">+56 9 1234 5678</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-red-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <a href="mailto:damianvalderrama9@gmail.com" className="hover:text-white">contacto@sdcproducciones.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/*Columna Derecha */}
          <div className='text-white'>
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Cuéntanos sobre tu proyecto</h2>
              <p className="mt-2 text-gray-400">Rellena el formulario y te contactaremos a la brevedad.</p>
            </div>
              {/* formulario */}
              <ContactForm />
          </div>

        </div>
      </main>
    </motion.div>
  );
};

export default ContactoPage;