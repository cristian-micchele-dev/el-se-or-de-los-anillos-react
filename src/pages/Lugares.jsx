import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MapaInteractivo from '../components/MapaInteractivo'
import './Lugares.css'

function Lugares() {
  return (
    <>
      <Header />
      <main className="lugares-main">
        {/* Mapa Interactivo */}
        <MapaInteractivo />
        
      </main>
      <Footer />
    </>
  )
}

export default Lugares