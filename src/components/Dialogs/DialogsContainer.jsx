import { connect } from "react-redux";
import {
    addMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-state-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsState,
        newMessageBody: state.dialogsState.newMessageBody,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageBody: (message) => {
            let action = updateNewMessageBodyActionCreator(message);
            dispatch(action);
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;