 /*Estilos generales para todos los componentes*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';
import CartDropdown from './components/CartDropdown.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <section className="hero">
              <h1>Bienvenido a Elite Notebooks</h1>
              <p>Las mejores notebooks de alta gama para profesionales y gamers en Argentina.</p>
            </section>
            <ItemListContainer saludo="Catálogo Completo" />
          </>
        } />
        <Route path="/category/:category" element={<ItemListContainer saludo="Catálogo filtrado" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartDropdown />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;