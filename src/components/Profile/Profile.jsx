import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
            <img src='https://www.ippanetwork.org/wp-content/uploads/2016/03/MC-2016-Background-e1458413633484.jpg' alt='img'/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;