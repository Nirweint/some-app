import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar
                friendsData={props.state.navFriends.friendsIcons}
                friendsNam={props.state.navFriends.friendsNames}
            />
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs
                            dialogsData={props.state.dialogsState.dialogsData}
                            dispatch={props.dispatch}
                            messagesData={props.state.dialogsState.messagesData}
                            newMessageBody={props.state.dialogsState.newMessageBody}
                        />
                    )}
                />
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            postData={props.state.profileState.postData}
                            dispatch={props.dispatch}
                            newPostText={props.state.profileState.newPostText}
                        />
                    )}
                />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
