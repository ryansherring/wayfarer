import React from "react";
import API from "../PostContainer/postSeed.json";
import "./PostDetail.css";

const PostDetail = props => {
  console.log({ PDprops: props });

  const postToShow = API.filter(post => post._id === props.match.params.id);

  console.log(postToShow[0]._id);

  const { title, date, content, user, img } = postToShow[0];

  return (
    <section className="aligner">
      <article className="post-detail">
        <h1 className="post-detail-header">{title}</h1>
        <img className="post-detail-img" src={img} alt={title}></img>
        <div className="post-detail-meta">
          <h4>{user}</h4>
          <h4>{date}</h4>
        </div>
        <p>{content}</p>
        <div className="post-detail-return" onClick={props.history.goBack}>
          <h4>Go Back</h4>
        </div>
      </article>
    </section>
  );
};

export default PostDetail;
