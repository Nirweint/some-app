import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messagesElements = props.messagesData.map((message) => (
        <Message message={message.message} />
    ));

    let dialogsElements = props.dialogsData.map((dialog) => (
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
