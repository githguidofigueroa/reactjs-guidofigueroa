import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';
import { categorias } from '../data';

const ItemListContainer = ({ saludo }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener el nombre de la categoría seleccionada
  const nombreCategoria = category
    ? (categorias.find((cat) => cat.id === category)?.nombre || category)
    : null;

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = async () => {
      try {
        const productosRef = collection(db, 'productos');
        let q;
        
        if (category) {
          q = query(productosRef, where('categoria', '==', category));
        } else {
          q = query(productosRef);
        }
        
        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.nombre,
            price: typeof data.precio === 'string' ? parseFloat(data.precio) : data.precio,
            description: data.detalles,
            image: data.imagen,
            category: data.categoria
          };
        });
        
        setItems(productos);
      } catch (error) {
        console.error('Error fetching products:', error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="contenedor-productos">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '200px',
          fontSize: '1.2rem',
          color: 'var(--color-primary)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
            Cargando productos...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contenedor-productos">
      <h1 className="titulo">{nombreCategoria || saludo}</h1>
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;