import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCart } from '../context/CartContext';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProducto({
            id: docSnap.id,
            title: data.nombre,
            price: typeof data.precio === 'string' ? parseFloat(data.precio) : data.precio,
            description: data.detalles,
            image: data.imagen,
            category: data.categoria
          });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (cantidad) => {
    addToCart(producto, cantidad);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '300px',
        fontSize: '1.2rem',
        color: 'var(--color-primary)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          Cargando producto...
        </div>
      </div>
    );
  }

  if (!producto) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '300px',
        fontSize: '1.2rem',
        color: 'var(--color-primary)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❌</div>
          No se encontró el producto.
        </div>
      </div>
    );
  }

  return (
    <ItemDetail 
      producto={producto} 
      onAddToCart={handleAddToCart}
      addedToCart={added}
    />
  );
};

export default ItemDetailContainer; 