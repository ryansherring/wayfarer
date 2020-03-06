import React from "react";
import Post from "./Post/Post";
import ContainerTop from "./ContainerTop/ContainerTop";
import axios from "axios";

class PostContainer extends React.Component {
  state = {
    posts: [],
    title: "London",
    subtitle: "England",
    img: "https://i.imgur.com/q3VDpaP.jpg"
  };

  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`, { withCredentials: true })
      .then(res => {
        this.setState({
          posts: res.data.resObj.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  componentDidUpdate() {
    // console.log(this.props.selectedCity)
  }

  componentDidMount() {
    this.getPosts();
  }

  displayTop() {
    return (
      <ContainerTop
        key={Math.random() * 100}
        title={this.state.title}
        subtitle={this.state.subtitle}
        img={this.state.img}
      />
    );
  }
  // TODO Update displayPosts() to pass the City ID from Cities to search for the posts that match the City ID.
  // TODO update displayPosts() to filter the posts by city.
  // TODO update filterPosts to make an axios call to filter the posts by city or user

  filterPosts = city => {
    // console.log(city);
  }

  displayPosts = posts => {
    return posts.map(post => {
      return <Post key={Math.random() * 10000} post={post} />;
    });
  };

  render() {
    return (
      <section className="post-container">
        {this.displayTop()}
        <div className="title">
          <h1>Posts</h1>
          <button>+</button>
        </div>
        <div className="post-scroll">
          {this.state.posts.length ? (
            this.displayPosts(this.state.posts)
          ) : (
              <h1>No Posts Yet!</h1>
            )}
        </div>
      </section>
    );
  }
}

export default PostContainer;
