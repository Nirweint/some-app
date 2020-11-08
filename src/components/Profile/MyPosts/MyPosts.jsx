import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = () => {
    return (
        <div className="myPostsBlock">
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className="MyPostBlock">
                <Post message="Hi, how are you?" likeCount="2" />
                <Post message="It's my first post" likeCount="7" />
            </div>
        </div>
    );
};

export default MyPosts;
