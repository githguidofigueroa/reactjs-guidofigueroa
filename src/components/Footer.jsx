import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.coderhouse.com/ar/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.coderhouse.com/ar/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.coderhouse.com/ar/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="footer-text">© 2024 Elite Notebooks. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 