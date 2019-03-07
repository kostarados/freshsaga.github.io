import React from 'react';
import { Link } from 'react-router-dom'
import './navigation.css';


const Navigation = () => {
	return (
		<div className='henk'>
			<ul className='navbar'>
				<li className='navbaritem'><Link className="navbaractive" to="/">Progress</Link></li>
				<li className='navbaritem'><Link to="/flow">Daily Flow</Link></li>
				<li className='navbaritem'><Link to="/tasks">Tasks</Link></li>
				<li className='navbaritem'><Link to="/gameboy">Game Boy</Link></li>
			</ul>
		</div>
		);
}

export default Navigation;