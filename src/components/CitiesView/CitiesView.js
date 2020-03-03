import React, { Component } from 'react';
import { Container, Header, Grid, GridColumn } from 'semantic-ui-react';
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
      <Grid.Column width={10}>
        <Grid.Row>
          <Grid columns={2}>
            <Grid.Column color='yellow'>
              <Grid.Row>
                <Header as='h1' inverted>City Name</Header>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column color='blue'>
              <Grid.Row>
                <Header as='h1' inverted>City Image</Header>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <PostContainer />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default CitiesView