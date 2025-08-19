// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ArriendoPage from './pages/ArriendoPage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/arriendo" element={<ArriendoPage />} />
        <Route path="/nosotros" element={<div>Página Nosotros en construcción</div>} />
        <Route path="/proyectos" element={<div>Página Proyectos/Eventos en construcción</div>} />
        <Route path="/contacto" element={<div>Página Contacto en construcción</div>} />
      </Routes>
    </>
  );
}

export default App;