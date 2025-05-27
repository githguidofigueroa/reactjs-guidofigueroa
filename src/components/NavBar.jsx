import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <nav className="barra-navegacion">
      <h2 className="logo-tienda">Elite Notebooks 💻</h2>

      <div className="categorias">
        <button className="boton-categorias">Categorías</button>
        <ul className="lista-categorias">
          <li>UltraBook 14</li>
          <li>Gaming Pro 15</li>
          <li>OfficeBook 13</li>
          <li>LightBook 12</li>
          <li>BudgetBook 11</li>
        </ul>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;