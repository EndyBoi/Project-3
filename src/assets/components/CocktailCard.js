import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CocktailCard = () => {
	let [drink, setDrink] = useState(['Drink! Drink! Drink! Drink!'])

	useEffect(() => {
		axios
			.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
			.then((res) => {
				// console.log(res.data.drinks[0])
				setDrink(res.data.drinks[0])
			})
	}, [])

	return (
		<div className='card shadow'>
			<div className='cc-title'>{drink.strDrink}</div>
			<div className='cc-title'>
				<img
					className='cc-image shadow'
					alt={drink.strImageAttribution}
					src={drink.strDrinkThumb}
				/>
			</div>
			<div className='cc-title'>
				<table className='cc-table'>
					<tr>
						<td width='150'>{drink.strIngredient1}</td>
						<td>{drink.strMeasure1}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient2}</td>
						<td>{drink.strMeasure2}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient3}</td>
						<td>{drink.strMeasure3}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient4}</td>
						<td>{drink.strMeasure4}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient5}</td>
						<td>{drink.strMeasure5}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient6}</td>
						<td>{drink.strMeasure6}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient7}</td>
						<td>{drink.strMeasure7}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient8}</td>
						<td>{drink.strMeasure8}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient9}</td>
						<td>{drink.strMeasure9}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient10}</td>
						<td>{drink.strMeasure10}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient11}</td>
						<td>{drink.strMeasure11}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient12}</td>
						<td>{drink.strMeasure12}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient13}</td>
						<td>{drink.strMeasure13}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient14}</td>
						<td>{drink.strMeasure14}</td>
					</tr>
					<tr>
						<td>{drink.strIngredient15}</td>
						<td>{drink.strMeasure15}</td>
					</tr>
				</table>
			</div>
			<div className='cc-body'>
				<h4>How to mix:</h4>
				<p>{drink.strInstructions}</p>
			</div>
		</div>
	)
}

export default CocktailCard

/* 
Drink name -- strDrink
Drink Image -- strDrinkThumb
Image Attribution -- strImageAttribution 
	Add this for the credit.
Drink glass -- strGlass
Directions -- strInstructions

Ingredients -- strIngredient1 - strIngredient15
Measurement -- strMeasure1 - strMeasure15
*/
