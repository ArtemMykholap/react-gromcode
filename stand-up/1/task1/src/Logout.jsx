import React from 'react';

const Logout = props => {
    const onLogut = props.onLogout
    return (
        <button className="logout btn" onClick={onLogut}>Logout</button>)
}
export default Logout