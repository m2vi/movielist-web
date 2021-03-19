import ui from '../styles/ui.module.scss';

import Row from 'react-bootstrap/Row';

import dynamic from 'next/dynamic';

import React from 'react';
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
  arrowsPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Topic({ children, title, className }) {
  return (
    <>
      <div className={`${ui.topic} row mb-4`}>
        <div className='col'>
          <h2 className='mb-0'>{title ? title : '...'}</h2>
        </div>
      </div>
      <Row>
        <Carousel
          plugins={[
            'infinite',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <button>asd</button>,
                arrowLeftDisabled: <button>g</button>,
                arrowRight: <button>asd</button>,
                arrowRightDisabled: <button>asd</button>,
                addArrowClickHandler: true,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {children}
        </Carousel>
      </Row>
    </>
  );
}

export default Topic;
