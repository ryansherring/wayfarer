import React from "react";
import Post from "./Post/Post";
import postSeed from "./postSeed.json";
import { Container, Header, Grid, GridColumn } from 'semantic-ui-react';

class PostContainer extends React.Component {
  state = {
    posts: [],
    context: "cities"
  };

  componentDidMount() {
    console.log("PostContainer Mounted");
    this.setState({ posts: postSeed });
  }

  displayTop() { }

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
      <Container>
        <Header inverted as='h1'>Posts</Header>
        {
          this.state.posts.length ? (
            this.displayPosts(this.state.posts)
          ) : (
              <h1>No Posts Yet!</h1>
            )
        }
        <Post />
      </Container >
    );
  }
}

export default PostContainer;
