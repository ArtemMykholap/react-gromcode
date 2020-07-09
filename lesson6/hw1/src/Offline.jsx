import React from 'react';


const Offline = ({connect}) => {
  
    return (<div className="status">
        <span className="status__text">Offline</span>
        <button onClick={connect} className="status__btn">Reconnect</button>
    </div>)
}

export default Offline;
