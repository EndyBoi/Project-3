import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ron = () => {
	let [ron, setRon] = useState(['Loading Ron'])

	useEffect(() => {
		axios
			.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
			.then((res) => {
				console.log(res.data)
				setRon(res.data)
			})
	}, [])

	return (
		<div className='card shadow ron'>
			<h4>Ron Swanson says: {ron}</h4>
		</div>
	)
}

export default Ron
