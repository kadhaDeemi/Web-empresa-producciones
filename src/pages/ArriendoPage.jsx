import React from 'react';


const equipmentData = [
  {
    category: 'Cámaras y Lentes',
    icon: '📷',
    items: [
      'Sony FX6 Cinema Line',
      'Sony A7S III (x2)',
      'Lentes Sony GM (16-35, 24-70, 70-200)',
      'Kit de Lentes de Cine Rokinon',
    ],
  },
  {
    category: 'Iluminación',
    icon: '💡',
    items: [
      'Aputure 600d Pro Light Storm',
      'Aputure 300d Mark II (x2)',
      'Paneles LED Godox LD150R RGB',
      'Modificadores (Softbox, Fresnel, Banderas)',
      'Trípodes de iluminación C-Stands',
    ],
  },
  {
    category: 'Sonido',
    icon: '🎤',
    items: [
      'Grabadora Zoom F8n Pro',
      'Micrófonos de cañón (Sennheiser MKH 416)',
      'Sistemas inalámbricos Sennheiser G4 (x4)',
      'Micrófonos Lavalier Sanken COS-11D',
    ],
  },
  {
    category: 'Estructuras y Soporte',
    icon: '🏗️',
    items: [
      'Trípodes de cámara Sachtler Flowtech',
      'Gimbal DJI RS 3 Pro',
      'Slider y Dolly',
      'Estructuras Truss para eventos',
      'Monitores de campo SmallHD',
    ],
  },
];

const ArriendoPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Encabezado de la Pagina */}
      <header className="pt-32 pb-20 text-center bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Arriendo de Equipos</h1>
          <p className="mt-4 text-lg text-gray-400">
            Equipamiento profesional para tus producciones. Revisa nuestro catálogo y cotiza con nosotros.
          </p>
          <a href="#catalogo" className="mt-8 inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded hover:bg-purple-700 transition-colors duration-300">
            Ver Catálogo
          </a>
        </div>
      </header>

      {/* Catálogo por Categoria */}
      <main id="catalogo" className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {equipmentData.map((category, index) => (
            <div key={index} className="mb-16">
              {/* Título de la Categoria */}
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h2 className="text-3xl font-bold text-white border-b-2 border-purple-500 pb-2">
                  {category.category}
                </h2>
              </div>

              {/* Lista de Equipos*/}
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-lg list-disc list-inside ml-4 md:ml-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

     {/* Contactar */}
     <section className="bg-gray-900 py-20">
         <div className="max-w-4xl mx-auto text-center px-4">
             <h2 className="text-3xl font-bold text-white">¿No encuentras lo que buscas o necesitas una cotización a medida?</h2>
             <p className="text-gray-400 mt-4 mb-8">
                 Nuestro equipo está listo para asesorarte y armar el paquete perfecto para tu proyecto.
             </p>
             <a 
                 href="/contacto" 
                 className="bg-white text-black font-bold py-3 px-12 rounded hover:bg-gray-200 transition-colors duration-300 text-lg"
             >
                 Contactar para Cotizar
             </a>
         </div>
     </section>

    </div>
  );
};

export default ArriendoPage;