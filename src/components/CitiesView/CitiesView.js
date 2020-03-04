import React, { Component } from 'react';
import { Container, Header, Grid, GridColumn } from 'semantic-ui-react';
import PostContainer from '../PostContainer/PostContainer';
import CitiesList from './CitiesList/CitiesList'

const CitiesView = () => {
  return (
    <Grid columns={2}>
      <Grid.Column width={6}>
        <Grid.Row>
          <Header as='h1' inverted>Cities List</Header>
          <CitiesList />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={10}>
        <Grid.Row>
          <PostContainer />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default CitiesView