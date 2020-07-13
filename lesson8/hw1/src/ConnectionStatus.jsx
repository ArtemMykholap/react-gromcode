import React, { Component } from 'react';

class ConnectionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online'
        }
    }

    componentDidMount() {
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOfflineStatus);

    }

    componentWillUnmount() {
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOfflineStatus);
    }

    updateOnlineStatus = () => {
        this.setState({
            status: 'online',
        })
    }
    updateOfflineStatus = () => {
        this.setState({
            status: 'offline',
        });
    };


    render() {
        let nameOfClass = `status ${this.state.status === 'offline' && 'status_offline'}`;
        return (<div className={nameOfClass}>{this.state.status}</div>)
    }
}

export default ConnectionStatus;