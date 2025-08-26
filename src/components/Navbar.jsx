import React from 'react';
import logo from '../assets/sdcNavbar.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className=" font-semibold absolute top-0 left-0 w-full p-6 text-white z-50">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
        <img src={logo} className=' w-46 h-18'></img> 
        </Link>
        <div className="space-x-10">
          <Link to='/' className='hover:text-red-700'>Inicio</Link>
          <Link to="/proyectos" className="hover:text-red-700">Proyectos</Link>
          <Link to="/servicios" className="hover:text-red-700">Servicios</Link>
          <Link to="/nosotros" className="hover:text-red-700">Nosotros</Link>
          <Link to="/contacto" className=" px-8 py-3 rounded-4xl border-2 hover:bg-red-700 hover:border-red-700 transition-colors duration-300 ease-in-out ">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;