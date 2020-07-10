import React, { Component } from 'react';
import Login from './Login'
import Logout from './Logout'


class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        }
    }


    render() {

        if (this.state.isLoggedIn) {
            return <Login />
        }
        return <Logout />



    }
}
export default Auth