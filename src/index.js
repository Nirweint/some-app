import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
    { id: "1", message: "Hi, how are you?", likeCount: "2" },
    { id: "2", message: "It's my first post", likeCount: "7" },
    { id: "3", message: "Fuck", likeCount: "4" },
];

let dialogsData = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Ksenya" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Oleg" },
    { id: 5, name: "Olya" },
    { id: 6, name: "Andrey" },
];

let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "hello. How are you?" },
    { id: 3, message: "too much shit happening" },
];

ReactDOM.render(
    <App
        postData={postData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />,
    document.getElementById("root")
);

reportWebVitals();
