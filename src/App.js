import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './assets/components/NavBar'
import CocktailCard from './assets/components/CocktailCard'
import TacoCard from './assets/components/TacoCard'
// import TestTaco from './assets/components/TestTaco'
import Ron from './assets/components/Ron'

class App extends React.Component {
	render() {
		const { name } = this.props
		return (
			<>
				<NavBar />
				<Ron />
				<CocktailCard />
				<Ron />
				<TacoCard />
				<Ron />
			</>
		)
	}
}

export default hot(App)
