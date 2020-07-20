import React, { Component } from 'react';
import Expand from './Expand'

class App extends Component {
    state = {
        isOpen: false,
    }
    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className="app">
                <Expand
                    title='Some title' toggleHandler={this.toggleHandler} isOpen={isOpen}>
                  <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                </Expand>
            </div>
        )
    }
}
export default App