import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="lista-productos grid-minimal">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList; 