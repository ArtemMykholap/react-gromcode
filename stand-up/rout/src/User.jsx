import React, { Component } from 'react';


class User extends Component {
    state = {
        avatarUrl: null,
        userName: null,
        userLocation: null,
    }



    componentDidMount() {
        debugger;
        const userId = this.props.match.params.userId;
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                debugger;
                this.setState({
                    avatarUrl: userData.avatar_url,
                    userName: userData.name,
                    userLocation: userData.location,
                })
            })
    }

    render() {
        debugger;
        const userId = this.props.match.params.userId;
        return (
            <div className="user">
                <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">GitHub</span>
                    <span className="user__location">San Francisco,CA</span>
                </div>
            </div>

        )

    }
}

export default User