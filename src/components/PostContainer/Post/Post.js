import React from "react";

const Post = props => {
  return (
    <article>
      <div className="post-header">
        <h3>{props.title}</h3>
        <h4>{props.user}</h4>
        <h4>{props.date}</h4>
      </div>
      <img className="post-thumbnail" src={props.img} alt={props.title}></img>
      <p className="post-snippet">{props.content}</p>
    </article>
  );
};

export default Post;
