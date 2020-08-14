import React, { Component } from 'react';
import UserMenu from './UserMenu'

class Header extends Component {

    render() {
        return (
            <header class="header">
            <UserMenu></UserMenu>
            </header>
        )
    }
}

export default Header