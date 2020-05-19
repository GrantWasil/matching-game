import React from "react";

const GameCard = ({flipped, icon}) => { 
	return (
		<div className="game__card">
			<i class={icon + " game__card_icon"}></i>
		</div>
	)
}

export default GameCard;
