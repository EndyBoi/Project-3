import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './assets/components/NavBar'
import CocktailCard from './assets/components/CocktailCard'
import TacoCard from './assets/components/TacoCard'

class App extends React.Component {
	render() {
		const { name } = this.props
		return (
			<>
				<NavBar />
				<CocktailCard />
				<TacoCard />
			</>
		)
	}
}

export default hot(App)
