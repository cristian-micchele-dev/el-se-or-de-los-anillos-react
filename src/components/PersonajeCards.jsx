import './PersonajesCards.css';

function PersonajesCards({ personajes }) {
  return (
    <div className='principal-container-personaje'>
      <section className="personajes-container">
        {personajes.map(({ nombre, descripcion, imagen }, index) => (
          <div
            key={`${nombre}-${index}`}  // Key único para evitar duplicados
            className="personaje-card"
            style={{ backgroundImage: `url(${imagen})` }}
          >
            <div className="personaje-overlay" />
            <div className="personaje-content">
              <h3>{nombre}</h3>
              <p>{descripcion}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PersonajesCards;

