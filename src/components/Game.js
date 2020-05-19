import React from "react";

import CardList from './CardList'

const Game = ({cards, setCards, flipped, setFlipped, reset}) => {
	return (
		<div className="game">
			<h1 className="game__title">Matching Game</h1>
			<ul className="options">
				<li className="options__choice options__choice_lives">Stars</li>
				<li className="options__choice options__choice_timer">Timer</li>
				<li className="options__choice options__choice_moves">
					8 Moves
				</li>
				<li className="options__choice options__choice_reset">
					<button onClick={() => reset(cards, setCards)}>
						<i class="far fa-undo"></i>
					</button>
				</li>
			</ul>
			<div className="game__container">
				<CardList 
				  cards={cards}
				  flipped={flipped}
				  setFlipped={setFlipped}
				/>
			</div>
		</div>
	);
};

export default Game;
