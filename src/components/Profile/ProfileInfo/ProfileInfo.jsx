import React from "react";
import Loader from "../../common/loader/loader";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
 
    return (
        <div className="profile-info">
            <img className="profile-info__img"
                src={props.profile.photos.large}
                alt="img"
            />
            <div className="descriptionBlock">ava + descr</div>
        </div>
    );
};

export default ProfileInfo;
