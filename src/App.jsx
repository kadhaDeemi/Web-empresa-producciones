
import { Routes, Route, useLocation } from 'react-router-dom'; // <-- Añadir useLocation
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ArriendoPage from './pages/ArriendoPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import ProyectosPage from './pages/ProyectosPage';
import PantallasPage from './pages/PantallasPage';
import IluminacionPage from './pages/IluminacionPage';
import EscenariosPage from './pages/EscenariosPage';
import OtrosPage from './pages/OtrosPage';
function App() {
  const location = useLocation(); 
  return (
    <>  
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <AnimatePresence mode='wait' initial={false}> {/* mode='wait' espera a que la animación de salida termine */}
          <Routes location={location} key={location.pathname}> 
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/arriendo" element={<ArriendoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/nosotros" element={<NosotrosPage/>} />
        <Route path="/proyectos" element={<ProyectosPage/>} />
        <Route path='servicios/pantallas' element={<PantallasPage/>} />
        <Route path="/servicios/iluminacion" element={<IluminacionPage />} />
        <Route path="/servicios/escenarios" element={<EscenariosPage />} />
        <Route path="/servicios/otros" element={<OtrosPage />} />
      </Routes>
      </AnimatePresence>
      </main>
      <Footer/>
      </div>
      
    </>
  );
}

export default App;