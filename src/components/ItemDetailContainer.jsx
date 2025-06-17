import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { productos } from '../data';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((p) => p.id === Number(id)));
      }, 400);
    }).then((data) => {
      setProducto(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!producto) return <div>No se encontró el producto.</div>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer; 