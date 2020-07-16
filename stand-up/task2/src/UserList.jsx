import React, { Component } from 'react';
import User from './User.jsx'
import Pagination from './Pagination'


class UserList extends Component {
    state = {
        currentPage: 0,
        itemsPerPage: 3,
    }
    goNextHandler = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }
    goPrevHandler = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }


    render() {

        const { users } = this.props;
        const { currentPage, itemsPerPage } = this.state;
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        const usersToDisplay = users.slice(start, end);

        return (
            <div>    <Pagination
                goNextHandler={this.goNextHandler}
                goPrevHandler={this.goPrevHandler}
                currentPage={currentPage + 1}
                totalItems={users.length}
                itemsPerPage={itemsPerPage} />
                <ul className="users">
                    {usersToDisplay.map(({ id, name, age }) =>
                        <User key={id} name={name} age={age} />)
                    }
                </ul>
            </div>)

    }
}
export default UserList