import React, { Component } from 'react';
import UserMenu from './UserMenu'

class Header extends Component {

    render() {
        return (
            <header className="header">
            <UserMenu></UserMenu>
            </header>
        )
    }
}

export default Header
