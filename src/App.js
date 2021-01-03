import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar store={props.store} />
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer store={props.store} />}
                />
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer store={props.store} />}
                />
                <Route
                    path="/users"
                    render={() => <UsersContainer store={props.store} />}
                />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
