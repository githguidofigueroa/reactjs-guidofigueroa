import { useCart } from '../context/CartContext';
import { useState } from 'react';

const CartDropdown = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [compraOk, setCompraOk] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const handleConfirmar = () => {
    setCompraOk(true);
    clearCart();
    setTimeout(() => setCompraOk(false), 2500);
  };

  return (
    <div className="cart-dropdown">
      <button className="close-cart" onClick={onClose}>×</button>
      <h3 className="cart-title">Carrito</h3>
      {compraOk ? (
        <div style={{ color: '#00FF41', fontWeight: 700, textAlign: 'center', margin: '1.5rem 0' }}>
          ¡Gracias por tu compra, ha sido realizada con éxito!
        </div>
      ) : cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
                <span>{item.title}</span>
                <span>x{item.cantidad}</span>
                <span>{item.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</span>
                <button className="cart-btn cart-btn-remove" onClick={() => removeFromCart(item.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</div>
          <div className="cart-actions">
            <button onClick={clearCart} className="cart-btn cart-btn-left">Vaciar carrito</button>
            <button onClick={handleConfirmar} className="cart-btn cart-btn-right">Confirmar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown; 