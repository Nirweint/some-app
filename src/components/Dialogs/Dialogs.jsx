import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-state-reducer";
import DialogItem from "./DialogItem/DialogItem";
import "./Dialogs.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messagesElements = props.state.dialogsState.messagesData.map((message) => (
        <Message icon={message.icon} message={message.message} />
    ));

    let dialogsElements = props.state.dialogsState.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} icon={dialog.icon} id={dialog.id} />
    ));

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageBodyActionCreator(message));
    };

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
                        value={props.state.dialogsState.newMessageBody}
                        placeholder="Enter message"
                    ></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
