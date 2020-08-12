import React from 'react'
import Home from './Home';
import Users from './Users';
import User from './User';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'

const App = () => {

    return (

        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item">
                        <a href="/">Home</a></li>
                    <li className="navigation__item"><a href="/users">Users</a></li>
                </ul>
                <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path="/users"><Users></Users></Route>
                </Switch>

                {/* <div className="page__content">
                    <h1>Users</h1>
                    <ul className="navigation">
                        <li className="navigation__item">
                            <a href="/users/github">Github</a>
                        </li>
                        <li className="navigation__item">
                            <a href="/users/facebook">Facebook</a>
                        </li>
                    </ul>


                    <div className="user">
                        <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" />
                        <div className="user__info">
                            <span className="user__name">GitHub</span>
                            <span className="user__location">San Francisco,CA</span>
                        </div>
                    </div>
                </div>



                <div class="page__content">
                    <h1>🏠</h1>
                </div> */}

            </BrowserRouter>
        </div >

    )

}

export default App