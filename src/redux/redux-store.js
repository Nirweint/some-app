import profileStateReducer from "./profile-state-reducer";
import dialogsStateReducer from "./dialogs-state-reducer";
import navFriendsReducer from "./nav-friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profileState: profileStateReducer,
    dialogsState: dialogsStateReducer,
    navFriends: navFriendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
