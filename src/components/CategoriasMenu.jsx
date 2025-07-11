import { Link } from 'react-router-dom';
import { categorias } from '../data';

const CategoriasMenu = ({ onSelectCategoria }) => {
  return (
    <ul className="lista-categorias categorias-menu">
      {categorias.map((cat) => (
        <li key={cat.id}>
          <Link 
            to={`/category/${cat.id}`}
            className="categoria-link"
            onClick={onSelectCategoria}
          >
            {cat.nombre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriasMenu; 