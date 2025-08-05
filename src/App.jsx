
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LaComunidad from './pages/LaComunidad';
import Lugares from './pages/Lugares';
import AnillosDelPoder from './pages/AnillosDelPoder';
// Eliminar esta línea:
// import PeliculasLibros from './pages/PeliculasLibros';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/la-comunidad" element={<LaComunidad />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/anillos-del-poder" element={<AnillosDelPoder />} />
        {/* Eliminar esta línea: */}
        {/* <Route path="/peliculas-libros" element={<PeliculasLibros />} /> */}
      </Routes>
    </>
  )
}

export default App
