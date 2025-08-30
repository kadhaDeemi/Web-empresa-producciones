import React from 'react';

const ProjectCard = ({ image, title, category }) => {
  return (
    // El 'group' nos permite aplicar efectos hover desde el contenedor padre a los hijos
    <div className="group cursor-pointer">
      {/* Contenedor de la img */}
      <div className="overflow-hidden rounded-lg  h-64 sm:h-80">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Info del Proyecto */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;