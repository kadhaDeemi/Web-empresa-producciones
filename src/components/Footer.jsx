import React from 'react';
import { FaInstagram, FaVimeoV, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    //año actual
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        
        {/* Lado Izquierdo: Copyright */}
        <div>
          <p>&copy; {currentYear} SDC Producciones. Todos los derechos reservados.</p>
          <p className="text-sm">Diseñado y desarrollado con pasión.</p>
        </div>

        {/* Lado Derecho: Redes Sociales */}
        <div className="flex space-x-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a 
            href="https://vimeo.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            <FaVimeoV className="w-6 h-6" />
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
