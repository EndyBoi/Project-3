// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const APP_ID = 'b750ec29'
// const APP_KEY = '836d60008d7295d7eb7e391dd3900a1b '

// const TestTaco = () => {
// 	let [taco, setTaco] = useState(['Loading Taco'])

// 	useEffect(() => {
// 		console.log('USE EFFECT START')
// 		axios
// 			.get(
// 				`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=taco&app_id=${APP_ID}&app_key=${APP_KEY}`
// 			)
// 			.then((res) => {
// 				console.log('test', res.data.hits)
// 				console.log('HELLO MOTHER FUCKER')
// 				setTaco(res)
// 			})
// 	}, [taco])

// 	return <div className='card'>TACO + {taco} </div>
// }

// export default TestTaco

// /*
// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

// app id : b750ec29
// api key : 836d60008d7295d7eb7e391dd3900a1b 	—

// */
