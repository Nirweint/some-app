import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <img className="profile-info__img"
                src="https://www.ippanetwork.org/wp-content/uploads/2016/03/MC-2016-Background-e1458413633484.jpg"
                alt="img"
            />
            <div className="descriptionBlock">ava + descr</div>
        </div>
    );
};

export default ProfileInfo;
