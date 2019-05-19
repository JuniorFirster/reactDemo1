import { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      store: this.props.store,
    }
  }

  render() {
    return this.props.children;
  }
}

Provider.protoTypes = {
  store: PropTypes.object.isRequired,
}

Provider.protoTypes = {
  store: PropTypes.object,
}

export default Provider;

