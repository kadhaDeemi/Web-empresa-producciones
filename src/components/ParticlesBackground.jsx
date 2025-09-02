// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // o 'tsparticles' para más opciones

const ParticlesBackground = ({ className }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine); // Para depuración
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container); // Para depuración
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false }, // Muy importante: para que ocupe solo el contenedor
          background: {
            color: {
              value: "transparent", // El fondo real será el de tu header
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "interact", // "grab" o "bubble" también son interesantes
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              interact: { // Modo para el hover (ej. línea que conecta)
                distance: 120, // Distancia para que las partículas interactúen
                line_linked: {
                  opacity: 0.5,
                },
              },
              grab: {
                distance: 120,
                links: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.8,
                speed: 3
              }
            },
          },
          particles: {
            color: {
              value: "#f40f0fff", // Color rojo principal para las estrellas
              animation: {
                enable: true,
                speed: 20,
                sync: false
              }
            },
            links: {
              color: "#500303ff", // Color de las líneas que conectan
              distance: 150,
              enable: false, // Por defecto deshabilitadas, se activan con el hover en modo 'interact'
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2, // Velocidad de movimiento
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // Cantidad de partículas
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            shape: {
              type: "polygon", // Puedes probar con "star", "triangle", "polygon"
            },
            size: {
              value: { min: 1, max: 3 }, // Tamaño de las partículas
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.8,
                sync: false
              }
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;