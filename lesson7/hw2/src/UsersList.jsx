import React, { Component } from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends Component {
    state = {
        currentPage: 0,
        itemsPerPage: 3
    }


    goNext = () => {

        this.setState({
            currentPage: this.state.currentPage + 1
        })

    }
    goPrev = () => {

        this.setState({
            currentPage: this.state.currentPage - 1
        })

    }

    render() {
        const { users } = this.props;
        const { currentPage, itemsPerPage } = this.state;
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const usersToShow = users.slice(startIndex, endIndex);




        return (
            <div>
                <Pagination goNext={this.goNext}
                    goPrev={this.goPrev}
                    currentPage={currentPage + 1}
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

export default UsersList