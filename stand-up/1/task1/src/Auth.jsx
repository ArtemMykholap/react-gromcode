import React, { Component } from 'react';
import Login from './Login'
import Logout from './Logout'
import Spinner from './Spinner'


class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isProcessing: false
        }
    }

    //1. devide task for subtask
    //2.for each subtask make algo
    //3. test each subtask
    //4. read documentation

    onLogin = () => {
        this.setState({
            isProcessing: true
        })

        setTimeout(() => {
            this.setState({
                isProcessing: false,
                isLoggedIn: true
            })
        }, 2000)
    }

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
        })

    }


    render() {
        const {isLoggedIn, isProcessing}=this.state;

        if(isLoggedIn){
            return<Logout onLogin={this.onLogin}/>
        }
        if (isProcessing) {
           return <Spinner size={50} />
        }
     
            return (
                <Login onLogin={this.onLogin} />)
            }
       

    
}
export default Auth