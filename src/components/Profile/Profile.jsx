import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postData={props.postData}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
