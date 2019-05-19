import React from 'react';
import '../style/clockComp';

class ClockComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: Date.now(),
        }
    }
    
    componentDidMount(){
        this.timeId = setInterval(() => {
            this.setState({
                now: Date.now(),
            })
        }, 1000);
    }

    pauseOrStart = () => {
        if (this.timeId) {
            clearInterval(this.timeId);
            this.timeId = 0;
        } else {
            this.timeId = setInterval(() => {
                this.setState({
                    now: Date.now(),
                })
            }, 1000);
        }
    }

    render() {
        return (
            <div className="contain">
                <div className="clock">
                    {new Date(this.state.now).toLocaleDateString()} {new Date(this.state.now).toLocaleTimeString()}
                </div>
                <button onClick={this.pauseOrStart} type="button" className="btn">停止/开始</button>
            </div>
        )
    }
    
}

export default ClockComp;