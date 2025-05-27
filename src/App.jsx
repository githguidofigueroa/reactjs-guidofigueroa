import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a Elite Notebooks!" />
    </>
  );
}

export default App;