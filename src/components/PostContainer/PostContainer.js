import React from "react";
import Post from "./Post/Post";
import ContainerTop from "./ContainerTop/ContainerTop";
import postSeed from "./postSeed.json";
import axios from 'axios';

class PostContainer extends React.Component {
  state = {
    posts: [],
    title: "London",
    subtitle: "England",
    img: "https://i.imgur.com/q3VDpaP.jpg"
  };

  componentDidUpdate() {
    console.log("PostContainer Updated");
    this.filterPosts(this.props.selectedCity)
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

  // TODO update displayPosts() to filter the posts by city.
  // TODO update filterPosts to make an axios call to filter the posts by city or user

  filterPosts = city => {
    console.log(city);
  }

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
