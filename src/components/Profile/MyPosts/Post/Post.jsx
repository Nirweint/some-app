import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div>
      <div className="post">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUKkvgRNqYeTpqtPlfwFzDPSEzxBVzfZ6VIA&usqp=CAU"
          alt="icon"
        />
        {props.message}
      </div>
      <span>{props.likeCount} likes</span>
    </div>
  );
};

export default Post;
