import React from 'react'

import GameCard from './GameCard'

const CardList = ({cards, flipped, setFlipped}) => {

	return (
		cards.map(card => 
			<GameCard flipped={flipped} setFlipped={setFlipped} icon={card.icon}/>
			)
		)
}

export default CardList