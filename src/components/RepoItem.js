import React from 'react';
import getRepo from '../data-providers/getRepo';
import './RepoItem.css';

const RepoItem = ({data}) => {
    return (
        <div className='repo-item-metadata'>
            <p className='repo-item-owner'>{data.owner.login}</p>
            <p className='repo-item-name'>{data.name}</p>
            <p className='repo-item-description'>{data.description}</p>
            <p className='repo-item-forks'>{data.fork}</p>
            <p className='repo-item-privacy'>{data.private}</p>
        </div>
    )
}
export default RepoItem;
