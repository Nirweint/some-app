import React from "react";
import "./Dialogs.css";

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs__items">
                <div className="dialogs__head">Dialogs</div>
                <div className="dialog active">Alex</div>
                <div className="dialog">Ksenya</div>
                <div className="dialog">Pasha</div>
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
