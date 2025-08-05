import { useState } from 'react';
import './MapaInteractivo.css';

function MapaInteractivo() {
  const [lugarSeleccionado, setLugarSeleccionado] = useState(null);
  const [mostrarTooltip, setMostrarTooltip] = useState(false);
  const [posicionTooltip, setPosicionTooltip] = useState({ x: 0, y: 0 });
  const [mostrarHistorias, setMostrarHistorias] = useState(false);

  const lugares = {
    comarca: {
      nombre: "La Comarca",
      descripcion: "Hogar pacífico de los hobbits con colinas verdes y casas redondas.",
      coordenadas: { top: '15%', left: '20%' },
      color: '#4CAF50',
      icono: '🏡',
      detalles: {
        poblacion: "Hobbits",
        clima: "Templado",
        caracteristica: "Paz y tranquilidad"
      },
      historia: "La Comarca fue establecida en el año 1601 de la Tercera Edad por los hermanos hobbits Marcho y Blanco, quienes recibieron estas tierras del Rey Argeleb II de Arthedain. Durante más de mil años, los hobbits vivieron en paz, desarrollando una sociedad agrícola próspera. La Comarca se dividió en cuatro cuadrantes y fue gobernada por el Thain. Este lugar idílico se convirtió en el hogar de Bilbo y Frodo Bolsón, siendo el punto de partida de las grandes aventuras que cambiarían el destino de la Tierra Media."
    },
    rivendel: {
      nombre: "Rivendel",
      descripcion: "Valle oculto de los elfos, refugio de sabiduría y belleza.",
      coordenadas: { top: '25%', left: '45%' },
      color: '#9C27B0',
      icono: '✨',
      detalles: {
        poblacion: "Elfos",
        clima: "Mágico",
        caracteristica: "Sabiduría ancestral"
      },
      historia: "Rivendel, también conocido como Imladris, fue fundado por Elrond en el año 1697 de la Segunda Edad como refugio durante la Guerra de los Elfos y Sauron. Este valle oculto se convirtió en un santuario de conocimiento y curación, donde se preservaron los antiguos saberes élficos. Elrond, portador de Vilya, uno de los Tres Anillos de los Elfos, mantuvo este lugar protegido durante milenios. Aquí se celebró el Concilio que decidió el destino del Anillo Único, y desde aquí partió la Comunidad del Anillo en su misión hacia Mordor."
    },
    minasTirith: {
      nombre: "Minas Tirith",
      descripcion: "La Ciudad Blanca, capital de Gondor con siete niveles.",
      coordenadas: { top: '60%', left: '50%' },
      color: '#2196F3',
      icono: '🏰',
      detalles: {
        poblacion: "Hombres de Gondor",
        clima: "Mediterráneo",
        caracteristica: "Fortaleza inexpugnable"
      },
      historia: "Originalmente llamada Minas Anor (Torre del Sol), fue construida por los Númenóreanos en el año 3320 de la Segunda Edad. Tras la caída de Minas Ithil ante los Nazgûl, fue renombrada como Minas Tirith (Torre de Guardia) en el año 2002 de la Tercera Edad. La ciudad de siete niveles se convirtió en la capital de Gondor y símbolo de resistencia contra la oscuridad. Su Torre Blanca albergaba el palantír de Anor, y desde sus muros se defendió el reino durante la Guerra del Anillo, culminando en la coronación de Aragorn como Rey Elessar."
    },
    mordor: {
      nombre: "Mordor",
      descripcion: "Tierra sombría de Sauron, dominada por el Monte del Destino.",
      coordenadas: { top: '70%', left: '75%' },
      color: '#F44336',
      icono: '🌋',
      detalles: {
        poblacion: "Orcos y criaturas oscuras",
        clima: "Volcánico",
        caracteristica: "Tierra desolada"
      },
      historia: "Mordor, la Tierra Negra, fue elegida por Sauron como su fortaleza en el año 1000 de la Segunda Edad. Rodeada por las Montañas de la Sombra y las Montañas de Ceniza, esta región volcánica se convirtió en el corazón de la oscuridad. En el Monte del Destino (Orodruin), Sauron forjó el Anillo Único alrededor del año 1600 de la Segunda Edad. Desde la torre de Barad-dûr, Sauron dirigió sus ejércitos en múltiples guerras. Tras su derrota, Mordor quedó desolado, pero el Señor Oscuro regresó en la Tercera Edad, reconstruyendo su poder hasta la destrucción final del Anillo."
    },
    lothlorien: {
      nombre: "Lothlórien",
      descripcion: "Bosque dorado de Galadriel, protegido por magia élfica.",
      coordenadas: { top: '45%', left: '55%' },
      color: '#FF9800',
      icono: '🌳',
      detalles: {
        poblacion: "Elfos Galadhrim",
        clima: "Encantado",
        caracteristica: "Bosque eterno"
      },
      historia: "Lothlórien, el Bosque Dorado, fue establecido en la Segunda Edad por los elfos Nandor. En el año 1981 de la Tercera Edad, Galadriel y Celeborn se convirtieron en sus señores tras la caída del rey Amroth. Protegido por el poder de Nenya, uno de los Tres Anillos élficos, el bosque existía fuera del tiempo normal. Los árboles mallorn dorados creaban un reino de belleza eterna donde moraban los Galadhrim (Pueblo de los Árboles). Aquí la Comunidad del Anillo encontró refugio y Galadriel mostró visiones del futuro en su espejo, antes de partir hacia las Tierras Imperecederas."
    },
    rohan: {
      nombre: "Rohan",
      descripcion: "Tierra de los jinetes, con vastas praderas y caballos.",
      coordenadas: { top: '50%', left: '35%' },
      color: '#8BC34A',
      icono: '🐎',
      detalles: {
        poblacion: "Rohirrim",
        clima: "Continental",
        caracteristica: "Maestros ecuestres"
      },
      historia: "Rohan fue otorgado a los Éothéod por el Senescal Cirion de Gondor en el año 2510 de la Tercera Edad, tras la victoria de Eorl el Joven en la Batalla del Campo de Celebrant. Los Rohirrim, descendientes de los Hombres del Norte, establecieron una cultura ecuestre única en las vastas praderas de Calenardhon. Gobernados desde Edoras por la Casa de Eorl, los Señores de los Caballos mantuvieron una alianza inquebrantable con Gondor. Sus jinetes, montando los legendarios mearas, se convirtieron en la caballería más temida de la Tierra Media, crucial en la victoria final contra Sauron."
    },
    isengard: {
      nombre: "Isengard",
      descripcion: "Fortaleza circular de Saruman con la torre de Orthanc.",
      coordenadas: { top: '40%', left: '30%' },
      color: '#607D8B',
      icono: '🗼',
      detalles: {
        poblacion: "Uruk-hai",
        clima: "Industrial",
        caracteristica: "Maquinaria de guerra"
      },
      historia: "Isengard fue construido por los Númenóreanos durante la Segunda Edad como fortaleza fronteriza de Gondor. La indestructible torre de Orthanc, tallada en roca negra, albergaba uno de los palantíri. En el año 2759 de la Tercera Edad, Saruman el Blanco recibió las llaves de Orthanc del Senescal Beren. Inicialmente aliado de Gondor, Saruman gradualmente se corrompió, transformando Isengard en una fortaleza industrial donde creó su ejército de Uruk-hai. La traición de Saruman culminó en la Guerra del Anillo, hasta que los Ents destruyeron sus máquinas de guerra y lo aprisionaron en Orthanc."
    },
    abismoHelm: {
      nombre: "Abismo de Helm",
      descripcion: "Fortaleza inexpugnable en las Montañas Blancas.",
      coordenadas: { top: '55%', left: '40%' },
      color: '#795548',
      icono: '⚔️',
      detalles: {
        poblacion: "Rohirrim (defensa)",
        clima: "Montañoso",
        caracteristica: "Bastión defensivo"
      },
      historia: "El Abismo de Helm fue construido por los Hombres de Gondor durante la Segunda Edad como puesto avanzado en las Montañas Blancas. Nombrado en honor a Helm Mandoferro, noveno Rey de Rohan, quien se refugió aquí durante el Largo Invierno (2758-2759 T.E.). La fortaleza, también conocida como Cuernavilla, consistía en el Torreón y el Muro Deeping que protegía la entrada al desfiladero. Durante la Guerra del Anillo, se libró aquí la épica Batalla del Abismo de Helm, donde Aragorn, Legolas, Gimli y los Rohirrim resistieron el asalto de 10,000 Uruk-hai de Saruman hasta la llegada de Gandalf y Erkenbrand al amanecer."
    }
  };

  const manejarClickLugar = (lugar) => {
    setLugarSeleccionado(lugar);
  };

  const manejarMouseEnter = (evento, lugar) => {
    setMostrarTooltip(true);
    setPosicionTooltip({
      x: evento.clientX,
      y: evento.clientY
    });
    setLugarSeleccionado(lugar);
  };

  const manejarMouseLeave = () => {
    setMostrarTooltip(false);
  };

  const manejarMouseMove = (evento) => {
    if (mostrarTooltip) {
      setPosicionTooltip({
        x: evento.clientX,
        y: evento.clientY
      });
    }
  };

  const toggleHistorias = () => {
    setMostrarHistorias(!mostrarHistorias);
  };

  return (
    <div className="mapa-interactivo-container">
      <div className="mapa-titulo">
        <h2>🗺️ Mapa Interactivo de la Tierra Media</h2>
        <p>Haz clic en los lugares para explorar información detallada</p>
      </div>
      
      <div 
        className="mapa-canvas"
        onMouseMove={manejarMouseMove}
      >
        {/* Fondo del mapa */}
        <div className="mapa-fondo">
          <div className="montanas-nubladas"></div>
          <div className="montanas-blancas"></div>
          <div className="rio-anduin"></div>
        </div>

        {/* Lugares interactivos */}
        {Object.entries(lugares).map(([key, lugar]) => (
          <div
            key={key}
            className={`lugar-marcador ${lugarSeleccionado?.nombre === lugar.nombre ? 'seleccionado' : ''}`}
            style={{
              top: lugar.coordenadas.top,
              left: lugar.coordenadas.left,
              '--color-lugar': lugar.color
            }}
            onClick={() => manejarClickLugar(lugar)}
            onMouseEnter={(e) => manejarMouseEnter(e, lugar)}
            onMouseLeave={manejarMouseLeave}
          >
            <div className="marcador-icono">{lugar.icono}</div>
            <div className="marcador-pulso"></div>
            <div className="marcador-nombre">{lugar.nombre}</div>
          </div>
        ))}

        {/* Rutas entre lugares */}
        <svg className="rutas-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Ruta de la Comunidad */}
          <path
            d="M 20 15 Q 35 25 45 25 Q 55 45 50 60"
            className="ruta comunidad"
            strokeDasharray="5,5"
          />
          {/* Ruta hacia Mordor */}
          <path
            d="M 50 60 Q 65 65 75 70"
            className="ruta mordor"
            strokeDasharray="3,3"
          />
        </svg>
      </div>

      {/* Panel de información */}
      {lugarSeleccionado && (
        <div className="panel-informacion">
          <div className="panel-header">
            <h3>
              <span className="panel-icono">{lugarSeleccionado.icono}</span>
              {lugarSeleccionado.nombre}
            </h3>
            <button 
              className="cerrar-panel"
              onClick={() => setLugarSeleccionado(null)}
            >
              ✕
            </button>
          </div>
          <div className="panel-contenido">
            <p className="descripcion">{lugarSeleccionado.descripcion}</p>
            <div className="detalles-grid">
              <div className="detalle-item">
                <span className="detalle-label">👥 Población:</span>
                <span className="detalle-valor">{lugarSeleccionado.detalles.poblacion}</span>
              </div>
              <div className="detalle-item">
                <span className="detalle-label">🌤️ Clima:</span>
                <span className="detalle-valor">{lugarSeleccionado.detalles.clima}</span>
              </div>
              <div className="detalle-item">
                <span className="detalle-label">⭐ Característica:</span>
                <span className="detalle-valor">{lugarSeleccionado.detalles.caracteristica}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip flotante */}
      {mostrarTooltip && lugarSeleccionado && (
        <div 
          className="tooltip-flotante"
          style={{
            left: posicionTooltip.x + 10,
            top: posicionTooltip.y - 10
          }}
        >
          <strong>{lugarSeleccionado.nombre}</strong>
          <br />
          {lugarSeleccionado.descripcion}
        </div>
      )}

      {/* Leyenda */}
      <div className="mapa-leyenda">
        <h4>🎯 Leyenda</h4>
        <div className="leyenda-items">
          <div className="leyenda-item">
            <div className="leyenda-linea comunidad"></div>
            <span>Ruta de la Comunidad</span>
          </div>
          <div className="leyenda-item">
            <div className="leyenda-linea mordor"></div>
            <span>Ruta hacia Mordor</span>
          </div>
          <div className="leyenda-item">
            <div className="leyenda-punto"></div>
            <span>Lugares importantes</span>
          </div>
        </div>
        
        {/* Botón para mostrar historias */}
        <div className="historias-toggle">
          <button 
            className="btn-historias"
            onClick={toggleHistorias}
          >
            📚 {mostrarHistorias ? 'Ocultar Historias' : 'Ver Historias de los Lugares'}
          </button>
        </div>
      </div>

      {/* Sección de historias */}
      {mostrarHistorias && (
        <div className="historias-container">
          <h3 className="historias-titulo">📜 Historias de la Tierra Media</h3>
          <div className="historias-grid">
            {Object.entries(lugares).map(([key, lugar]) => (
              <div key={key} className="historia-card">
                <div className="historia-header">
                  <span className="historia-icono">{lugar.icono}</span>
                  <h4 className="historia-nombre">{lugar.nombre}</h4>
                </div>
                <div className="historia-contenido">
                  <p className="historia-texto">{lugar.historia}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MapaInteractivo;