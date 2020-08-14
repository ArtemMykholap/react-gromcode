import React, { Component } from 'react';
import Header from './Header';
import {userData,NameContext } from './data-context';


class App extends Component {
    state = {
        userData:userData,
    }
 

    render() {
        console.log(this.state.userData)
        return (
            <div>
                <NameContext.Provider value={this.state.userData}>
                    <Header/>
                </NameContext.Provider>
            </div>
        )
    }
}

export default App