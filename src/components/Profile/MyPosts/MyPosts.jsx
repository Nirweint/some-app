import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = () => {

let postData = [
    {message: "Hi, how are you?", likeCount: '2'},
    {message: "It's my first post", likeCount: '7'}
]

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
                <Post message={postData[0].message} likeCount={postData[0].likeCount} />
                <Post message={postData[1].message} likeCount={postData[1].likeCount} />
            </div>
        </div>
    );
};

export default MyPosts;
