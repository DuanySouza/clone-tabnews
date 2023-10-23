import React, { useState } from 'react';

export default function Index () {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="card-container" onClick={toggleCard}>
      {isCardOpen ? (
        <img src="closed-card.jpg" alt="Cartão Fechado" />
      ) : (
        <img src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-075.png" width="50%" alt="Cartão Aberto" />
      )}
    </div>
  );
};
