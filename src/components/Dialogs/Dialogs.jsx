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
    return (
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__head">Dialogs</div>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div>
                <div className="messages">
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
