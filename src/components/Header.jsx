import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo2png.png';


function Header() {
  return (
    <header className="lotr-header">
      <div className="logo-container">
        
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <nav aria-label="Menú principal">
        <ul className="link-list">
          <li><Link className="link" to="/">Inicio</Link></li>
          <li><Link className="link" to="/la-comunidad">La comunidad</Link></li>
          <li><Link className="link" to="/lugares">Lugares</Link></li>
          <li><Link className="link" to="/anillos-del-poder">Anillos del poder</Link></li>
          <li><Link className="link" to="/peliculas-libros">Películas y libros</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
