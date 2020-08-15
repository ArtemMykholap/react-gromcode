// import React, { Component } from 'react';
// import Header from './Header';
// import { userData, NameContext } from './data-context';


// class App extends Component {
//     state = {
//         userData: {
//             name: 'Nikola Tesla',
//             avatar_url: 'https://avatars3.githubusercontent.com/u10001'
//         }
//     }


//     render() {
//         console.log(this.state.userData)
//         return (
//             <div className="page">
//                 <NameContext.Provider value={this.state.userData}>
//                     <Header />
//                 </NameContext.Provider>
//             </div>

//         )
//     }
// }

// export default App

import React, { Component } from 'react';
import Header from './Header';
import { Context } from './Context';

class App extends Component  {
    state = {
        userData: {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001',
        },
    };

    render () {
        return(
            <div className="page">
                <Context.Provider value={this.state.userData}>
                    <Header/>
                </Context.Provider>
            </div>
        );
    };
};

export default App;