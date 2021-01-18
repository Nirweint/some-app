import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsState.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} icon={dialog.icon} id={dialog.id} />
    ));

    let messagesElements = props.dialogsState.messagesData.map((message) => (
        <Message icon={message.icon} message={message.message} />
    ));

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageBody(message);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>; 

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__head">Dialogs</div>
                {dialogsElements}
            </div>
            <div>
                <div className="messages">{messagesElements}</div>
                <div className="messages__add">
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.newMessageBody}
                        placeholder="Enter message"
                    ></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
