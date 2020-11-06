import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = () => {
    return (
        <div>
            <div>my posts</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="Hi, how are you?" likeCount="2" />
                <Post message="It's my first post" likeCount="7" />
            </div>
        </div>
    );
};

export default MyPosts;
