import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let postData = [
        { message: "Hi, how are you?", likeCount: "2" },
        { message: "It's my first post", likeCount: "7" },
    ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
};

export default Profile;
