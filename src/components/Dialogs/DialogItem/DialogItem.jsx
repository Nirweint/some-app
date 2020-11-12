import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <NavLink to={"/dialogs/" + props.id}>
                <img src={props.icon} alt="" />
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
