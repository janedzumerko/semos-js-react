import React from 'react';

const inlineStyle = {
	border: '1px solid black',
	height: '250px',
	width: '400px',
	margin: '10px',
	padding: '10px',
};

function Post(props) {
	return (
		<div style={inlineStyle}>
			<h2>{props.title}</h2>
			<p>{props.body}</p>
		</div>
	);
}

export default Post;
