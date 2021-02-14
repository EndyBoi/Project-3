import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
// import './assets/css/styles.css'
import './assets/css/styles.scss'

var mountNode = document.getElementById('app')
// ReactDOM.render(<App name='Jane' />, mountNode)
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	// document.getElementById('root'),
	mountNode
)
