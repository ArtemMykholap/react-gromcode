import React, {Component} from 'react';
import Greeting from './Greeting.jsx'


class Auth extends Component{
    constructor(props){
        super(props);
            this.state={
                isLoggedIn: false,
            };
        
    }
    handleLogin=()=>{
        this.setState({
            isLoggedIn:true
        })
    }
    handleLogout=()=>{
        this.setState({
            isLoggedIn:false
        })
    }

    render(){
        let button;
        if(this.state.isLoggedIn){
            button= <button onClick={this.handleLogout}  className="logout btn">Logout</button>;
        } else{
            button=<button onClick={this.handleLogin} className="login btn">Login</button>;
        }

        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                <div>
                   {button} 
                  
                </div>
            </div>
        )
    }
}


export default Auth;