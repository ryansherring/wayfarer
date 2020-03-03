import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import api from './posts.json';
import Post from './Post/Post';

class CitiesList extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    console.log('CitiesList did mount');
    this.setState(
      {
        // posts: 
      }
    )
  }

  displayPosts = posts => {
    console.log('[PostList] display posts');
    if (this.props.name) {
      posts = posts.filter(post => {
        return post.user.username === this.props.name;
      })
    };
    return posts.map(post => {
      return <Post key={post._id} postData={post} />;
    });
  };

  render() {
    console.log('[PostList] render', this.state)
    return (
      <section id='post-list'>
        {this.state.posts.length ? this.displayPosts(this.state.posts) : <p>Loading</p>}
      </section>
    );
  }


  // constructor()
  // static getDerivedStateFromProps()
  // shouldComponentUpdate()
  // componentDidUpdate()
  // render()
}