import React from 'react';

const EquipmentCard = ({ image, name, category }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-2">
      <div className="relative h-56">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <span className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold uppercase px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
        <a href="/contacto" className="w-full text-center bg-red-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-800 transition-colors">
          Cotizar
        </a>
      </div>
    </div>
  );
};

export default EquipmentCard;