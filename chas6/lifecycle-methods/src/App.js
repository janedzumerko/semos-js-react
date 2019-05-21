import React from 'react';
import MyButton from './components/MyButton';
import Main from './containers/Main';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showMain: true,
		};
		console.log('[APP] Constructor called');
	}

	handleComponentChange = () => {
		this.setState((prevState, props) => {
			return {
				showMain: !prevState.showMain,
			};
		});
	};

	componentDidMount() {
		console.log('[APP] Component did mount');
	}

	componentDidUpdate() {
		console.log('[APP] Component did update');
	}

	componentWillUnmount() {
		console.log('[APP] Component will unmount');
	}

	render() {
		const btnStyle = {
			backgroundColor: this.state.showMain ? '#DC143C' : '#4CAF50',
			border: 'none',
			color: 'white',
			padding: '15px 32px',
			textAlign: 'center',
			textDecoration: 'none',
			display: 'inline-block',
			fontSize: '16px',
			margin: '4px 2px',
			cursor: 'pointer',
		};

		return (
			<>
				<div style={{ textAlign: 'center' }}>
					<MyButton click={this.handleComponentChange} style={btnStyle}>
						Click to switch components
					</MyButton>
				</div>

				{/* with click on the button we can see that component is 
        removed and another component is added from the DOM. 
        Check it with Inspect Element */}
				{this.state.showMain ? <Main /> : <h1>Some other component</h1>}
			</>
		);
	}
}

export default App;
