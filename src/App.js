import "./styles.css";
import Flashcard from "./components/Flashcard";
import React, { useState } from "react";

export default function App() {
  const Flashcards = [
    {
      frontImg: "https://i.imgur.com/Xv4J5sL.png",
      backImg: "https://i.imgur.com/uQ9uZCk.png"
    },
    {
      frontImg: "https://i.imgur.com/g1v4Gz7.png",
      backImg: "https://i.imgur.com/JpICcXA.png"
    },
    {
      frontImg: "https://i.imgur.com/YCPLrXP.png",
      backImg: "https://i.imgur.com/NGlgeVm.png"
    },
    {
      frontImg: "https://i.imgur.com/Vdzikax.png",
      backImg: "https://i.imgur.com/udToUGm.png"
    },
    {
      frontImg: "https://i.imgur.com/z3pmpaS.png",
      backImg: "https://i.imgur.com/mkcZd8h.png"
    },
    {
      frontImg: "https://i.imgur.com/PTfM6vx.png",
      backImg: "https://i.imgur.com/tHVN2b4.png"
    }
  ];

  return (
    <div>
      <h1 class="title">
        <center> Name That Data Structure! </center>
      </h1>
      <div className="flashcard-container">
        {Flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            frontImg={flashcard.frontImg}
            backImg={flashcard.backImg}
          />
        ))}
      </div>
    </div>
  );
}
