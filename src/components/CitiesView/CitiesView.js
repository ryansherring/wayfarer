import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import PostContainer from '../PostContainer/PostContainer';

const CitiesView = () => {
  return (
    <Grid columns={2}>
      <Grid.Column width={6} color='red'>
        <Grid.Row>
          <Header as='h1' inverted>Cities List Computational Component</Header>
          {/* future space for Cities List Computational Component */}
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={10} color='purple'>
        <Grid.Row>
          <Header as='h1' inverted>City Detail Container</Header>
          {/* future space for City Detail Container */}
          <PostContainer />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default CitiesView