import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="detalle-producto card-minimal">
      <img src={producto.image} alt={producto.title} className="detalle-imagen" />
      <h2 className="detalle-titulo">{producto.title}</h2>
      <p className="detalle-descripcion">{producto.description}</p>
      <p className="detalle-precio">Precio: {producto.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      {added && <div style={{ color: '#00FF41', marginTop: 8 }}>¡Agregado al carrito!</div>}
    </div>
  );
};

export default ItemDetail; 