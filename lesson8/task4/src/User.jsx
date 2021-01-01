import React, { Component } from 'react';


class User extends Component {
    state = {
        users: []
    }


    componentDidMount() {
        this.fetchUser()

    }

    fetchUser = () => {
        fetch(`https://api.github.com/users`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data,
                })
            });
    }

    render() {

        return (
            <>
                {this.state.users.map(el => {
                    return (
                        <div className="user">
                            <img alt="User Avatar"
                                src={el.avatar_url}
                                className="user__avatar" />
                            <div className="user__info">
                                <span className="user__name">{el.login}</span>
                                <span className="user__location">{el.node_id}</span>
                            </div>
                        </div>)
                })}

            </>)
    }

}



export default User