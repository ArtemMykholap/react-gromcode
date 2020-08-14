import React, { Component } from 'react';
import Header from './Header';
import { userData, NameContext } from './data-context';


class App extends Component {
    state = {
        userData: {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001'
        }
    }


    render() {
        console.log(this.state.userData)
        return (
            <div className="page">
                <NameContext.Provider value={this.state.userData}>
                    <Header />
                </NameContext.Provider>
            </div>

        )
    }
}

export default App