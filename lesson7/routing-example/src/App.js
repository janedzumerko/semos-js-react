import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

function App() {
	return (
		<BrowserRouter>
			{/* <Route exact path="/" component={Home} /> */}

			{/* <Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}

			{/* <Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
      <Route component={NotFound} /> */}

			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contacts" component={Contact} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
