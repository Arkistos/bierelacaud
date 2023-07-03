import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Fonction pour mettre à jour le compteur
    const updateCountdown = () => {
      // Date de fin du compte à rebours (14 juillet à 12h)
      const endDate = new Date('2023-07-14T12:00:00');

      // Calcul du temps restant en millisecondes
      const timeRemaining = endDate - new Date();

      // Calcul du nombre de jours, heures, minutes et secondes restantes
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Formatage du temps restant
      const countdownText = `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

      // Mise à jour du compteur dans le state
      setCountdown(countdownText);
    };

    // Mettre à jour le compteur toutes les secondes
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown">
        <div className="countdown-label">Fin des précommandes dans :</div>
        <div className="countdown-value">{countdown}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;