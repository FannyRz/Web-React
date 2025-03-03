import './Footer.css';

export default function Footer() {
    return (     
        
          <footer class="footer">
             <div class="container">
              <div class="row">
                <div class="footer-col">
                  <h4>À propos</h4>
                  <ul>
                    <li><a href="#">Qui suis-je ?</a></li>
                    <li><a href="#">Espace client</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>Besoin d'aide ?</h4>
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Gérer tes cookies</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>Nous suivre</h4>
                  <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
             </div>
          </footer>
    );
  };