import React, { useState, useEffect, useRef } from 'react';

const SpotlightCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: '-100%', y: '-100%' });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cardRef.current) {
        // Obtiene las coordenadas del mouse en la tarjeta
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x: `${x}px`, y: `${y}px` });
      }
    };

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
        // Añadimos el listener cuando el mouse entra en la tarjeta
        currentCardRef.addEventListener('mousemove', handleMouseMove);
    }

    // Limpiamos el listener cuando el componente se desmonta o el mouse sale
    return () => {
      if (currentCardRef) {
        currentCardRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  // Resetea la posición cuando el mouse sale de la tarjeta
  const handleMouseLeave = () => {
    setMousePosition({ x: '-100%', y: '-100%' });
  };

  return (
    <div
      ref={cardRef}
      onMouseLeave={handleMouseLeave}
      // --mouse-x y --mouse-y son variables que see actualiza con React
      style={{ '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }}
      className={`relative p-8 rounded-lg bg-black border-2 border-gray-700 hover:border-red-700 transition-colors duration-300 ease-in-out overflow-hidden group hover:shadow-lg hover:shadow-red-500/20  ${className}`}>
      {/* foco d luz */}
      <div 
        className="absolute  inset-0 bg-radial-gradient from-red-600/30 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(240, 34, 34, 0.2), transparent)`
        }}
      />
      
      {/* se rendiriza acaa */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;