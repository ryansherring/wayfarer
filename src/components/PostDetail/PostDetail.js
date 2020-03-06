import React from "react";
import ModalBasicExample from "./ConfirmModal/ConfirmModal";
import "./PostDetail.css";
import axios from "axios";

class PostDetail extends React.Component {
  state = {
    post: null,
    show: false
  };

  handleOpen = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  getPost = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/posts/${this.props.match.params.id}`,
        { withCredentials: true }
      )
      .then(res => {
        console.log(`axios response`, res);
        this.setState({
          post: res.data.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    this.getPost();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.post !== nextState.post) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    // console.log({ PDprops: this.props });

    // const postToShow = this.state.posts.filter(
    //   post => post._id === this.props.match.params.id
    // );

    // console.log(postToShow[0]._id);
    // console.log(this.props.match.params.id);

    // const { title, date, content, user, img } = this.state.post;
    return (
      this.state.post && (
        <>
          <section className="aligner">
            <article className="post-detail">
              <div className="post-detail-header">
                <h1 className="post-detail-title">{this.state.post.title}</h1>
                <div className="post-detail-modify">
                  <h4 className="post-detail-edit">Edit</h4>
                  <ModalBasicExample
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                    show={this.state.show}
                    id={this.props.match.params.id}
                    title={this.state.post.title}
                  />
                </div>
              </div>
              <img
                className="post-detail-img"
                src={this.state.post.img}
                alt={this.state.post.title}
              ></img>
              <div className="post-detail-meta">
                <h4>{this.state.post.user.name}</h4>
                <h4>{this.state.post.date}</h4>
              </div>
              <p>{this.state.post.content}</p>
              <div
                className="post-detail-return"
                onClick={this.props.history.goBack}
              >
                <h4>Go Back</h4>
              </div>
            </article>
          </section>
        </>
      )
    );
  }
}

export default PostDetail;
