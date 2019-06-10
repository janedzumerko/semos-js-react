import React from 'react';

function MyButton(props) {
	return (
		<button onClick={props.click} style={props.style}>
			{props.children}
		</button>
	);
}

export default MyButton;
