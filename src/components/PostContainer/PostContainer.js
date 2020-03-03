import React from "react";
import Post from "./Post/Post";
import postSeed from "./postSeed.json";


class PostContainer extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log("PostContainer Rendered");
    this.setState({ posts: postSeed });
  }

  displayPosts = posts => {
    return posts.map(post => {
      return (
        <Post
          key={Math.random() * 10000}
          title={post.title}
          date={post.date}
          content={post.content}
          user={post.user}
          img={post.img}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Whazzzaaaaaaa</h1>;
        {this.state.posts.length ? (
          this.displayPosts(this.state.posts)
        ) : (
            <h1>No Posts Yet!</h1>
          )}
        <Post />
      </div>
    );
  }
}


export default PostContainer;