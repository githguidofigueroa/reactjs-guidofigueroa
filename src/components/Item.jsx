import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Item = ({ producto }) => {
  const { addToCart } = useCart();
  return (
    <div className="item-producto card-minimal">
      <img src={producto.image} alt={producto.title} className="item-imagen" />
      <h3 className="item-titulo">{producto.title}</h3>
      <p className="item-precio">{producto.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Link to={`/item/${producto.id}`} className="item-detalle-link">Detalles</Link>
        <button className="item-buy-btn" onClick={() => addToCart(producto, 1)}>Comprar</button>
      </div>
    </div>
  );
};

export default Item; 