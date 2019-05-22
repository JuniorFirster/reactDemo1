import React from 'react';
import ProviderContain from './ProviderContain';
// import PropTypes from 'prop-types'; 
import CounterPanel from './view/CounterPanel';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProviderContain store={this.props.store}>
          <CounterPanel />
        </ProviderContain>
      </div>
    );
  }

}

// Provider.protoTypes = {
//   store: PropTypes.object.isRequired,
// }

// Provider.protoTypes = {
//   store: PropTypes.object,
// }

export default App;

