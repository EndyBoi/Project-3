import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className='nav'>
			<Link to='/'>Home</Link>
			<Link to='/'>Cocktails</Link>
			<Link to='/'>Tacos</Link>
		</div>
	)
}

NavBar.propTypes = {}

export default NavBar
