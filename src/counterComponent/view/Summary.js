import * as Action from '../action';
import React, { Component, ProTypes} from 'react';
import SummaryStore from '../stores/SummaryStore';
import CounterStore from '../stores/CounterStore';
import Counter from './Counter';

const captionList = Object.keys(CounterStore.getValues());

class Summary extends Component {
  constructor() {
    super();
    this.state = {
        total: SummaryStore.getSummaryValues(),
    }
  }

  onUpdate = () => {
    const newTotal = SummaryStore.getSummaryValues();
    this.setState({total: newTotal});
  }

  componentDidMount() {
    SummaryStore.addEventListenerChange(this.onUpdate);
  }

  componentWillUnmount() {
    SummaryStore.addEventListenerChange(this.onUpdate);
  }

  render() {
    const CounterList = captionList.map(item => <Counter key={item} caption={item}/>)
    return (
      <div>
        <div>{CounterList}</div>
        <div>total: {this.state.total}</div>
      </div>
    )
  }
}

export default Summary;