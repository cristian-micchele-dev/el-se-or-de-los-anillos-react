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


const personajes = [
    {
  nombre: "Frodo Bolsón",
    descripcion: "El hobbit destinado a destruir el Anillo Único y vencer al malvado Sauron.",
    imagen: frodoCard,
  },
  {
  nombre: "Aragorn",
    descripcion: "El rey legítimo de Gondor, valiente guerrero.",
    imagen: aragornCard,
  },
  {
    nombre: "Gandalf",
    descripcion: "El mago sabio y guía de la Comunidad del Anillo.",
    imagen: gandalfCard,
  },
  
  {
    nombre: "Legolas",
    descripcion: "El arquero y valiente de la Comunidad del Anillo.",
    imagen: legolasCard,
  },
  {
    nombre: "Gimli",
    descripcion: "Enano valiente y leal, experto guerrero con hacha.",
    imagen: gimliCard,
  },
  {
    nombre: "Sauron",
    descripcion: "El poderoso enemigo de la Comunidad del Anillo.",
    imagen: sauronCard,
  },
  {
    nombre: "Golum",
    descripcion: "Criatura corrompida por el Anillo, dividida entre su lado oscuro y su antiguo yo.",
    imagen: golumCard,
  },
  
  

  // más personajes...
];

function LaComunidad() {
  return (
    <>
      <Header />
      <div >
        <h1>La Comunidad del Anillo</h1>
        <div className="text-content-comunidad">  
         
        <p className="parrafo">En el vasto mundo de la Tierra Media, los destinos de hombres, elfos, enanos, hobbits y criaturas oscuras se entrelazan en una lucha épica entre el bien y el mal. Cada personaje tiene su propia historia, propósito y legado, ya sea luchando por proteger la libertad o por sumir al mundo en la sombra.

En esta sección encontrarás a los protagonistas más emblemáticos de esta saga: desde los miembros de la Comunidad del Anillo, unidos por una misión noble, hasta los villanos que desean corromper y dominar todo lo que existe. Todos ellos forman parte de una historia que marcó generaciones.

Descubrí sus fortalezas, motivaciones y decisiones que definieron el curso de la historia en la Tierra Media.</p>
          
          </div>
          
        <PersonajesCards personajes={personajes} />
      </div>
      <Footer />
    </>
  );
}

export default LaComunidad;
