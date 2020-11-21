const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Alex",
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
        },
        {
            id: 2,
            name: "Sofya",
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
        },
        {
            id: 3,
            name: "Pasha",
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
        },
        {
            id: 4,
            name: "Oleg",
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
        },
        {
            id: 5,
            name: "Olya",
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
        },
        {
            id: 6,
            name: "Andrey",
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
        },
    ],
    messagesData: [
        {
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
            id: 1,
            message: "Hello",
        },
        {
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
            id: 2,
            message: "hello. How are you?",
        },
        {
            icon:
                "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
            id: 3,
            message: "too much shit happening",
        },
    ],
    newMessageBody: "",
};

const dialogsStateReducer = (state = initialState, action) => {
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
