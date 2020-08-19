import React, { Component } from 'react';
import User from './User.jsx';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'


class Users extends Component {


    render() {

        const { match } = this.props;

        return (
            <BrowserRouter>
                <div className="page__content">
                    <h1>Users</h1>
                    <ul className="navigation">
                        <li className="navigation__item">
                            <Link to="/users/github">Github</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/users/facebook">Facebook</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path={match.path}> <span>Select a user please</span></Route>
                        <Route path={`${match.path}/:userName`} component={User}></Route>
                    </Switch>
                </div>
            </BrowserRouter>)
    }
}

export default Users