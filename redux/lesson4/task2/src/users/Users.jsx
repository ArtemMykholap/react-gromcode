import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import moment from 'moment';
export const currentDate = moment().format("YYYY-MM-DD");
import { flightDataSelector} from './users.selector';

const Users =(props)=> {



useEffect(() => {

    const computedUrl = `https://api.iev.aero/api/flights/${currentDate}`;
    fetch(computedUrl)
      .then((data) => data.json())
      .then((data) => flightDataSelector(data))
      .catch((error) => console.error(error));
  },[])


 return (
         <div className="users">
                <button
                    className="users__create-btn"
                >
                    Create user
                </button>
              
            </div>
        );
    }




const mapState = (state) => {
    return {
        flightDataSelector: flightDataSelector(state),
    };
};

const mapDispatch = {
    addUser: userActions.addUser,
};

const connector = connect(mapState, mapDispatch);
const connectedUsers = connector(Users);

export default connectedUsers;