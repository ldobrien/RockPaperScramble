import React from 'react';
import AppActions from '../actions/AppActions.js';

class Circle extends React.Component {
	constructor() {
		super();
		// this.circleposx = this.circleposx.bind(this);
		this.circlepos = this.circlepos.bind(this);
	}

	circlepos() {
		const {posX} = this.props;
		AppActions.setPosn(posX, 0);
	}

	// circlepos() {
	// 	const {posX} = this.props;
	// 	const {posY} = this.props;
	// 	AppActions.setPosn(posX, posY);
	// }

	render() {
		const {posX} = this.props;
		const {posY} = this.props;

		return (
			<div>
				posx = {this.circlepos}>
			</div>
			);
	}
}

export default Circle;