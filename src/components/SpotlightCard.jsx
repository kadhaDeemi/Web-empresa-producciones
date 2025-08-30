import React, { useState, useEffect, useRef } from 'react';

const SpotlightCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: '-100%', y: '-100%' });

  useEffect(() => {
    // Obtiene las coordenadas del mouse en la tarjeta
    const handleMouseMove = (event) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x: `${x}px`, y: `${y}px` });
      }
    };
    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      currentCardRef.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (currentCardRef) {
        currentCardRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  const handleMouseLeave = () => {
    setMousePosition({ x: '-100%', y: '-100%' });
  };

  return (
    <div
      ref={cardRef}
      onMouseLeave={handleMouseLeave}
      style={{ '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }}
      className={`
        relative p-6 md:p-8 rounded-lg bg-black border-2 
        border-red-700 md:border-gray-700 md:hover:border-red-700 
        md:hover:shadow-lg md:hover:shadow-red-500/20 
        overflow-hidden group
        ${className}
      `}
    >
      {/* Brillo Estático (Solo para Móvil) */}
      <div 
        aria-hidden="true"
        className="md:hidden absolute inset-0 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15), transparent)'
        }}
      ></div>

      {/* Brillo Dinámico (Solo para Escritorio) */}
      <div 
        aria-hidden="true"
        className="hidden md:block absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(240, 34, 34, 0.2), transparent)`
        }}
      />
      
      {/* El contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;