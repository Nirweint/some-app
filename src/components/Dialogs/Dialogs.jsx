import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const DialogItem = (props) => {
    return (
        <div className="dialog">
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
    <div className="message">{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__head">Dialogs</div>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Ksenya" id="2"/>
                <DialogItem name="Pasha" id="3"/>
                <DialogItem name="Oleg" id="4"/>
            </div>
            <div>
                <div className="messages">
                    <Message message="Hello"/>
                    <Message message="hello. How are you?"/>
                    <Message message="too much shit happening"/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
