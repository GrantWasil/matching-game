import React, { useState } from 'react';
import './App.css';



function App() {


  return (
    <div className="root">
      <div className="game">
        <h1 className="game__title">Matching Game</h1>
        <ul className="options">
          <li className="options__choice options__choice_lives">Stars</li>
          <li className="options__choice options__choice_timer">Timer</li>
          <li className="options__choice options__choice_moves">8 Moves</li>
          <li className="options__choice options__choice_reset">Reset</li>
        </ul>
        <div className="game__container">
          <div className="game__card game__card_one"></div>
          <div className="game__card game__card_two"></div>
          <div className="game__card game__card_three"></div>
          <div className="game__card game__card_four"></div>
          <div className="game__card game__card_five"></div>
          <div className="game__card game__card_six"></div>
          <div className="game__card game__card_seven"></div>
          <div className="game__card game__card_eight"></div>
          <div className="game__card game__card_nine"></div>
          <div className="game__card game__card_ten"></div>
          <div className="game__card game__card_eleven"></div>
          <div className="game__card game__card_twelve"></div>
          <div className="game__card game__card_thirteen"></div>
          <div className="game__card game__card_fourteen"></div>
          <div className="game__card game__card_fifthteen"></div>
          <div className="game__card game__card_sixteen"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
