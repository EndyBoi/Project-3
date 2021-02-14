import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CocktailCard = () => {
	return (
		<div className='cocktailcard'>
			<div className='cc-title'>Title</div>
			<div className='cc-image'>Img</div>
			<div className='cc-1'>Ingredient</div>
			<div className='cc-1'>Measurement</div>
		</div>
	)
}

export default CocktailCard
