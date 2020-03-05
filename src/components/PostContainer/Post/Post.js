import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";


const Post = props => {
  const { _id, img, title, content } = props.post;
  return (
    <section className="post-card">
      <img className="post-thumbnail" src={img} alt={title}></img>
      <div className="post-body">
        <div className="post-header">
          <h3>
            <Link to={`/posts/${_id}`}>{title}</Link>
          </h3>
        </div>
        <p className="post-snippet">{content}</p>
      </div>
    </section>
  );
};

export default Post;
