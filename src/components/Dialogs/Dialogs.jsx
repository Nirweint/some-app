import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className="message">{props.message}</div>;
};

let dialogsData = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Ksenya" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Oleg" },
    { id: 5, name: "Olya" },
];

let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "hello. How are you?" },
    { id: 3, message: "too much shit happening" },
];

const Dialogs = (props) => {
    let messagesElements = messagesData.map((message) => (
        <Message message={message.message} />
    ));

    let dialogsElements = dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ));

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__head">Dialogs</div>
                {dialogsElements}
            </div>
            <div>
                <div className="messages">{messagesElements}</div>
            </div>
        </div>
    );
};

export default Dialogs;
