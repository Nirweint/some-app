import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = (props) => {
    let postElements = props.postData.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    };

    return (
        <div className="myPostsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className="MyPostBlock">{postElements}</div>
        </div>
    );
};

export default MyPosts;
