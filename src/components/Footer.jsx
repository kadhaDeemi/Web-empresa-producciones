import React from 'react';
import { Link } from 'react-router-dom';
import ImgFooter from '../assets/SDCFooter.png'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Contenedor principal*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/*COLUMNA IZQUIERDA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="mb-4">
              <img src={ImgFooter} alt="Logo SDC Producciones" className="h-25" />
            </Link>
            <p className="max-w-xs mb-4 text-sm">
              Transformamos ideas en producciones memorables.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                {/* Ícono Facebook */}
                <FaFacebook className="w-6 h-6" />
                </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                {/* Ícono Instagram */}
                <FaInstagram className='w-6 h-6'/>
                </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                {/* Ícono LinkedIn */}
                <FaLinkedin className='w-6 h-6'/>
                </a>
            </div>
          </div>

          {/*COLUMNA DEL MEDIO*/}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-red-700 mb-4">TELÉFONO</h3>
            <ul className="space-y-2">
              <li>
                <a>+56 9 1234 5678</a>
              </li>
              <li>
                <a>+56 9 8765 4321</a>
              </li>
              </ul>
              <h3 className="text-lg font-bold text-red-700 mt-4 mb-4">CORREO</h3>
              <ul className="space-y-2">
              <li>
                <a href="mailto:contacto@sdcproducciones.com">contacto@sdcproducciones.com</a>
              </li>
              </ul>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-red-700 mb-4">UBICACION</h3>
            <ul className="space-y-2">
              <li>Av. Nueva Providencia 1363 oficina 1102. Providencia, Santiago</li>
              </ul>
              <h3 className="text-lg font-bold text-red-700 mt-4 mb-4">HORARIOS DE ATENCIÓN</h3>
            <ul className="space-y-2">
              <li>De lunes a Viernes</li>
              <li>10:00 - 19:30 hrs</li>
              </ul>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-12 text-gray-200 pt-8 border-t border-gray-800 text-center text-sm ">
          <p>&copy; {currentYear} SDC Producciones | Todos los derechos reservados | Pagina web diseñada y desarrollada por <a className='text-red-700' href="https://github.com/kadhaDeemi">KadhaDeemi</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
