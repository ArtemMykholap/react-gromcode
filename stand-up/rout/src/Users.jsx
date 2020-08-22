import React, { Component } from 'react';
import User from './User';
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
                            <Link to={`${match.path}/github`}>Github</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to={`${match.path}/facebook`}>Facebook</Link>
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