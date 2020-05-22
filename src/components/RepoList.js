import React from 'react';
import RepoItem from './RepoItem';
import './RepoList.css';

export default ({items}) => {
    return (
        <div className='repo-container'>
            <h5>Repositories</h5>
            <p>Overview of GitHub repos</p>
            <div className='table-menu'>
                <h6>Owner</h6>
                <h6>Name</h6>
                <h6>Description</h6>
                <h6>Forks</h6>
                <h6>Private</h6>
            </div>
            <div className="repo-list">
                {
                    items.map((item) => (
                        <RepoItem data={item}/>
                    )
                )
                }
            </div>
        </div>
       
    );
}
