import React, { Component, PropTypes } from 'react';
import * as Action from '../action';
import CounterStore from '../stores/CounterStore';
import { deflate } from 'zlib';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: CounterStore.getValues()[props.caption],
        }
    }

    onUpdate = () => {
        const newCount = CounterStore.getValues()[this.props.caption];
        this.setState({count: newCount});
    }

    btnOnIncrement = () => {
        Action.increment(this.props.caption);
    }

    btnOnDecrement = () => {
        Action.decrement(this.props.caption);
    }

    componentDidMount() {
        CounterStore.addEventListenerChange(this.onUpdate);
    }

    componentWillUnmount() {
        CounterStore.removeEventListenerChange(this.onUpdate);
    }

    render() {
        return (
            <div>
                <div>{this.props.caption}</div>
                <div>
                    <button type="button" onClick={this.btnOnIncrement}>+</button>
                    <button type="button" onClick={this.btnOnDecrement}>-</button>
                </div>
                <div>total: {this.state.count}</div>
            </div>
        )
    }
}

// Counter.propTypes = {
//     caption: PropTypes.string
// };

export default Counter;