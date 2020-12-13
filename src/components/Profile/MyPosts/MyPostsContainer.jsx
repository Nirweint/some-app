import { connect } from "react-redux";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-state-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        profileState: state.profileState,
        newPostText: state.profileState.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
