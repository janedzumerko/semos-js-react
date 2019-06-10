import React from 'react';

class FullPost extends React.Component {
	state = {
		activePost: {},
	};

	componentDidMount() {
		console.log(this.props.match.params.id);
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
			.then(response => response.json())
			.then(json => this.setState({ activePost: json }));
	}

	render() {
		console.log(this.state.activePost);
		return (
			<div>
				<h2>{this.state.activePost.title}</h2>
				<p>{this.state.activePost.body}</p>
			</div>
		);
	}
}

export default FullPost;
