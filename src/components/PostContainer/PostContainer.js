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

  componentDidUpdate() {
    // console.log(this.props.selectedCity)
  }

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
  // TODO Update displayPosts() to pass the City ID from Cities to search for the posts that match the City ID.
  // TODO update displayPosts() to filter the posts by city.
  // The return posts do not have a city property.
  // TODO how do I get the posts from the city?

  displayPosts = posts => {
    return posts.map(post => {
      console.log(post);
      return <Post key={Math.random() * 10000} post={post} />
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
