import React from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';


class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true,
        })
    }
    onLogout = () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    render() {

        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <div>
                    {this.state.isLoggedIn ? <Logout onLogout={this.onLogout} />
                        : <Login onLogin={this.onLogin} />}
                </div>
            </div>
        )
    }
}

export default Auth;