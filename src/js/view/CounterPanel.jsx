import React, { Component } from 'react';
import CounterContain from './Counter';
import SummaryContain from './Summary';

class CounterPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="contain-box">
				<CounterContain caption="first"/>
				<CounterContain caption="second"/>
				<CounterContain caption="third"/>
				<SummaryContain />
			</div>
		);
	}
}

export default CounterPanel;