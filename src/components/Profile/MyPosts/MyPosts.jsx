import React from 'react';
import Post from './Post/Post';
import './MyPosts.css';

const MyPosts = () => {
    return (
        <div className='content'>
            <div>
                my posts 
                <div>
                    new post
                </div>
            </div>
            <Post/>
        </div>
    );
}

export default MyPosts;