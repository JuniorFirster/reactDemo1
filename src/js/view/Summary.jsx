import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>total {this.props.total}</div>
    );
  }
}

class SummaryContain extends Component  {
  constructor(props, context) {
    super(props, context);
  }

  onUpdate = () => {
    const storeObj = this.context.getState();
    const totalArray = Object.values(storeObj);
    const total = totalArray.reduce((total, item) => (total + item), 0);
    this.setState({ total });
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

export default SummaryContain;