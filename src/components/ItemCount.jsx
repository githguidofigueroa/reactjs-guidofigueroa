import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="item-count">
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(cantidad)} style={{ background: '#42a5f5', marginLeft: '0.5rem' }}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount; 