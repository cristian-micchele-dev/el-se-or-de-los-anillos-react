import { Link } from "react-router-dom";
import './CardsLinks.css';

import LaComunidadImage from '../assets/LaComunidad.jpg';
import LugaresImage from '../assets/Lugares.jpg';
import AnillosDelPoderImage from '../assets/AnillosDelPoder.jpg';
// Eliminar esta línea:
// import LibrosyPeliculas from '../assets/librosypeliculas.jpeg';

function CardsLinks() {
  const cards = [
    {
      title: "La Comunidad",
      to: "/la-comunidad",
      description: "Conoce a los héroes que forman la Comunidad del Anillo.",
      bgImage: LaComunidadImage,
    },
    {
      title: "Lugares",
      to: "/lugares",
      description: "Explora los lugares emblemáticos de la Tierra Media.",
      bgImage: LugaresImage,
    },
    {
      title: "Anillos del Poder",
      to: "/anillos-del-poder",
      description: "Descubre la historia de los Anillos y su poder.",
      bgImage: AnillosDelPoderImage,
    },
    // Eliminar este objeto completo:
    /*
    {
      title: "Películas y Libros",
      to: "/peliculas-libros",
      description: "Sumérgete en las adaptaciones y la literatura original.",
      bgImage: LibrosyPeliculas,
    },
    */
  ];

  return (
    <section className="cards-container">
      {cards.map(({ title, to, description, bgImage }) => (
        <Link
          key={to}
          to={to}
          className="card"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="card-overlay" />
          <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CardsLinks;
