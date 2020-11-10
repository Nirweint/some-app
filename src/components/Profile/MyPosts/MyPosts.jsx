import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = (props) => {
    let postElements = props.postData.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

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
            <div className="MyPostBlock">{postElements}</div>
        </div>
    );
};

export default MyPosts;
