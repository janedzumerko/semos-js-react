import React from 'react';
import Post from './Post';

class Posts extends React.Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => this.setState({ posts: json }));
	}

	handlePostClick = id => {
		this.props.history.push('/posts/' + id);
	};

	render() {
		return this.state.posts.map(post => (
			// <NavLink to={'/posts/' + post.id} key={post.id}>
			<Post
				click={() => this.handlePostClick(post.id)}
				title={post.title}
				key={post.id}
			/>
			// </NavLink>
		));
	}
}

export default Posts;
