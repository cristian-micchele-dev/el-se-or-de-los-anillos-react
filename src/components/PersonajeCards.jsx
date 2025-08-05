import './PersonajesCards.css';
import { useState } from 'react';

function PersonajesCards({ personajes }) {
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);

  const openModal = (personaje) => {
    setSelectedPersonaje(personaje);
  };

  const closeModal = () => {
    setSelectedPersonaje(null);
  };

  return (
    <div className='principal-container-personaje'>
      <section className="personajes-container">
        {personajes.map((personaje, index) => (
          <div
            key={`${personaje.nombre}-${index}`}
            className="personaje-card"
            style={{ backgroundImage: `url(${personaje.imagen})` }}
            onClick={() => openModal(personaje)}
          >
            <div className="personaje-overlay" />
            <div className="personaje-content">
              <h3>{personaje.nombre}</h3>
              <p>{personaje.descripcion}</p>
              <button className="ver-mas-btn">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </section>
      
      {/* Modal */}
      {selectedPersonaje && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{selectedPersonaje.nombre}</h2>
            <p>{selectedPersonaje.descripcionDetallada}</p>
            <div className="personaje-details">
              <p><strong>Origen:</strong> {selectedPersonaje.origen}</p>
              <p><strong>Arma:</strong> {selectedPersonaje.arma}</p>
              <p><strong>Habilidades:</strong> {selectedPersonaje.habilidades?.join(', ')}</p>
              <blockquote>{selectedPersonaje.cita}</blockquote>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonajesCards;

