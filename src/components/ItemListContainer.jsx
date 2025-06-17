import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { productos } from '../data';

const ItemListContainer = ({ saludo }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        if (category) {
          resolve(productos.filter((p) => p.category === category));
        } else {
          resolve(productos);
        }
      }, 500);
    }).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [category]);

  return (
    <div className="contenedor-productos">
      <h1 className="titulo">{saludo}</h1>
      {loading ? <div>Cargando...</div> : <ItemList productos={items} />}
    </div>
  );
};

export default ItemListContainer;