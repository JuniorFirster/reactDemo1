import React from 'react';

class ClockComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Date.now(),
        }
    };
    
    render() {
        return <div>时钟66</div>
    };
    
}

export default ClockComp;