import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import {currentPageSelector,usersListSelector} from './users.selectors';

class UsersList extends Component {
    render() {
        const itemsPerPage = 3;
        const { users, currentPage, goNext, goPrev } = this.props;
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const usersToShow = users.slice(startIndex, endIndex);


        return (
            <div>
                <Pagination goNext={goNext}
                    goPrev={goPrev}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={users.length} />
                <ul className="users">
                    {usersToShow.map(user => (
                        <User key={user.id} name={user.name} age={user.age} />
                    ))
                    }
                </ul>
            </div>
        )
    }

}

const mapState = (state) => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    };
};

const mapDispatch = {
    goNext: userActions.goNext,
    goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const Users = connector(UsersList);

export default Users;

// export default UsersList
