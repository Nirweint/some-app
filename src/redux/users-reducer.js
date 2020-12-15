const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Alex",
            status: "I am dead",
            loacation: { city: "Pinsk", country: "Belarus" },
        },
        {
            id: 2,
            followed: true,
            fullName: "Sofya",
            status: "I am dead too",
            loacation: { city: "Pinsk", country: "Belarus" },
        },
        {
            id: 3,
            followed: false,
            fullName: "Pasha",
            status: "I drunk",
            loacation: { city: "Minsk", country: "Belarus" },
        },
        {
            id: 4,
            followed: true,
            fullName: "Dmitry",
            status: "away",
            loacation: { city: "Moscow", country: "Russia" },
        },
    ],
    newPostText: "",
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users] same us users: [state.users.map(u => u)]
                users: [
                    state.users.map((u) => {
                        if (u.id === action.userId) {
                            return { ...u, followed: true };
                        }
                        return u;
                    }),
                ],
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [
                    state.users.map((u) => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false };
                        }
                        return u;
                    }),
                ],
            };
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }

        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    };
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};
export default usersReducer;
