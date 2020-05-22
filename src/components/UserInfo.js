import React, { useState, useEffect } from 'react';
import './UserInfo.css'
import getUser from '../data-providers/getUser';

export default ({ accountName }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getUser(accountName).then((accountInfo) => {
            if(accountInfo) {
                setData(accountInfo);

            }
        }).then(() => {
            setLoading(false);
        });
    }, [accountName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Failed to load</div>
    }
    
    return (
        <div className="user-info">
            <div className='user-photo' style={{ backgroundImage: `url(${data.avatar_url})` }} />
            <div className='user-name'>{data.login} </div>
            <div className='user-description'>{data.url}</div>
        </div>
    )
}