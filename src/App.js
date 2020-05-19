import React, { useState, useEffect} from "react";
import "./App.css";

// Components
import Game from "./components/Game.js";

const App = () => {

  const gameOptions = [
    {
      name: "car",
      icon: "far fa-car",
    },
    {
      name: "home",
      icon: "far fa-home-lg",
    },
    {
      name: "crown",
      icon: "far fa-crown",
    },
    {
      name: "dollar",
      icon: "far fa-usd-circle",
    },
    {
      name: "wifi",
      icon: "far fa-wifi",
    },
    {
      name: "phone",
      icon: "far fa-phone",
    },
    {
      name: "meh",
      icon: "far fa-meh",
    },
    {
      name: "global",
      icon: "far fa-globe-stand",
    },
    {
      name: "car",
      icon: "far fa-car",
    },
    {
      name: "home",
      icon: "far fa-home-lg",
    },
    {
      name: "crown",
      icon: "far fa-crown",
    },
    {
      name: "dollar",
      icon: "far fa-usd-circle",
    },
    {
      name: "wifi",
      icon: "far fa-wifi",
    },
    {
      name: "phone",
      icon: "far fa-phone",
    },
    {
      name: "meh",
      icon: "far fa-meh",
    },
    {
      name: "global",
      icon: "far fa-globe-stand",
    },
  ]

  const [cards, setCards] = useState(gameOptions)
  const [flipped, setFlipped] = useState(false)


  // To be ran when the game loads and every time the game is reset
  const reset = (cards, setCards) => {
    let tempArray = cards
    console.log(tempArray)
    let counter = tempArray.length
    let hold
    let index

    while (counter > 0) {
      index = Math.floor(Math.random() * counter)
      counter --
      hold = tempArray[counter]
      tempArray[counter] = tempArray[index]
      tempArray[index] = hold
    }

    setCards(tempArray)
  }

  useEffect(() => {
    reset(cards, setCards)
  })

  return (
    <div className="root">
      <Game 
        cards={cards}
        setCards={setCards}
        flipped={flipped}
        setFlipped={setFlipped} 
      />
    </div>
  );
};

export default App;
