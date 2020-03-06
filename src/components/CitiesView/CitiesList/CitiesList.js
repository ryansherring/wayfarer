import React from 'react';
import City from './City/City';
import citySeed from './citySeed.json'
import './CitiesList.css'

// TODO create activeCity state and pass that into the Cities View Container
class CitiesList extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    this.setState({ posts: citySeed });
  }

  displayPosts = posts => {
    return posts.map(post => {
      return (
        <City
          key={Math.random() * 100}
          name={post.name}
          descrip={post.descrip}
          image={post.image}
          handleSelectCity={this.props.handleSelectCity}
        />
      );
    });
  };

  render() {
    return (
      <section className="city-container">
        <div className="city-scroll">
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

export default CitiesList;