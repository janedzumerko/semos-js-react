import React from 'react';

function Post(props) {
	return (
		<p
			onClick={props.click}
			style={{ border: '1px solid black', padding: '5px', margin: '10px' }}
		>
			{props.title}
		</p>
	);
}

export default Post;
