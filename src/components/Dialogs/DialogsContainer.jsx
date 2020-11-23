import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-state-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (message) => {
        let action = updateNewMessageBodyActionCreator(message);
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            state={state}
            addMessage={addMessage}
            updateNewMessageBody={onMessageChange}
            newMessageBody={state.dialogsState.newMessageBody}
            dialogItem={state.dialogsState.dialogsData}
            messageItem={state.dialogsState.messagesData}
        />
    );
};

export default DialogsContainer;
