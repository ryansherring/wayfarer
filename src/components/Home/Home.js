import React from 'react';
import './Home.css'
import Carousel from 'semantic-ui-carousel-react';
import { Image, Container, Segment, Header, Grid, Placeholder } from 'semantic-ui-react';
import neworleans from './new-orleans.jpg';
import paris from './paris.jpg';


// TODO place images from the seed file into this folder, and feed them into the carousel.

const Home = () => {
  let elements = [
    {
      render: () => {
        return <Image
          src={neworleans}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={paris}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
  ]

  const styles = {
    backgroundColor: "#1A1A1B"
  }

  // TODO create content for the three posts
  render(){
    return (
      <Container inverted
        style={styles}
      >
        <Segment inverted>
          <Carousel
            style={styles}
            elements={elements}
            duration={3000}
            animation='slide left'
            showNextPrev={false}
            showIndicators={true}
          />
        </Segment>
        <Segment inverted>
          <Header as='h2' textAlign='centered'>Wayfarer is...</Header>
          <Grid columns={3} divided inverted>
            <Grid.Row>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Grid.Column>
              <Grid.Column>
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </Container>
    )
  }
}
export default Home;