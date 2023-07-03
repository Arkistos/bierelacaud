import React, { useState, useRef }from 'react';
import './Style.css';
import emailjs from '@emailjs/browser';

// Assurez-vous d'importer le fichier CSS

const PreorderForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numbers, setNumbers] = useState(0);

  

  const handleSubmit = (event) => {
    
    event.preventDefault();

    // Configuration du transporteur de messagerie
    
    emailjs.sendForm('service_ef09hbd', 'template_x8qfs69', form.current, '_-otdl6Cx_STaglmU')
      .then((result) => {
        console.log(form.current);
          console.log(result.text);
        setName('');
        setEmail('');
        setPhone('');
        setNumbers(0);
      }, (error) => {
          console.log(error.text);
      });

    // Réinitialisation du formulaire
    
  };
  

  return (
    <form ref={form} className="form-container" onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          name='name'
          id='name'
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          name='email'
          id='email'
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Téléphone:
        <input
          name='phone'
          id='phone'
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label>
        Quantité:
        <input
          name='number'
          id='number'
          type="number"
          value={numbers}
          onChange={(event) => setNumbers(event.target.value)}
        />
      </label>
      <button type="submit">Précommander</button>
    </form>
  );
};

export default PreorderForm;