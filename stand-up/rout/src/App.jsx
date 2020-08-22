import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import Users from './Users';

import Home from './Home';



const App = () => {

    return (
        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
                <Route exact path="/"><Home /></Route>
                <Route path="/users" component={Users} />
            </BrowserRouter>
        </div>

    )


}

export default App;