import Header from "../components/Header";
import './HomePage.css'; 
// import CardsLinks from "../components/CardsLinks"; // ELIMINAR ESTA LÍNEA
import Footer from "../components/Footer";
import FrodoImage from '../assets/Frodo.png';

function HomePage() {
  return (
    <>
      <Header />
      <main className="home-container">
        {/* Hero Section mejorada */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="floating-particles"></div>
            <div className="floating-particles"></div>
            <div className="floating-particles"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line-1">Bienvenidos a la</span>
                <span className="title-line-2">Tierra Media</span>
              </h1>
              <div className="hero-subtitle">
                <span className="subtitle-decoration">⚔️</span>
                <span className="subtitle-text">Una aventura épica te espera</span>
                <span className="subtitle-decoration">⚔️</span>
              </div>
            </div>
            
            <div className="hero-image-container">
              <div className="image-glow"></div>
              <img src={FrodoImage} alt="Frodo Bolsón" className="frodo-image" />
              <div className="image-frame"></div>
            </div>
          </div>
        </section>

        {/* Sección de descripción mejorada */}
        <section className="story-section">
          <div className="story-container">
            <div className="story-header">
              <h2 className="story-title">La Leyenda Comienza</h2>
            </div>
            
            <div className="story-content">
              <p className="story-text">
                <span className="story-highlight">El Señor de los Anillos</span> es una saga de fantasía épica que narra el viaje de <span className="character-name">Frodo Bolsón</span>, un hobbit destinado a destruir el <span className="item-highlight">Anillo Único</span> y vencer al malvado <span className="villain-name">Sauron</span>. Acompañado por valientes héroes, su travesía marcará el destino de la Tierra Media.
              </p>
            </div>
          </div>
        </section>

        {/* Cita mejorada */}
        <section className="quote-section">
          <div className="quote-container">
            <div className="quote-ornament-top">✦</div>
            <blockquote className="quote">
              <span className="quote-text">"No todos los que vagan están perdidos."</span>
              <cite className="quote-author">— J.R.R. Tolkien</cite>
            </blockquote>
            <div className="quote-ornament-bottom">✦</div>
          </div>
        </section>
      </main>
      <Footer /> 
    </>
  );
}

export default HomePage;
