import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './AnillosDelPoder.css'

function AnillosDelPoder() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null)

  const eventos = [
    {
      id: 1,
      año: "1500 S.E.",
      titulo: "Llegada de Annatar",
      descripcion: "Sauron, disfrazado como Annatar 'Señor de los Regalos', llega a Eregion y se gana la confianza de los herreros elfos.",
      icono: "👤",
      color: "#8b0000",
      detalles: "Annatar se presenta como un emisario de los Valar, ofreciendo conocimiento sobre la forja. Solo Gil-galad y Elrond desconfían de él."
    },
    {
      id: 2,
      año: "1590 S.E.",
      titulo: "Forja de los Anillos de Poder",
      descripcion: "Celebrimbor y los herreros de Eregion comienzan a forjar los Anillos de Poder bajo la guía de Annatar.",
      icono: "🔨",
      color: "#c58e3c",
      detalles: "Se forjan 16 anillos: 7 para los Señores Enanos y 9 para los Reyes Mortales. Todos contienen parte del conocimiento de Sauron."
    },
    {
      id: 3,
      año: "1590 S.E.",
      titulo: "Los Tres Anillos Élficos",
      descripcion: "Celebrimbor forja en secreto los Tres Anillos Élficos: Vilya, Narya y Nenya, sin la influencia de Sauron.",
      icono: "✨",
      color: "#9C27B0",
      detalles: "Vilya (Aire), Narya (Fuego) y Nenya (Agua) fueron creados sin que Sauron los tocara, manteniéndolos libres de corrupción."
    },
    {
      id: 4,
      año: "1600 S.E.",
      titulo: "El Anillo Único",
      descripcion: "Sauron forja el Anillo Único en secreto en el Monte del Destino para controlar todos los demás anillos.",
      icono: "💍",
      color: "#FF4444",
      detalles: "'Un Anillo para gobernarlos a todos, Un Anillo para encontrarlos, Un Anillo para atraerlos a todos y atarlos en las tinieblas.'"
    },
    {
      id: 5,
      año: "1693 S.E.",
      titulo: "Guerra de los Elfos y Sauron",
      descripcion: "Sauron revela su verdadera identidad y exige todos los Anillos. Comienza la guerra cuando los elfos se niegan.",
      icono: "⚔️",
      color: "#8b0000",
      detalles: "Los elfos ocultan los Tres Anillos. Gil-galad recibe Vilya, Galadriel recibe Nenya, y Círdan recibe Narya."
    },
    {
      id: 6,
      año: "1697 S.E.",
      titulo: "Caída de Eregion",
      descripcion: "Sauron conquista Eregion y mata a Celebrimbor, pero no encuentra los Tres Anillos Élficos.",
      icono: "🔥",
      color: "#8b0000",
      detalles: "Celebrimbor es torturado pero no revela la ubicación de los Tres. Sauron recupera los 16 anillos restantes."
    },
    {
      id: 7,
      año: "3429 S.E.",
      titulo: "Última Alianza",
      descripcion: "Gil-galad y Elendil forman la Última Alianza de Elfos y Hombres contra Sauron.",
      icono: "🤝",
      color: "#2196F3",
      detalles: "La mayor alianza de la historia une a elfos, hombres y enanos en una guerra final contra la oscuridad."
    },
    {
      id: 8,
      año: "3441 S.E.",
      titulo: "Derrota de Sauron",
      descripcion: "Isildur corta el dedo de Sauron y toma el Anillo, pero se niega a destruirlo en el Monte del Destino.",
      icono: "✂️",
      color: "#FF9800",
      detalles: "Con la pérdida del Anillo, Sauron es derrotado, pero Isildur sucumbe a su poder y no lo destruye."
    },
    {
      id: 9,
      año: "2 T.E.",
      titulo: "Desastre de los Campos Gladios",
      descripcion: "Isildur es emboscado por orcos. El Anillo se pierde en el río Anduin durante 2500 años.",
      icono: "🌊",
      color: "#607D8B",
      detalles: "El Anillo traiciona a Isildur, resbalando de su dedo. Permanecerá perdido en el lecho del río por milenios."
    },
    {
      id: 10,
      año: "2463 T.E.",
      titulo: "Déagol encuentra el Anillo",
      descripcion: "Déagol encuentra el Anillo en el río. Sméagol lo mata y toma el Anillo, convirtiéndose en Gollum.",
      icono: "🎣",
      color: "#4CAF50",
      detalles: "El Anillo corrompe a Sméagol, quien se convierte en Gollum y vive en las Montañas Nubladas por 500 años."
    },
    {
      id: 11,
      año: "2941 T.E.",
      titulo: "Bilbo encuentra el Anillo",
      descripcion: "Bilbo Bolsón encuentra el Anillo en la cueva de Gollum durante su aventura con los enanos.",
      icono: "🏠",
      color: "#4CAF50",
      detalles: "El Anillo 'elige' a Bilbo. Gollum pierde su 'tesoro' y Bilbo lo lleva de vuelta a la Comarca."
    },
    {
      id: 12,
      año: "3018 T.E.",
      titulo: "Frodo hereda el Anillo",
      descripcion: "Gandalf revela a Frodo la verdadera naturaleza del Anillo. Comienza la misión para destruirlo.",
      icono: "🧙‍♂️",
      color: "#9E9E9E",
      detalles: "Gandalf confirma que es el Anillo Único. Frodo acepta la misión de llevarlo al Monte del Destino."
    },
    {
      id: 13,
      año: "3019 T.E.",
      titulo: "Destrucción del Anillo",
      descripcion: "Gollum cae al fuego del Monte del Destino con el Anillo, destruyéndolo para siempre.",
      icono: "🌋",
      color: "#FF4444",
      detalles: "Con la destrucción del Anillo Único, Sauron es derrotado definitivamente y los Nazgûl son destruidos."
    }
  ]

  const manejarClickEvento = (evento) => {
    setEventoSeleccionado(eventoSeleccionado?.id === evento.id ? null : evento)
  }

  return (
    <>
      <Header />
      <main className="anillos-main">
        <section className="timeline-container">
          <h2 className="timeline-title">📜 Cronología de los Anillos de Poder</h2>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            
            {eventos.map((evento, index) => (
              <div 
                key={evento.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                  eventoSeleccionado?.id === evento.id ? 'selected' : ''
                }`}
                onClick={() => manejarClickEvento(evento)}
              >
                <div className="timeline-marker" style={{ backgroundColor: evento.color }}>
                  <span className="timeline-icon">{evento.icono}</span>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-year">{evento.año}</div>
                  <h3 className="timeline-event-title">{evento.titulo}</h3>
                  <p className="timeline-description">{evento.descripcion}</p>
                  
                  {eventoSeleccionado?.id === evento.id && (
                    <div className="timeline-details">
                      <p>{evento.detalles}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="anillos-info">
          <div className="anillos-grid">
            <div className="anillo-card elficos">
              <div className="card-header">
                <h3>✨ Los Tres Anillos Élficos</h3>
                <p className="anillo-intro">Los más poderosos después del Único, forjados en secreto por Celebrimbor.</p>
              </div>
              
              <div className="anillos-container">
                <div className="anillo-item vilya">
                  <div className="anillo-header">
                    <span className="anillo-icono">🌪️</span>
                    <div className="anillo-title">
                      <span className="anillo-nombre">Vilya</span>
                      <span className="anillo-subtitulo">Anillo del Aire</span>
                    </div>
                  </div>
                  
                  <div className="anillo-detalles">
                    <div className="detalle-row">
                      <span className="detalle-label">Portador:</span>
                      <span className="detalle-valor">Elrond</span>
                    </div>
                    <div className="detalle-row">
                      <span className="detalle-label">Gema:</span>
                      <span className="detalle-valor">Zafiro azul</span>
                    </div>
                  </div>
                </div>
                
                <div className="anillo-item narya">
                  <div className="anillo-header">
                    <span className="anillo-icono">🔥</span>
                    <div className="anillo-title">
                      <span className="anillo-nombre">Narya</span>
                      <span className="anillo-subtitulo">Anillo del Fuego</span>
                    </div>
                  </div>
                  
                  <div className="anillo-detalles">
                    <div className="detalle-row">
                      <span className="detalle-label">Portador:</span>
                      <span className="detalle-valor">Gandalf</span>
                    </div>
                    <div className="detalle-row">
                      <span className="detalle-label">Gema:</span>
                      <span className="detalle-valor">Rubí rojo</span>
                    </div>
                  </div>
                </div>
                
                <div className="anillo-item nenya">
                  <div className="anillo-header">
                    <span className="anillo-icono">💧</span>
                    <div className="anillo-title">
                      <span className="anillo-nombre">Nenya</span>
                      <span className="anillo-subtitulo">Anillo del Agua</span>
                    </div>
                  </div>
                  
                  <div className="anillo-detalles">
                    <div className="detalle-row">
                      <span className="detalle-label">Portador:</span>
                      <span className="detalle-valor">Galadriel</span>
                    </div>
                    <div className="detalle-row">
                      <span className="detalle-label">Gema:</span>
                      <span className="detalle-valor">Diamante blanco</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="anillo-card enanos">
              <h3>⛏️ Los Siete Anillos de los Enanos</h3>
              <p className="anillo-intro">Forjados por los Herreros Élficos bajo la guía de Sauron, otorgaron gran poder pero también maldición.</p>
              
              <div className="anillo-detalles-section">
                <h4>🏔️ Destino de los Anillos:</h4>
                <ul>
                  <li><strong>4 Anillos:</strong> Consumidos por el fuego de los dragones</li>
                  <li><strong>3 Anillos:</strong> Recuperados por Sauron</li>
                </ul>
                
                <h4>⚡ Poderes Otorgados:</h4>
                <ul>
                  <li>Multiplicación de riquezas y tesoros</li>
                  <li>Habilidades extraordinarias en la forja</li>
                  <li>Longevidad extendida</li>
                  <li>Resistencia a daños físicos</li>
                </ul>
                
                <h4>⚠️ Maldición:</h4>
                <p>Despertaron la codicia extrema en sus portadores, atrayendo dragones que buscaban los tesoros acumulados. Los enanos se volvieron obsesivos y aislados.</p>
              </div>
            </div>

            <div className="anillo-card hombres">
              <h3>👑 Los Nueve Anillos de los Hombres</h3>
              <p className="anillo-intro">Los más trágicos de todos los anillos, corrompieron completamente a sus portadores mortales.</p>
              
              <div className="anillo-detalles-section">
                <h4>👥 Los Nueve Nazgûl:</h4>
                <ul>
                  <li><strong>El Rey Brujo de Angmar:</strong> Líder de los Nazgûl</li>
                  <li><strong>Khamûl el Oriental:</strong> Segundo al mando</li>
                  <li><strong>7 Reyes sin nombre:</strong> Antiguos señores de los hombres</li>
                </ul>
                
                <h4>🌑 Transformación:</h4>
                <p>Los portadores fueron reyes, hechiceros y guerreros poderosos que gradualmente se desvanecieron del mundo físico, convirtiéndose en espectros invisibles esclavizados por Sauron.</p>
                
                <h4>💀 Poderes como Nazgûl:</h4>
                <ul>
                  <li>Invisibilidad en el mundo físico</li>
                  <li>Inmunidad a armas normales</li>
                  <li>Aura de terror paralizante</li>
                  <li>Conexión telepática con Sauron</li>
                  <li>Capacidad de rastrear el Anillo Único</li>
                </ul>
              </div>
            </div>

            <div className="anillo-card unico">
              <h3>💍 El Anillo Único</h3>
              <p className="anillo-intro">"Un Anillo para gobernarlos a todos, Un Anillo para encontrarlos, Un Anillo para atraerlos a todos y atarlos en las tinieblas."</p>
              
              <div className="anillo-detalles-section">
                <h4>🔥 Creación:</h4>
                <p>Forjado por Sauron en secreto en los fuegos del Monte del Destino, vertiendo gran parte de su poder, malicia y voluntad en el anillo.</p>
                
                <h4>⚡ Poderes Supremos:</h4>
                <ul>
                  <li><strong>Control Total:</strong> Dominio sobre todos los demás anillos</li>
                  <li><strong>Invisibilidad:</strong> Para portadores mortales</li>
                  <li><strong>Longevidad:</strong> Extiende la vida artificialmente</li>
                  <li><strong>Amplificación:</strong> Aumenta poderes naturales</li>
                  <li><strong>Corrupción:</strong> Corrompe gradualmente al portador</li>
                </ul>
                
                <h4>🌋 Destrucción:</h4>
                <p>Solo puede ser destruido en los fuegos donde fue forjado. Su destrucción causó la caída definitiva de Sauron y el fin de su poder en la Tierra Media.</p>
                
                <h4>📜 Inscripción (en Lengua Negra):</h4>
                <p className="inscripcion">"Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul."</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AnillosDelPoder