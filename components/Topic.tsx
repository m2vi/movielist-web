import ui from '../styles/ui.module.scss';
import isMobile from '../plugins/isMobile';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

// @ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';

console.log(isMobile);

function Topic({ children, title, className }) {
  const breakPoints = [
    { width: 575.98, itemsToShow: 2, itemsToScroll: 2 },
    { width: 767.98, itemsToShow: 3, itemsToScroll: 3 },
    { width: 991.98, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1199.98, itemsToShow: 5, itemsToScroll: 5 },
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
    <div className={`${ui.topic}`}>
      <div className={`row no-gutter`}>
        <div className='col p-0'>
          <h2>{title ? title : '...'}</h2>
        </div>
      </div>
      <Carousel
        isRTL={false}
        itemPadding={[0, 2]}
        pagination={false}
        renderArrow={Arrow}
        enableMouseSwipe={false}
        breakPoints={breakPoints}
      >
        {children}
      </Carousel>
    </div>
  );
}

export default Topic;
