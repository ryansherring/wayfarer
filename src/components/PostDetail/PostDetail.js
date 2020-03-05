import React from "react";
import API from "../PostContainer/postSeed.json";
import { Modal } from "semantic-ui-react";
import ModalBasicExample from "./ConfirmModal/ConfirmModal";
import "./PostDetail.css";
import { render } from "react-dom";

class PostDetail extends React.Component {
  state = {
    show: false
  };

  handleOpen = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    console.log({ PDprops: this.props });

    const postToShow = API.filter(
      post => post._id === this.props.match.params.id
    );

    console.log(postToShow[0]._id);
    console.log(this.props.match.params.id);

    const { title, date, content, user, img } = postToShow[0];
    return (
      <>
        <section className="aligner">
          <article className="post-detail">
            <div className="post-detail-header">
              <h1 className="post-detail-title">{title}</h1>
              <div className="post-detail-modify">
                <h4 className="post-detail-edit">Edit</h4>
                <ModalBasicExample
                  handleOpen={this.handleOpen}
                  handleClose={this.handleClose}
                  show={this.state.show}
                  id={this.props.match.params.id}
                  title={title}
                />
              </div>
            </div>
            <img className="post-detail-img" src={img} alt={title}></img>
            <div className="post-detail-meta">
              <h4>{user}</h4>
              <h4>{date}</h4>
            </div>
            <p>{content}</p>
            <div
              className="post-detail-return"
              onClick={this.props.history.goBack}
            >
              <h4>Go Back</h4>
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default PostDetail;
