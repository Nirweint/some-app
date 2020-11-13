import React from "react";
import './Message.css';

const Message = (props) => {
return <div className="message">
    <div className="message__icon"><img src={props.icon} alt="icon"/></div>
    <div className="message__message">{props.message}</div>
</div>;
};

export default Message;
