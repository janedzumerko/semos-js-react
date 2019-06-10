import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FullPost from './components/FullPost';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NewPost from './components/NewPost';
import Posts from './components/Posts';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/posts" component={Posts} />
				<Route path="/posts/:id" component={FullPost} />
				<Route path="/new-post" component={NewPost} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
