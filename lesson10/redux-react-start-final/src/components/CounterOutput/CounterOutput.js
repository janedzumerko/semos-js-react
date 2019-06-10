import React from 'react';
import './CounterOutput.css';

const counterOutput = props => (
	<div className="CounterOutput">
		Current Counter: {props.value} and user is {props.logged ? '' : 'not'} logged in
	</div>
);

export default counterOutput;
