import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extrae el "pathname" (ej "/", "/servicios", etc.) de la ubicación actual.
  const { pathname } = useLocation();

  // Este efecto se ejecutará cada vez que el "pathname" cambie.
  useEffect(() => {
    // Le dice a la ventana del navegador que se desplace a la posición (0, 0) - arriba del todo.
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada en la pantalla, solo ejecuta la lógica del efecto.
  return null;
};

export default ScrollToTop;