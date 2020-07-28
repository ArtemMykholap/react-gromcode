import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Day from './Day';

const App = () => {
    return (<>
        <div className="container">
            <Header />
            <Navigation />
            <div className="calendar">
                <ul className="table-content">
                    <li className='item-content-time'>
                        <Sidebar />
                    </li>
                    <Day />
                </ul>
            </div>
        </div>

    </>)
}
export default App