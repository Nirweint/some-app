import React from "react";
import Loader from "../../common/loader/loader";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />;
    }

    return (
        <div className="profile-info">
            <img
                className="profile-info__img"
                src={props.profile.photos.large}
                alt="img"
            />
            <ProfileStatus status="Hello"/>
            <div className="profile-full-name">FullName: {props.profile.fullName}</div>
            <div className="profile-about-me">Description: {props.profile.aboutMe}</div>
            <div className="profile-contacts">JobDescription: {props.profile.lookingForAJobDescription}</div>
        </div>
    );
};

export default ProfileInfo;
