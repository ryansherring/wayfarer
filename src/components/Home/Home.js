import React from 'react';
import './Home.css'
import Carousel from 'semantic-ui-carousel-react';
import { Image, Container, Segment, Header, Grid, Placeholder } from 'semantic-ui-react';
import neworleans from './Images/neworleans.jpg';
import paris from './Images/paris.jpg';
import paris2 from './Images/paris2.jpg';
import dallas from './Images/dallas.jpg';
import london from './Images/london.jpg';
import miami from './Images/miami.jpg';
import newyork from './Images/newyork.jpg';
import sanfrancisco from './Images/sanfrancisco.jpg';
import tokyo from './Images/tokyo.jpg';


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
    {
      render: () => {
        return <Image
          src={paris2}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={dallas}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={london}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={miami}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={newyork}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={sanfrancisco}
          // size='large'
          style={{ maxHeight: '400px' }}
          centered
        ></Image>
      }
    },
    {
      render: () => {
        return <Image
          src={tokyo}
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

  return (
    <Container inverted
      style={styles}
    >
      <Segment inverted>
        <Carousel
          style={styles}
          elements={elements}
          duration={8000}
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
export default Home;