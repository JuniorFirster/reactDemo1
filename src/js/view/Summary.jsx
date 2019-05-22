import React, { Component } from 'react';
import ProviderBox from '../ProviderBox';
import '../../style/summary';

const getTotal = context => {
  const storeObj = context.store.getState();
  const totalArray = Object.values(storeObj);
  const total = totalArray.reduce((total, item) => (total + item), 0);
  return total;
}

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="summary">summary: {this.props.total}</div>
    );
  }
}

class SummaryContain extends Component  {
  constructor(props, context) {
    super(props, context);
    this.state = {
      total: getTotal(this.context),
    }
  }

  onUpdate = () => {
    this.setState({ total: getTotal(this.context) });
  }

  componentDidMount() {
    this.context.store.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onUpdate);
  }

  render() {
    return <Summary total={this.state.total}/>
  }
}

SummaryContain.contextType = ProviderBox;

export default SummaryContain;