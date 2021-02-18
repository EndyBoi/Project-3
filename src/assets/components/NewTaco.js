import React, { useEffect, useState } from 'react'
import axios from 'axios'
const APP_ID = 'b750ec29'
const APP_KEY = '836d60008d7295d7eb7e391dd3900a1b '

// const APP_ID = 'b479ca7f'
// const APP_KEY = '1091d11a059bf224db39af98bca9540f '
// https://cors-anywhere.herokuapp.com/

const NewTaco = () => {
	let [taco, setTaco] = useState(['Loading 🌮'])

	useEffect(() => {
		axios
			.get(
				`https://api.edamam.com/search?q=taco&app_id=${APP_ID}&app_key=${APP_KEY}&to=100&ingr=15`
			)
			.then((res) => {
				let rand = Math.floor(Math.random() * res.data.hits.length)
				console.log(rand)
				console.log('setTaco =', res.data.hits[rand].recipe)
				setTaco(res.data.hits[rand].recipe)
			})
	}, [])

	// console.log(JSON.stringify(taco.ingredientLines).split(','))

	return (
		<div className='card shadow'>
			<div className='t-title'>
				<h2>{taco.label}</h2>
			</div>
			<div className='t-img'>
				<img className='t-img shadow' src={taco.image} />
			</div>
			<div className='t-ingr'>
				<ul className='t-ul'>
					{console.log('taco is', taco)}
					{console.log('taco.ingredientLines is', taco.ingredientLines)}
					{console.log('typeOf =', typeof taco.ingredientLines)}
					{/* {console.log('taco.ingredients is', taco.ingredients)} */}
					{/* {console.log('taco.ingredientLines[0] is', taco.ingredientLines[0])} */}
					{/* <li>{JSON.stringify(taco.ingredients)}</li> */}
					{/* <li>{taco.ingredientLines}</li> */}
					<li>{taco.ingredientLines?.[0]}</li>
					<li>{taco.ingredientLines?.[1]}</li>
					<li>{taco.ingredientLines?.[2]}</li>
					<li>{taco.ingredientLines?.[3]}</li>
					<li>{taco.ingredientLines?.[4]}</li>
					<li>{taco.ingredientLines?.[5]}</li>
					<li>{taco.ingredientLines?.[6]}</li>
					<li>{taco.ingredientLines?.[7]}</li>
					<li>{taco.ingredientLines?.[8]}</li>
					<li>{taco.ingredientLines?.[9]}</li>
					<li>{taco.ingredientLines?.[10]}</li>
					<li>{taco.ingredientLines?.[11]}</li>
					<li>{taco.ingredientLines?.[12]}</li>
					<li>{taco.ingredientLines?.[13]}</li>
					<li>{taco.ingredientLines?.[14]}</li>
				</ul>
			</div>
		</div>
	)
}

export default NewTaco

/*
name = label
thumbnail = image
ingredients - ingredientLines[0-15]

 */
