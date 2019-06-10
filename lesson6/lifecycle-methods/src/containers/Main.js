import axios from 'axios';
import React from 'react';
import Post from '../components/Post';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			errorMsg: '',
		};
		console.log('[MAIN] Constructor called');
	}

	componentDidMount() {
		console.log('[MAIN] Component did mount');
		// fetch('https://jsonplaceholder.typicde.com/posts')
		// 	.then(response => response.json())
		// 	.then(data => this.setState({ posts: data }))
		// 	.catch(err => this.setState({ errorMsg: err.message }));
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => this.setState({ posts: response.data }))
			.catch(error => this.setState({ errorMsg: error.message }));
	}

	componentDidUpdate() {
		console.log('[MAIN] Component did update');
	}

	componentWillUnmount() {
		console.log('[MAIN] Component will unmount');
	}

	render() {
		return (
			<>
				<h1>Main component</h1>
				<h2>Fetch data from https://jsonplaceholder.typicode.com/posts </h2>
				{this.state.errorMsg !== '' ? (
					<p>Error : {this.state.errorMsg}</p>
				) : (
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						{this.state.posts.map(post => (
							<Post title={post.title} body={post.body} key={post.id} />
						))}
					</div>
				)}
			</>
		);
	}
}

export default Main;
