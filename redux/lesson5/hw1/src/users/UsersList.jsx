import React from 'react';
import User from './User.jsx';
import Filter from '../Filter.jsx';
import { connect } from 'react-redux';
import * as  userActions from './users.actions';
import{ usersListSelector,filterTextSelector}  from './users.selectors';

const UsersList = ({ users, filterText, value, filterUser }) => {

    const onChange = event => {
        filterText = event.target.value;
        filterUser(filterText);
    }


    const filteredPerson = users.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase())) || users
    return (
        <div>
            <Filter onChange={onChange} filterText={value} count={filteredPerson.length} />
            <ul className="users">
                {filteredPerson.map(({ id, name, age }) => <User key={id} name={name} age={age} />)}
            </ul>
        </div>
    )
}

const mapState = state => {
    return {
        users:  usersListSelector(state),
        filterText: filterTextSelector(state)
    }
}
const mapDispatch = {
    filterUser: userActions.filterUser

};

export default connect(mapState, mapDispatch)(UsersList)

