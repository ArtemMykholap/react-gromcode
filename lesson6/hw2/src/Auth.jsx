import React, { Component } from 'react';
import Login from './Login'
import Spinner from './Spinner'
import Logout from './Logout'

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isProcessing: false,
        }
    }


    login = () => {
        this.setState({
            isProcessing: true
        })


        setTimeout(()=>{
            this.setState({
                isProcessing:false,
                isLoggedIn: true
            })
        },2000)
      


    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        })

    }

    render() {

        const { isLoggedIn, isProcessing } = this.state;

        if (isProcessing) {
            return (
                <Spinner size={77}/>
            )
        }

        if (isLoggedIn) {
            return (
                <Logout onLogout={this.logout} />)
        }
        return (<Login onLogin={this.login} />)

    }


}

export default Auth