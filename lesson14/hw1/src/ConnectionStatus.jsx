import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
    const [status, setStatus] = useState('online')

    const updateOnlineStatus = () => {
        setStatus('online')
    }

    const updateOfflineStatus = () => {
        setStatus('offline')
    };

    useEffect(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOfflineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOfflineStatus);

        }
    }, [])

    let nameOfClass = `status ${status === 'offline' && 'status_offline'}`;
    return (
        <div className={nameOfClass}>{status}</div>
    )
}

export default ConnectionStatus;