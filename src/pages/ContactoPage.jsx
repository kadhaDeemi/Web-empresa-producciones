import React from 'react';

const ContactoPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Encabezado de la Página */}
      <header className="pt-32 pb-20 text-center bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Hablemos</h1>
          <p className="mt-4 text-lg text-gray-400">
            ¿Tienes un proyecto en mente? Estamos listos para escucharte.
          </p>
        </div>
      </header>

      {/* Contenido Principal: Formulario e Información */}
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Columna Izquierda: Información de Contacto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
            <p className="text-gray-400 mb-8">
              Puedes contactarnos a través de este formulario, o si prefieres, por cualquiera de estos canales. ¡Respondemos rápido!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="ml-4 text-lg">contacto@sdcproducciones.com</span>
              </div>
              {/* Teléfono */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="ml-4 text-lg">+56 9 1234 5678</span>
              </div>
              {/* Ubicación (Opcional) */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="ml-4 text-lg">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300">Nombre</label>
                <input type="text" id="name" name="name" className="mt-2 block w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-2 block w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-300">Asunto</label>
                <input type="text" id="subject" name="subject" className="mt-2 block w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300">Mensaje</label>
                <textarea id="message" name="message" rows="5" className="mt-2 block w-full bg-gray-800 border border-gray-700 rounded-md p-3 focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ContactoPage;