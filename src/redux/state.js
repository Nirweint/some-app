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
        },
        navFriends: {
            friendsIcons: [
                {
                    id: "1",
                    icon:
                        "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                },
                {
                    id: "1",
                    icon:
                        "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                },
                {
                    id: "1",
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
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profileState.newPostText,
            likeCount: 0,
        };
        this._state.profileState.postData.push(newPost);
        this._state.profileState.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profileState.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export default store;
