import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li class="menu"> <Link to="/home"><img id="logoDisney" src="../image/logo_disney.png" alt="Logo chateau de Disney"/></Link> </li>
                    <li class="menu"> <Link to="/home">Accueil</Link> </li>
                    <li class="menu"> <Link to="/collection">Collection</Link> </li>
                    <li class="menu"> <Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </header>
    );
  };