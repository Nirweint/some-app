import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";

const MyPosts = (props) => {
    let postElements = props.posts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className="myPostsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                        placeholder="Enter message"
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className="MyPostBlock">{postElements}</div>
        </div>
    );
};

export default MyPosts;
