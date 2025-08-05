import Header from "../components/Header";
import Footer from "../components/Footer";
import PersonajesCards from "../components/PersonajeCards";
import frodoCard from "../assets/frodoCard.png";
import gandalfCard from "../assets/gandalf.jpg";
import aragornCard from "../assets/aragorn.jpg";
import legolasCard from "../assets/legolas.jpg";
import gimliCard from "../assets/gimli.jpg";
import sauronCard from "../assets/sauron.jpg";
import golumCard from "../assets/golum.jpg";
import LaComunidadImage from "../assets/LaComunidad.jpg";
import './LaComunidad.css';

const personajes = [
  {
    nombre: "Frodo Bolsón",
    descripcion: "El hobbit destinado a destruir el Anillo Único y vencer al malvado Sauron.",
    descripcionDetallada: "Frodo Bolsón es un hobbit de la Comarca que hereda el Anillo Único de su primo Bilbo. A pesar de su naturaleza pacífica, acepta la misión de destruir el anillo en el Monte del Destino, mostrando una valentía extraordinaria.",
    origen: "La Comarca, Bolsón Cerrado",
    habilidades: ["Resistencia al poder del Anillo", "Sigilo", "Determinación inquebrantable"],
    arma: "Dardo (espada élfica)",
    cita: "\"Ojalá no hubiera pasado nada de esto en mi tiempo\"",
    categoria: "hobbit",
    imagen: frodoCard,
  },
  {
    nombre: "Aragorn",
    descripcion: "El rey legítimo de Gondor, valiente guerrero.",
    descripcionDetallada: "Aragorn, también conocido como Trancos, es el heredero legítimo al trono de Gondor. Montaraz del Norte, protector de la Comarca y líder nato que guía a la Comunidad tras la caída de Gandalf.",
    origen: "Gondor, criado en Rivendel",
    habilidades: ["Maestría con la espada", "Rastreo", "Liderazgo", "Curación"],
    arma: "Andúril, Llama del Oeste",
    cita: "\"Un día volveré. Sí, volveré\"",
    categoria: "humano",
    imagen: aragornCard,
  },
  {
    nombre: "Gandalf",
    descripcion: "El mago sabio y guía de la Comunidad del Anillo.",
    descripcionDetallada: "Gandalf el Gris, uno de los Istari enviados a la Tierra Media. Sabio consejero y poderoso mago que guía a la Comunidad. Tras su sacrificio en Moria, regresa como Gandalf el Blanco con mayor poder.",
    origen: "Valinor (Maiar)",
    habilidades: ["Magia", "Sabiduría ancestral", "Comunicación con animales", "Pirotecnia"],
    arma: "Glamdring y bastón de poder",
    cita: "\"¡No puedes pasar!\"",
    categoria: "mago",
    imagen: gandalfCard,
  },
  {
    nombre: "Legolas",
    descripcion: "El arquero élfico y valiente de la Comunidad del Anillo.",
    descripcionDetallada: "Legolas Hoja Verde, príncipe élfico del Reino del Bosque. Arquero sin igual y guerrero ágil, representa a los elfos en la Comunidad. Su amistad con Gimli trasciende la antigua enemistad entre elfos y enanos.",
    origen: "Reino del Bosque, Eryn Lasgalen",
    habilidades: ["Arquería perfecta", "Agilidad sobrehumana", "Vista de águila", "Inmortalidad"],
    arma: "Arco élfico y cuchillos gemelos",
    cita: "\"Mis ojos no me engañan\"",
    categoria: "elfo",
    imagen: legolasCard,
  },
  {
    nombre: "Gimli",
    descripcion: "Enano valiente y leal, experto guerrero con hacha.",
    descripcionDetallada: "Gimli, hijo de Glóin, es un guerrero enano de Erebor. Inicialmente desconfiado hacia los elfos, desarrolla una profunda amistad con Legolas. Su lealtad y fiereza en batalla son legendarias.",
    origen: "Erebor, la Montaña Solitaria",
    habilidades: ["Maestría con hacha", "Resistencia", "Conocimiento de minas", "Forja"],
    arma: "Hachas de guerra enanas",
    cita: "\"¡Y mi hacha!\"",
    categoria: "enano",
    imagen: gimliCard,
  },
  {
    nombre: "Sauron",
    descripcion: "El poderoso enemigo de la Comunidad del Anillo.",
    descripcionDetallada: "El Señor Oscuro de Mordor, creador del Anillo Único. Antiguamente Mairon, fue corrompido por Morgoth. Su poder está ligado al Anillo, y busca recuperarlo para dominar toda la Tierra Media.",
    origen: "Valinor (Maiar corrompido)",
    habilidades: ["Poder del Anillo", "Corrupción", "Nigromancia", "Dominio mental"],
    arma: "El Anillo Único",
    cita: "\"Un Anillo para gobernarlos a todos\"",
    categoria: "villano",
    imagen: sauronCard,
  },
  {
    nombre: "Gollum",
    descripcion: "Criatura corrompida por el Anillo, dividida entre su lado oscuro y su antiguo yo.",
    descripcionDetallada: "Sméagol, transformado en Gollum por el poder corruptor del Anillo. Durante siglos vivió en las profundidades, obsesionado con su 'tesoro'. Su personalidad dividida lo convierte en una figura trágica y peligrosa.",
    origen: "Pueblo de los Fuertes (Hobbit corrupto)",
    habilidades: ["Sigilo extremo", "Supervivencia", "Conocimiento de túneles", "Resistencia"],
    arma: "Garras y dientes",
    cita: "\"¡Mi tesoro!\"",
    categoria: "corrupto",
    imagen: golumCard,
  },
];

function LaComunidad() {
  return (
    <>
      <Header />
      <main className="comunidad-main">
        {/* Hero Section */}
        <section className="comunidad-hero">
          <div className="hero-background">
            <img src={LaComunidadImage} alt="La Comunidad del Anillo" className="hero-bg-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-highlight">La Comunidad</span>
              <span className="title-subtitle">del Anillo</span>
            </h1>
            <p className="hero-description">
              Nueve caminantes unidos por un destino común: destruir el Anillo Único y salvar la Tierra Media
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">9</span>
                <span className="stat-label">Miembros</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Razas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Misión</span>
              </div>
            </div>
          </div>
        </section>

        {/* Descripción mejorada */}
        <section className="descripcion-section">
          <div className="descripcion-container">
            <h2>Los Héroes de la Tierra Media</h2>
            <p className="descripcion-texto">
              En el vasto mundo de la Tierra Media, los destinos de diferentes razas se entrelazan 
              en una lucha épica entre el bien y el mal. Cada miembro de la Comunidad aporta sus 
              habilidades únicas y su valentía para enfrentar las fuerzas oscuras de Sauron.
            </p>
          </div>
        </section>

        {/* Personajes Cards */}
        <PersonajesCards personajes={personajes} />

        {/* Cita épica */}
        <section className="cita-section">
          <div className="cita-container">
            <blockquote className="cita-epica">
              <span className="cita-texto">
                "Nueve compañeros... tan pequeña compañía para llevar la esperanza de muchos."
              </span>
              <cite className="cita-autor">— Elrond de Rivendel</cite>
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LaComunidad;
