import React, { Component } from 'react';
import { NameContext } from './data-context'

class UserMenu extends Component {

    render() {
        return (
            <div className="menu">
                <span className="menu__greeting">{`Hello,${this.context.name }`}</span>
                <img alt="User Avatar" src={this.context.avatar_url}  className="menu__avatar" />
            </div>
        )
    }
}

UserMenu.contextType = NameContext;
export default UserMenu