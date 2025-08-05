import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
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

        {/* Menú de navegación normal (solo desktop) */}
        <nav aria-label="Menú principal" className="nav-menu">
          <ul className="link-list">
            <li>
              <Link className="link" to="/">
                <span className="link-icon">🏠</span>
                <span className="link-text">Inicio</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/la-comunidad">
                <span className="link-icon">⚔️</span>
                <span className="link-text">La Comunidad</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/lugares">
                <span className="link-icon">🏔️</span>
                <span className="link-text">Lugares</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/anillos-del-poder">
                <span className="link-icon">💍</span>
                <span className="link-text">Anillos del Poder</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Modal Menu para móviles */}
      <div className={`menu-modal ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close-btn" onClick={closeMenu} aria-label="Cerrar menú">
          ✕
        </button>
        
        <div className="menu-modal-content">
          <div className="menu-modal-header">
            <h2 className="menu-modal-title">El Señor de los Anillos</h2>
            <p className="menu-modal-subtitle">Tierra Media</p>
          </div>
          
          <nav>
            <ul className="menu-modal-nav">
              <li className="menu-modal-item">
                <Link className="menu-modal-link" to="/" onClick={closeMenu}>
                  <span className="menu-modal-icon">🏠</span>
                  <span>Inicio</span>
                </Link>
              </li>
              <li className="menu-modal-item">
                <Link className="menu-modal-link" to="/la-comunidad" onClick={closeMenu}>
                  <span className="menu-modal-icon">⚔️</span>
                  <span>La Comunidad</span>
                </Link>
              </li>
              <li className="menu-modal-item">
                <Link className="menu-modal-link" to="/lugares" onClick={closeMenu}>
                  <span className="menu-modal-icon">🏔️</span>
                  <span>Lugares</span>
                </Link>
              </li>
              <li className="menu-modal-item">
                <Link className="menu-modal-link" to="/anillos-del-poder" onClick={closeMenu}>
                  <span className="menu-modal-icon">💍</span>
                  <span>Anillos del Poder</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
