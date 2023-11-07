import React, { useState } from "react";

export default function Index() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div
      className="cardContainer"
      onClick={toggleCard}
      style={{ textAlign: "center", display: "block" }}
    >
      {isCardOpen ? (
        <img
          style={{ width: "50em" }}
          src="https://icasebrasil.com.br/cdn/shop/products/euteamodotamanhodadificuldadex1000_1800x1800.png"
          alt="Cartão Fechado"
        />
      ) : (
        <>
          <p
            style={{
              position: "absolute",
              top: "66%",
              left: "53%",
              transform: "translate(-50%, -50%)",
              fontFamily: "cursive",
            }}
          >
            Clique em mim
          </p>
          <img
            style={{ width: "50em" }}
            src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-075.png"
            alt="Cartão Aberto"
          />
        </>
      )}
    </div>
  );
}

function teste() {
  console.log("teste");
}
