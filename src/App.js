import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import NavBar from './assets/components/NavBar'
import CocktailCard from './assets/components/CocktailCard'
// import TacoCard from './assets/components/TacoCard'
import NewTaco from './assets/components/NewTaco'
import Ron from './assets/components/Ron'

class App extends React.Component {
	render() {
		const { name } = this.props
		return (
			<>
				{/* <NavBar /> */}
				<Ron />
				<CocktailCard />
				<Ron />
				<NewTaco />
			</>
		)
	}
}

export default hot(App)
