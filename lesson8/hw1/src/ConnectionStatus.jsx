import React, { Component } from 'react';

class ConnectionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online'
        }
    }


    updateOnlineStatus = (event) => {
        var condition = navigator.onLine ? "online" : "offline";

        this.setState({
            status: condition,
        })
    }

    componentWillUnmount(){
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }


    render() {
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);

        const nameOfClass=`status ${this.state.status==='offline' && 'status_offline'}`;
    return (<div className={nameOfClass}>{this.state.status}</div>)
    }
}

export default ConnectionStatus;