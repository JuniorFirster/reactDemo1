import React from 'react';
import ProviderBox from './ProviderBox';

class ProviderContain extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      return(
        <ProviderBox.Provider value={{store: this.props.store}}>
          {this.props.children}
        </ProviderBox.Provider>
      )
    }
}

export default ProviderContain;