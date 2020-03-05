import React from "react";
import Post from "./Post/Post";
import ContainerTop from "./ContainerTop/ContainerTop";
import postSeed from "./postSeed.json";

class PostContainer extends React.Component {
  state = {
    posts: [],
    title: "London",
    subtitle: "England",
    img: "https://i.imgur.com/q3VDpaP.jpg"
  };
  //TODO update State with props from CityList active state

  componentDidMount() {
    console.log("PostContainer Mounted");
    this.setState({ posts: postSeed });
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
