import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
	color: 'orange',
	textDecoration: 'underline',
};

function Navigation(props) {
	return (
		<ul>
			<li>
				<NavLink exact activeStyle={activeStyle} to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeStyle={activeStyle} to="/about">
					About
				</NavLink>
			</li>
			<li>
				<NavLink activeStyle={activeStyle} to="/contacts">
					Contacts
				</NavLink>
			</li>
		</ul>
	);
}

export default Navigation;
