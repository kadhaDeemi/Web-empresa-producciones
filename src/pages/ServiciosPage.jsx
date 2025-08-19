import React from 'react';


// por mientras lo dejo aqi
const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a2 2 0 010 3.1l-4.55 3.3A2 2 0 0113 18.05V5.95a2 2 0 012-1.6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h9v12H4z" />
      </svg>
    ),
    title: 'Producción Audiovisual',
    description: 'Creamos contenido que cautiva. Desde videos corporativos y comerciales hasta cobertura de eventos y videos musicales. Tu historia, contada con la más alta calidad.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.11c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69L11.049 2.927z" />
      </svg>
    ),
    title: 'Producción de Eventos',
    description: 'Diseñamos y ejecutamos eventos memorables. Desde lanzamientos de productos y conferencias hasta eventos corporativos y celebraciones. Nos encargamos de todo.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h-2M6 12H4m14.66-7.34l-1.42 1.42M5.34 18.66l1.42-1.42m12.72-1.42l-1.42-1.42M6.76 5.34l-1.42-1.42" />
         <circle cx="12" cy="12" r="3" />
         <path d="M12 18a6 6 0 000-12v0a6 6 0 000 12v0z" />
      </svg>
    ),
    title: 'Arriendo de Equipos',
    description: 'Contamos con un catálogo completo de equipos de audio, video e iluminación de última generación para tus producciones. Calidad profesional a tu alcance.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Activaciones BTL',
    description: 'Creamos experiencias de marca que conectan directamente con tu público. Activaciones creativas, marketing de guerrilla y campañas que generan impacto.',
  },
];

const ServiciosPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Encabezado de la Página */}
      <header className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-gray-400">
            Soluciones integrales para llevar tu visión al siguiente nivel.
          </p>
        </div>
      </header>

      {/* contenido Servicios */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-800 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-4 text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-200">
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