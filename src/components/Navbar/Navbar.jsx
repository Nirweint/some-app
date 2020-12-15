import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    // let state = props.store.getState();

    // let friendsIcon = state.navFriends.friendsIcons.map((icon) => (
    //     <img src={(icon = icon.icon)} alt="icon" />
    // ));

    // let friendsNam = state.navFriends.friendsNames.map((name) => (
    //     <div>{name.name}</div>
    // ));

    return (
        <nav className="nav">
            <div className="nav__link">
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className="nav__link">
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className="nav__link">
                <NavLink to="/news">News</NavLink>
            </div>
            <div className="nav__link">
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className="nav__link">
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className="nav__link">
                <NavLink to="/settings">Settings</NavLink>
            </div>

            {/* <div className="friends">
                <div className="friends__header">Friends</div>
                <div className="friends__icons">
                    <div className="friends__icon">{friendsIcon}</div>
                    <div className="friends__name">{friendsNam}</div>
                </div>
            </div> */}
        </nav>
    );
};

export default Navbar;
