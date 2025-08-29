import React, { useState, useEffect } from 'react';
import EquipmentCard from '../components/EquipmentCard';

// --- IMPORTA TUS IMÁGENES DE EQUIPOS AQUÍ ---
import imgCamaraSony from '../assets/equipos/camara-sony.webp';
import imgLuzAputure from '../assets/equipos/luz-aputure.jpg';
import imgMicrofono from '../assets/equipos/microfono.jpg';

// --- BASE DE DATOS DE TUS EQUIPOS ---
const allEquipment = [
  { id: 1, name: 'Sony FX6 Cinema Line', category: 'Cámaras', image: imgCamaraSony },
  { id: 2, name: 'Aputure 600d Pro', category: 'Iluminación', image: imgLuzAputure },
  { id: 3, name: 'Micrófono Sennheiser MKH 416', category: 'Sonido', image: imgMicrofono },
  // ...Añade más equipos aquí
];

const filterCategories = ['Todos', 'Cámaras', 'Iluminación', 'Sonido'];

const ArriendoPage = () => {
  const [filter, setFilter] = useState('Todos');
  const [filteredEquipment, setFilteredEquipment] = useState(allEquipment);

  useEffect(() => {
    if (filter === 'Todos') {
      setFilteredEquipment(allEquipment);
    } else {
      setFilteredEquipment(allEquipment.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="pt-32 pb-20 text-center bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Catálogo de Arriendo</h1>
          <p className="mt-4 text-lg text-gray-400">
            Equipamiento profesional para llevar tu producción al siguiente nivel.
          </p>
        </div>
      </header>

      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* --- Barra de Filtros --- */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
            {filterCategories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors duration-300 ${filter === category ? 'bg-red-700 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* --- Grilla de Equipos --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredEquipment.map(item => (
              <EquipmentCard 
                key={item.id}
                name={item.name}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArriendoPage;