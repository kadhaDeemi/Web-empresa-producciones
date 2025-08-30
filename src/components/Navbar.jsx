import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sdcNavbar.webp';

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="font-semibold absolute top-0 left-0 w-full p-6 text-white z-50">
      <nav className="flex justify-between items-center max-w-full mx-auto">
        <Link to="/" className="text-2xl font-bold z-20 ">
          <img src={logo} alt="Logo SDC Producciones" className='h-18 w-48' /> 
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-base">
          <Link to='/' className='hover:text-red-700 transition-colors'>INICIO</Link>
          <Link to="/proyectos" className="hover:text-red-700 transition-colors">PROYECTOS</Link>

          {/* Servicios con Submenu*/}
          <div className="relative group">
            <Link to="/servicios" className="hover:text-red-700 flex items-center">
              SERVICIOS
              <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </Link>
            {/*Menu Desplegable */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible pt-2">
              <ul className="py-2">
                <li><Link to="/servicios/pantallas" className="block px-4 py-2 text-white hover:bg-red-700 transition-colors">PANTALLAS</Link></li>
                <li><Link to="/servicios/iluminacion" className="block px-4 py-2 text-white hover:bg-red-700 transition-colors">ILUMINACIÓN</Link></li>
                <li><Link to="/servicios/escenarios" className="block px-4 py-2 text-white hover:bg-red-700 transition-colors">ESCENARIOS</Link></li>
                <li><Link to="/servicios/otros" className="block px-4 py-2 text-white hover:bg-red-700 transition-colors">OTROS</Link></li>
                <li><hr className="border-gray-700 my-1" /></li>
                <li><Link to="/servicios" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-700 hover:text-white transition-colors">VER TODOS</Link></li>
              </ul>
            </div>
          </div>

          <Link to="/nosotros" className="hover:text-red-700 transition-colors">NOSOTROS</Link>
          <Link 
            to="/contacto" 
            className="px-8 py-3 rounded-4xl border-2 border-white text-white font-bold hover:bg-red-700 hover:border-red-700 transition-all duration-300 ease-in-out"
          >
            CONTACTO
          </Link>
        </div>
        {/*Boton de Hamburguesa */}
        <div className="md:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              // Icono de 'X' cuando el menú está abierto
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              // Icono de hamburguesa cuando está cerrado
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {/* Menu dsplegable*/}
        {/*transicion */}
        <div className={`
          absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm 
          flex flex-col items-center justify-center space-y-8 text-2xl
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          md:hidden
        `}>
          <Link to='/' onClick={() => setIsOpen(false)} className='hover:text-red-700'>INICIO</Link>
          <Link to="/proyectos" onClick={() => setIsOpen(false)} className="hover:text-red-700">PROYECTOS</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="hover:text-red-700">SERVICIOS</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="hover:text-red-700">NOSOTROS</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-3 rounded-full border-2 border-white">CONTACTO</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;