import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CartDropdown from './CartDropdown';

const CartWidget = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const cantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', cursor: 'pointer' }}>
        <span role="img" aria-label="carrito">🛒</span>
        <span style={{ fontWeight: 600, color: '#1976d2', background: '#fff', borderRadius: '50%', padding: '0.2rem 0.6rem', fontSize: '1rem' }}>{cantidad}</span>
      </button>
      {open && <CartDropdown onClose={() => setOpen(false)} />}
    </div>
  );
};

export default CartWidget;