import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

import imgProyecto1 from '../assets/Proyecto1.webp';
import imgProyecto2 from '../assets/Proyecto2.webp';
import imgProyecto3 from '../assets/Proyecto3.webp';



const allProjects = [
  { id: 1, image: imgProyecto1, title: 'Cliente Corporativo X', category: 'Video' },
  { id: 2, image: imgProyecto2, title: 'Lanzamiento Producto Y', category: 'Evento' },
  { id: 3, image: imgProyecto3, title: 'Artista Musical Z', category: 'Video' },

];

const ProyectosPage = () => {
    //filtro
  const [filter, setFilter] = useState('Todos');
  // estado filtros
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    // function para cambiar estaddo filtros
    if (filter === 'Todos') {
      setFilteredProjects(allProjects);
    } else {
      const newProjects = allProjects.filter(project => project.category === filter);
      setFilteredProjects(newProjects);
    }
  }, [filter]);

  // categoria de filtros
  const filterCategories = ['Todos', 'Evento', 'Video', 'BTL'];

  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}  
    exit={{ opacity: 0, y: -20 }}    
    transition={{ duration: 0.5 }} 
    className="bg-black text-white min-h-screen">
      {/* Encabezado de la Página */}
      <header className="pt-32 pb-20 text-center bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700">NUESTRO TRABAJO</h1>
          <p className="mt-4 text-lg text-gray-200">
            Explora la diversidad y calidad de los proyectos que hemos traído a la vida.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* botones filtro */}
          <div className="flex justify-center space-x-4 mb-12">
            {filterCategories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
                  ${filter === category ? 'bg-red-800 text-white border-2 border-red-800' : 'border-2 border-white text-white hover:bg-red-800 hover:border-red-800'}`
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ProyectosPage;