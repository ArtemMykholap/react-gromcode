import React from 'react';
import { Provider } from 'react-redux';
import Weather from './weather/Weather';

import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div className='page'>
               <Weather/>
            </div>

        </Provider>
    );
};

export default App;