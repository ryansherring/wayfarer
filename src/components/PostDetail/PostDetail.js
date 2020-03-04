import React from "react";
import API from "../PostContainer/postSeed.json";
import "./PostDetail.css";

const PostDetail = props => {
  console.log({ PDprops: props });

  const postToShow = API.filter(post => post._id === props.match.params.id);
  console.log(postToShow[0]._id);
  const { title, date, content, user, img } = postToShow[0];
  return (
    <section className="post-detail">
      <h1 onClick={props.history.goBack}>{title}</h1>
      <img src={img} alt={title}></img>
      <h2>{user}</h2>
      <h2>{date}</h2>
      <p>{content}</p>
    </section>
  );
};

export default PostDetail;
