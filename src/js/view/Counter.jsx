import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="counter-contain">
        <div className=""></div>
      </div>
    )
  }
}

class CounterContain extends  Component {
  constructor(props, context) {
    super(props, context);
  }

  getContextState = () => {
    
  }

  render() {
    const { caption } = this.props;
    return <Counter caption={caption} />
  }
}

export default CounterContain;