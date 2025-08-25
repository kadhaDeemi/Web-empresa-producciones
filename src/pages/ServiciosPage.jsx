import React from 'react';
import { LuAudioLines } from 'react-icons/lu';
import { PiVideoCameraFill } from "react-icons/pi";
import { IoIosMegaphone } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

const services = [
  {
    icon: (< LuAudioLines />),
    title: 'Producción Audiovisual',
    description: 'Creamos contenido que cautiva. Desde videos corporativos y comerciales hasta cobertura de eventos y videos musicales. Tu historia, contada con la más alta calidad.',
    color: 'text-red-500',
    borderColor: 'hover:border-red-500',
    shadowColor: 'hover:shadow-red-500/20'
  },
  {
    icon: ( <BsFillLightningChargeFill/>),
    title: 'Producción de Eventos',
    description: 'Diseñamos y ejecutamos eventos memorables. Desde lanzamientos de productos y conferencias hasta eventos corporativos y celebraciones. Nos encargamos de todo.',
    color: 'text-orange-500',
    borderColor: 'hover:border-orange-500',
    shadowColor: 'hover:shadow-orange-500/20'
  },
  {
    icon: (<PiVideoCameraFill/>),
    title: 'Arriendo de Equipos',
    description: 'Contamos con un catálogo completo de equipos de audio, video e iluminación de última generación para tus producciones. Calidad profesional a tu alcance.',
    color: 'text-amber-500',
    borderColor: 'hover:border-amber-500',
    shadowColor: 'hover:shadow-amber-500/20'
  },
  {
    icon: (<IoIosMegaphone />),
    title: 'Activaciones BTL',
    description: 'Creamos experiencias de marca que conectan directamente con tu público. Activaciones creativas, marketing de guerrilla y campañas que generan impacto.',
    color: 'text-rose-500',
    borderColor: 'hover:border-rose-500',
    shadowColor: 'hover:shadow-rose-500/20'
  },
];

const ServiciosPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="pt-48 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl text-red-700  font-bold">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-gray-400">
            Soluciones integrales para llevar tu visión al siguiente nivel.
          </p>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`
                  bg-[rgba(79,_0,_0,_25%)] p-8 rounded-lg border-2 border-gray-800  
                  transition-all duration-300 hover:rotate-0 hover:scale-105 
                  hover:shadow-xl ${service.borderColor} ${service.shadowColor}
                  ${index > 1 ? '-rotate-1' : 'rotate-1'}
                `}
              >
                <div className="flex items-center mb-4">
                  <div className={`h-10 w-10 ${service.color}`}>
                    {React.cloneElement(service.icon, { className: 'h-10 w-10' })}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiciosPage;