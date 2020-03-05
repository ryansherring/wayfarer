import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import PostContainer from '../PostContainer/PostContainer';
import CitiesList from './CitiesList/CitiesList'
import './CitiesView.css'

class CitiesView extends React.Component {
  state = {
    selectedCity: ''
  }

  handleSelectCity = (city) => {
    this.setState({ selectedCity: city })
  }
  render() {
    return (
      <div className='cities-view'>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Grid.Row>
              <Header as='h1' inverted>Cities</Header>
              <CitiesList
                handleSelectCity={this.handleSelectCity} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid.Row>
              <PostContainer
                selectedCity={this.state.selectedCity} />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CitiesView;
