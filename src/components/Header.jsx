import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="lotr-header">
      <div className="title-container">
        <Link to="/" className="main-title">
          <h1 className="site-title">
            <span className="title-main">El Señor de los Anillos</span>
            <span className="title-sub">Tierra Media</span>
          </h1>
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <button 
        className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Menú de navegación */}
      <nav aria-label="Menú principal" className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <ul className="link-list">
          <li>
            <Link className="link" to="/" onClick={closeMenu}>
              <span className="link-icon">🏠</span>
              <span className="link-text">Inicio</span>
            </Link>
          </li>
          <li>
            <Link className="link" to="/la-comunidad" onClick={closeMenu}>
              <span className="link-icon">⚔️</span>
              <span className="link-text">La Comunidad</span>
            </Link>
          </li>
          <li>
            <Link className="link" to="/lugares" onClick={closeMenu}>
              <span className="link-icon">🏔️</span>
              <span className="link-text">Lugares</span>
            </Link>
          </li>
          <li>
            <Link className="link" to="/anillos-del-poder" onClick={closeMenu}>
              <span className="link-icon">💍</span>
              <span className="link-text">Anillos del Poder</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
