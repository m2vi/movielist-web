import ui from '../styles/ui.module.scss';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import Row from 'react-bootstrap/Row';

// @ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';

function Topic({ children, title, className }) {
  const breakPoints = [
    { width: 150, itemsToShow: 1 },
    { width: 491, itemsToShow: 2 },
    { width: 100, itemsToShow: 6 },
  ];

  const Arrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <IoChevronBackOutline />
      ) : (
        <IoChevronForwardOutline />
      );
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`carouselChevron ${type === consts.PREV ? 'prev' : 'next'}`}
      >
        {pointer}
      </button>
    );
  };

  return (
    <>
      <div className={`${ui.topic} row mb-4`}>
        <div className='col'>
          <h2 className='mb-0'>{title ? title : '...'}</h2>
        </div>
      </div>
      <Carousel
        isRTL={false}
        itemsToShow={4}
        itemPadding={[0, 10]}
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={Arrow}
        enableAutoPlay={false}
        autoPlaySpeed={7500}
      >
        {children}
      </Carousel>
    </>
  );
}

export default Topic;
