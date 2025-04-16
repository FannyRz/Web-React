import './ContactForm.css';
import { useState } from 'react';

export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNomChange = (event) => { setNom(event.target.value); };
  const handlePrenomChange = (event) => { setPrenom(event.target.value); };
  const handleEmailChange = (event) => { setEmail(event.target.value); };
  const handleMessageChange = (event) => {  setMessage(event.target.value); }; 

  const reset = () => {
    setNom("");
    setPrenom("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = () => {
    alert('Message envoyé !');
    reset(); 
  };

  return (
    <div className="contact-form">

        <div className="contact-form-container">
      <label htmlFor="nom">Nom* :</label>
      <input type="text" id="nom" value={nom} onChange={handleNomChange} placeholder="Entrez votre nom"/>

      <label htmlFor="prénom">Prénom* :</label>
      <input type="text" id="prenom" value={prenom} onChange={handlePrenomChange} placeholder="Entrez votre prénom"/>

      <label htmlFor="email">Email* :</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Entrez votre email"/>
      {email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && (
        <p className="error-message">Adresse email invalide</p>
      )}

      <label htmlFor="message">Message* :</label>
      <textarea value={message} onChange={handleMessageChange} placeholder="Écrivez votre message" maxLength="180"></textarea>
      {message.length == 180 && ( <p className="error-message">Le message ne peut pas dépasser 180 caractères</p> )}

      <div>
        {nom || prenom || email || message ? ( <button className="reset-button" onClick={reset}>Annuler</button> ) : null}

        <button disabled={!nom || !prenom || !email || !message } 
        onClick={handleSubmit}
        > Envoyer </button>
      </div>
      </div>
    </div>
  );
}
