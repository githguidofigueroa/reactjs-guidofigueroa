import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: '', apellido: '', direccion: '', email: '', tarjeta: '' });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [fechaLocal, setFechaLocal] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const fechaLocalStr = new Date().toLocaleString(undefined, { timeZoneName: 'short' });
      const orden = {
        cliente: {
          nombre: form.nombre,
          apellido: form.apellido,
          direccion: form.direccion,
          email: form.email,
          tarjeta: form.tarjeta.replace(/.(?=.{4})/g, '*'),
        },
        items: cart.map(item => ({
          id: item.id,
          nombre: item.title,
          cantidad: item.cantidad,
          precio: item.price
        })),
        total,
        fecha: Timestamp.now(),
        fechaLocal: fechaLocalStr
      };
      const docRef = await addDoc(collection(db, 'ordenes'), orden);
      setOrderId(docRef.id);
      setFechaLocal(fechaLocalStr);
      clearCart();
    } catch (err) {
      setError('Ocurrió un error al guardar la orden. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#1976d2', margin: '1rem 0' }}>{orderId}</div>
        {fechaLocal && (
          <div style={{ margin: '1rem 0', color: '#1976d2', fontSize: '1.13rem', fontWeight: 600 }}>
            <span>Fecha y hora local de la compra:</span><br />
            <span style={{ fontWeight: 700 }}>{fechaLocal}</span>
          </div>
        )}
        <button onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 420, margin: '2rem auto', background: '#fff', borderRadius: 8, padding: '2rem', boxShadow: '0 2px 16px rgba(25, 118, 210, 0.07)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1976d2' }}>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: '1.08rem', color: '#222' }}>Nombre</strong>
          <input id="nombre" type="text" name="nombre" value={form.nombre} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: '1.08rem', color: '#222' }}>Apellido</strong>
          <input id="apellido" type="text" name="apellido" value={form.apellido} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: '1.08rem', color: '#222' }}>Dirección de entrega</strong>
          <input id="direccion" type="text" name="direccion" value={form.direccion} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: '1.08rem', color: '#222' }}>Correo electrónico</strong>
          <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong style={{ display: 'block', marginBottom: 6, fontSize: '1.08rem', color: '#222' }}>Número de tarjeta (16 dígitos)</strong>
          <input id="tarjeta" type="text" name="tarjeta" value={form.tarjeta} onChange={handleChange} required minLength={16} maxLength={16} pattern="[0-9]{16}" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem', fontWeight: 600, color: '#1976d2' }}>
          Total a pagar: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
        </div>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.7rem', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm; 