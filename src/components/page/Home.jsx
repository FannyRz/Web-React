import './Home.css';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';


export default function Home() {
  return (
      <div>
          <Header />
          <Carousel />
          
          <div id="home-page">
              <h1>✨ Bienvenue dans l’univers enchanté de la Librairie Disney ✨</h1>
              <p>
                  Plongez dans la magie des histoires Disney comme jamais auparavant !
                  <br/> 
                  <br/> Notre site vous invite à découvrir la collection complète des livres Disney. Chaque fiche livre vous donne un aperçu détaillé : résumé, couverture, date de parution, et bien plus encore.
                  <br/> Que vous soyez fan de longue date ou curieux de redécouvrir vos héros d’enfance, la Librairie Disney est l’endroit idéal pour explorer la richesse littéraire de ce monde féerique.
                  <br/> 
                  <br/> 📚 Nouveautés, coups de cœur, et ouvrages incontournables vous attendent.
                  <br/> 🎬 Et pour ne rien manquer de l’actualité Disney, notre carrousel vous tient informé des dernières sorties cinéma et des projets à venir !
                  <br/> 
                  <br/> Laissez-vous emporter par la magie des mots et retrouvez l’émerveillement au fil des pages !✨
              </p>
          </div>

          <Footer />
      </div>
  );
}