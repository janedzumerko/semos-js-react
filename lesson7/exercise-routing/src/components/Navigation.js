import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
	color: 'red',
	textDecoration: 'underline',
};

function Navigation(props) {
	return (
		<ul>
			<li>
				<NavLink activeStyle={activeStyle} exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeStyle={activeStyle} to="/posts">
					Posts
				</NavLink>
			</li>
			<li>
				<NavLink activeStyle={activeStyle} to="/new-post">
					New Post
				</NavLink>
			</li>
		</ul>
	);
}

export default Navigation;
