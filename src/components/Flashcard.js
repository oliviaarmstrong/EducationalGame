import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ frontImg, backImg }) => {
  // isFlipped -> Is the card flipped or not, initial state is false
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggles value of isFlipped
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flashcard"
      // onMouseEnter -> hover
      onMouseEnter={flipCard}
      onMouseLeave={flipCard}
    >
      {/*If card isFlipped, card is now flipped (using CSS to flip card */}
      <div className={isFlipped ? "card flipped" : "card"}>
        <div className="flip-card-inner">
          <div className="card-front">
            <img src={frontImg} alt="Front" className="img" />
          </div>
          <div className="card-back">
            <img src={backImg} alt="Back" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
