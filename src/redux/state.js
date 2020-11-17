const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
    _state: {
        profileState: {
            postData: [
                { id: "1", message: "Hi, how are you?", likeCount: "2" },
                { id: "2", message: "It's my first post", likeCount: "7" },
            ],
            newPostText: "Enter message",
        },
        dialogsState: {
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
            newMessageBody: "Enter message",
        },
        navFriends: {
            friendsIcons: [
                {
                    id: "1",
                    icon:
                        "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                },
                {
                    id: "2",
                    icon:
                        "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                },
                {
                    id: "3",
                    icon:
                        "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                },
            ],
            friendsNames: [
                { id: 1, name: "Alex" },
                { id: 2, name: "Ksenya" },
                { id: 3, name: "Sofya" },
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("Sataetf");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profileState.newPostText,
                likeCount: 0,
            };
            this._state.profileState.postData.push(newPost);
            this._state.profileState.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileState.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                icon:
                    "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                id: 3,
                message: this._state.dialogsState.newMessageBody,
            };
            this._state.dialogsState.messagesData.push(newMessage);
            this._state.dialogsState.newMessageBody = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsState.newMessageBody = action.newMessageText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
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

export default store;
