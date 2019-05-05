import React from 'react';

class ClockComp extends React.Component {
    constructor() {
        this.state = {
            time: Date.now(),
        }
    };
    
    render() {
        return <div>时钟</div>
    };
    
}

export default ClockComp;