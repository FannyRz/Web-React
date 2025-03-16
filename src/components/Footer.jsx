import './Footer.css';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (     
      <footer>
      <div class="footer-content">
          <p>&copy; 2025 Disney_librairie. Tous droits réservés.</p>
          <nav>
              <ul>
                  <li> <Link to="#">Mentions légales</Link> </li>
                  <li> <Link to="#">Politique de confidentialité</Link> </li>
                  <li>< Link to="/contact">Contact</Link> </li>
              </ul>
          </nav>
      </div>
  </footer>
    );
  };