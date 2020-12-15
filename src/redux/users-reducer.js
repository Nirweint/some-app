const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        { id: 1, followed: false, fullName: "Alex", status: "I am dead", loacation: {city: "Pinsk", country: "Belarus"} },
        { id: 2, followed: true, fullName: "Sofya", status: "I am dead too", loacation: {city: "Pinsk", country: "Belarus"} },
        { id: 3, followed: false, fullName: "Pasha", status: "I drunk", loacation: {city: "Minsk", country: "Belarus"} },
        { id: 4, followed: true, fullName: "Dmitry", status: "away", loacation: {city: "Moscow", country: "Russia"} },
    ],
    newPostText: "",
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const followAC = () => {
    return {
        type: FOLLOW,
    };
};

export const unfollowAC = () => {
    return {
        type: UNFOLLOW,
    };
};

export default usersReducer;
