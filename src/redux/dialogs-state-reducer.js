const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsStateReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                icon:
                    "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                id: 3,
                message: state.newMessageBody,
            };
            state.messagesData.push(newMessage);
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    };
};

export const updateNewMessageBodyActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageText: message,
    };
};

export default dialogsStateReducer;
