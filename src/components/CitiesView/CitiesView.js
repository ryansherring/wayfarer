import React, { Component } from 'react';
import { Container, Header, Grid, GridColumn } from 'semantic-ui-react';
import PostContainer from '../PostContainer/PostContainer';
import CitiesList from './CitiesList/CitiesList'
import './CitiesView.css'

const CitiesView = () => {
  return (
    <div className='cities-view'>
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
    </div>
  )
}

export default CitiesView