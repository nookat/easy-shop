import React from 'react';
import {Link} from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import {Container} from 'layouts';

import products from 'seeders/products';

const HomePage = () => (
  <Container>
    <Carousel showArrows emulateTouch showThumbs={false}>
      {
        products.map(item => (
          <div className="flex justify-center items-center isAnimated mr-4 mb-4 pl-3 pr-3 pt-3 pb-3" key={item.id}>
            <img src={item.img} alt={item.title} style={
              {
                maxWidth: '320px'
              }
            }/>
            <div className="flex flex-col items-start">
              <span className="ui-title-5 mb-2" style={{color: 'white'}}>{item.title}</span>
              <span className="mb-4" style={{color: 'white'}}>{item.price}</span>
              <Link to={`/products/${item.alias}`}>
                <div className="ui-button isPrimary">See more</div>
              </Link>
            </div>
          </div>
        ))
      }
    </Carousel>
  </Container>
);

export default HomePage;