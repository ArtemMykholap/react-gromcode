import React, {Component} from 'react';
import User from './User.jsx'


class UserList extends Component {
    

    render(){
        const {users}=this.props;


        return( <ul className="users">
            {
            users.map(({name,age})=>
                <User  name={name} age={age}/>)
            }
      </ul>)

    }
}
export default UserList