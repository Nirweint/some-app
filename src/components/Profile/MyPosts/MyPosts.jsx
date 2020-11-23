import React from "react";
import Post from "./Post/Post";
import "./MyPosts.css";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-state-reducer";

const MyPosts = (props) => {
    let postElements = props.state.profileState.postData.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className="myPostsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.state.profileState.newPostText}
                        placeholder="Enter message"
                    />
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
