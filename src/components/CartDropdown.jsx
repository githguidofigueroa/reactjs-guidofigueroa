import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [compraOk, setCompraOk] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose && onClose();
    navigate('/checkout');
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
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem 1rem',
          color: 'var(--color-text)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>Carrito vacío</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.7 }}>
            Agrega productos para comenzar
          </p>
        </div>
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
            <button onClick={handleCheckout} className="cart-btn cart-btn-right">Confirmar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown; 