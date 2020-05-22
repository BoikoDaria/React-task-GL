import React from 'react';
import UserInfo from './UserInfo';
import './SideMenu.css';

export default () => {
    const accountName = 'BoikoDaria';
    
    return (
        <div className="side-menu-container" >
            <UserInfo accountName={accountName} />
            <div className='inner-menu-container'>
                <div>Repositories</div>
                <div>Follovers</div>
                <div>Subscriptions</div>
                <div>About</div>
            </div>
        </div>
    );
}