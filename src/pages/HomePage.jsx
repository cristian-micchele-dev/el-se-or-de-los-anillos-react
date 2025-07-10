import Header from "../components/Header";
import './HomePage.css'; 
import CardsLinks from "../components/CardsLinks";
import Footer from "../components/Footer";
import FrodoImage from '../assets/Frodo.png';


function HomePage() {
  return (
    <>
      <Header />
      <main className="home-container">
 <section className="welcome-section">
  <div className="welcome-content">
    <img src={FrodoImage} alt="Frodo" className="frodo-image" />
    <div className="text-content">
      <h1>Bienvenidos a la Tierra Media</h1>
      <p className="parrafo">
        "El Señor de los Anillos es una saga de fantasía épica que narra el viaje de Frodo Bolsón, un hobbit destinado a destruir el Anillo Único y vencer al malvado Sauron. Acompañado por valientes héroes, su travesía marcará el destino de la Tierra Media."
      </p> 
    </div>
  </div>
</section>

        <CardsLinks />

        <blockquote className="quote">
          “No todos los que vagan están perdidos.” – J.R.R. Tolkien
        </blockquote>
      </main>
      <Footer /> 
    </>
  );
}

export default HomePage;
