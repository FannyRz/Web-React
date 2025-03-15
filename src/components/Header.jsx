import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li class="menu"><a href="../accueil.html"> <img id="logoDisney" src="../image/logo_disney.png" alt="Logo chateau de Disney"/> </a> </li>
                    <li class="menu"><a href="#">Accueil</a></li>
                    <li class="menu"><a href="#">Collection</a></li>
                    <li class="menu"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
  };