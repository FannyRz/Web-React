import './Contact.css';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import ContactForm from '../ContactForm.jsx';

export default function Contact() {
    return (
            <div>
              <Header />
              <div id="contact">
              <h1>Nous contacter</h1>
              <p cl> Vous avez des questions concernant nos livres Disney, des suggestions ou des commentaires ? 
                <br/> N'hésitez pas à nous contacter ! Nous serons ravis de vous répondre. </p>
              </div>
              <ContactForm />
              <div id="contact">
                <h3>Informations de contact supplémentaires :</h3>
                  <p>Email : contact@disneylibrarie.com</p>
                  <p>Téléphone : +33 7 23 45 67 89</p>
              </div>
              <Footer />
            </div>
          )
}