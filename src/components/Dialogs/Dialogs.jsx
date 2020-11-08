import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__head">Dialogs</div>
                <div className="dialog active">
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialogs/2">Ksenya</NavLink>
                </div>
                <div className="dialog">
                    <NavLink to="/dialogs/3">Pasha</NavLink>
                </div>
            </div>
            <div>
                <div className="messages">
                    <div className="message">Hello</div>
                    <div className="message">hello. How are you?</div>
                    <div className="message">too much shit happening</div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
