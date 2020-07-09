import React, { Component } from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOnline: true,
        }
    }
 
    connect = () => {
        this.setState({
            isOnline:true,
        })
    }

    render() {

        return (

              this.state.isOnline? <Online/> : <Offline connect={()=>this.connect()}/>   
        )

    }
}

export default Status;
