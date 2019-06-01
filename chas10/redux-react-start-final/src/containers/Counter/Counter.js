import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import { INCREMENT, DECREMENT, ADD, SUB } from '../../store/actions';
import * as actions from '../../store/actions';

class Counter extends Component {
	state = {
		counter: 0,
	};

	counterChangedHandler = (action, value) => {
		switch (action) {
			case 'inc':
				this.setState(prevState => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case 'dec':
				this.setState(prevState => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case 'add':
				this.setState(prevState => {
					return { counter: prevState.counter + value };
				});
				break;
			case 'sub':
				this.setState(prevState => {
					return { counter: prevState.counter - value };
				});
				break;
		}
	};

	handleSub = () => {
		// od nekoj input
		console.log('handle sub')
		const mojaVrednost = 8;
		this.props.sub(mojaVrednost);
	}

	render() {
		console.log(this.state.counter)
		return (
			<>
				<div>
					<CounterOutput value={this.props.ctr} logged={this.props.isLogged} />
					<CounterControl
						label="Increment"
						clicked={this.props.inc}
					/>
					<CounterControl
						label="Decrement"
						clicked={this.props.dec}
					/>
					<CounterControl
						label="Add 5"
						clicked={this.props.add}
					/>
					<CounterControl
						label="Subtract 5"
						clicked={this.handleSub}
					/>
				</div>

				<button onClick={this.props.authChange}>
					{
						this.props.isLogged ? 'LOG OUT' : 'LOG IN'
					}
				</button>

				<br />

				<button onClick={() => this.props.storeCounter(this.props.ctr)}>
					STORE
				</button>
				{
					this.props.allCounters.map((val, idx) => <p key={idx}>{val}</p>)
				}

			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctrR.counter,
		isLogged: state.authR.isLoggedIn,
		allCounters: state.allCountsR.counters
	};
};

const mapDispatchToProps = dispatch => {
	return {
		inc: () => dispatch({ type: actions.INCREMENT }),
		dec: () => dispatch({ type: actions.DECREMENT }),
		add: () => dispatch({ type: actions.ADD, value: 5 }),
		sub: (val) => dispatch({ type: actions.SUB, payload: val }),
		authChange: () => dispatch({ type: actions.AUTH_CHANGE }),
		storeCounter: (currentCounter) => dispatch({ type: actions.STORE_COUNTER, payload: currentCounter })
	}
}

// const newCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default newCounter;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
