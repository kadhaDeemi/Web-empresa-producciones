// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ArriendoPage from './pages/ArriendoPage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import ProyectosPage from './pages/ProyectosPage';

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/arriendo" element={<ArriendoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/nosotros" element={<NosotrosPage/>} />
        <Route path="/proyectos" element={<ProyectosPage/>} />
      </Routes>
      </main>
      <Footer/>
      </div>
      
    </>
  );
}

export default App;