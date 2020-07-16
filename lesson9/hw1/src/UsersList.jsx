import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';


class UserList extends Component {

    state = { value: '' };

    onChange = event => {
        this.setState({ value: event.target.value })
    }

    render() {
        const { users } = this.props;
        const { value } = this.state;
        const filteredPerson = users.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase())) || users
        return (
            <div>
                <Filter onChange={this.onChange} filterText={value} count={filteredPerson.length} />
                <ul className="users">
                    {filteredPerson.map(({ id, name, age }) => <User key={id} name={name} age={age} />)}
                </ul>
            </div>
        )
    }

}
export default UserList

