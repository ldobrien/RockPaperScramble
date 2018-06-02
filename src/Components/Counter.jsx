import React from 'react';
import AppActions from '../actions/AppActions.js';

class Counter extends React.Component {
	constructor() {
		super();
		this._updateCounter = this._updateCounter.bind(this);
	}
	_updateCounter() {
		const { counterNum} = this.props;
		AppActions.setCounter(counterNum + 1);
	}

	render() {
		const {counterNum} = this.props;

		return (
			<div>
				<button onClick={this._updateCounter}>Counter</button>
				<div>{counterNum}</div>
			</div>
			);
	}
}

export default Counter;