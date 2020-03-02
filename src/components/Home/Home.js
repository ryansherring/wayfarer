import React from 'react';
import Carousel from 'semantic-ui-carousel-react';
import { Image, Container } from 'semantic-ui-react';
import './Home.css'
import neworleans from './new-orleans.jpg';
import paris from './paris.jpg';

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

  // const styles = {
  //   height: '900px'
  // }
  return (
    <Container
    // style={styles}
    >
      <Carousel

        elements={elements}
        duration={3000}
        animation='slide left'
        showNextPrev={false}
        showIndicators={true}
      />
    </Container>
  )

}
export default Home;