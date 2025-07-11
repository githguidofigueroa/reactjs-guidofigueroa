import CartWidget from './CartWidget.jsx';
import CategoriasMenu from './CategoriasMenu.jsx';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="barra-navegacion">
      <Link to="/" className="logo-tienda-link">
        <h2 className="logo-tienda">Elite Notebooks 💻</h2>
      </Link>
      <div className="nav-categorias-abs" ref={menuRef}>
        <div className="categorias">
          <button 
            className="boton-categorias" 
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
          >
            Categorías
          </button>
          {showMenu && <CategoriasMenu onSelectCategoria={() => setShowMenu(false)} />}
        </div>
      </div>
      <button className="toggle-theme-btn-abs" onClick={toggleTheme} title="Cambiar modo">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
      <div className="nav-cart-abs">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;