import React from "react";
import "./Post.css";

const Post = props => {
  return (
    <section className="post-card">
      <img className="post-thumbnail" src={props.img} alt={props.title}></img>
      <div className="post-body">
        <div className="post-header">
          <h3>{props.title}</h3>
        </div>
        <p className="post-snippet">{props.content}</p>
      </div>
    </section>
  );
};

export default Post;
