import Col from 'react-bootstrap/Col';
import Image from 'next/image';

import { BsDot, BsThreeDotsVertical, BsPlayFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

import ui from '../../styles/ui.module.scss';

import Highlight from '../../public/icons/highlight.svg';

function Card(props: any) {
  return (
    <Col>
      <div className={`card ${ui.card}`} draggable='false'>
        <div className='card-img-top'>
          <img
            src={props.image}
            alt={`${props.name} ${props.type}`}
            className={`card-img-top ${ui.verticalImage}`}
            width='100%'
            height='100%'
          />
        </div>
        <div className={`${ui.cardDetails}`}>
          <div className={`${ui.cardActionsBottom}`}>
            <span>
              <button className='btn light rounded'>
                <FaPlay />
              </button>
            </span>
            <span>
              <a href='/movies/watch' className='btn grey-light rounded'>
                <BsThreeDotsVertical />
              </a>
            </span>
          </div>
          {props.isVertical === false && (
            <>
              <a href='/movies/watch' className={`${ui.cardDetailsBottom}`}>
                <span className='d-flex'>
                  <h3 className='me-2'>Atypical</h3>
                </span>
                <span className='d-flex mt-2'>
                  <span className='badge new me-2'>New</span>
                  <span className='badge fsk me-2'>16+</span>
                  <span className='badge time me-md-2'>2h 42min</span>
                </span>
                <span className='d-flex mt-2'>
                  <span>Absurd</span>
                  <BsDot className='dividerDot' />
                  <span>Teen</span>
                  <BsDot className='dividerDot' />
                  <span>Horror</span>
                </span>
              </a>
            </>
          )}
        </div>
      </div>
    </Col>
  );

  // return (
  //   <div className={`card mb-4 card-hover ${ui.card}`}>
  //     <a href='pages/course-single.html' className='card-img-top'>
  //       <img
  //         src='https://via.placeholder.com/190x290.png/1f1f1f/FFFFFF'
  //         alt=''
  //         className='card-img-top'
  //       />
  //     </a>
  //     <div className={ui.cardBody}>
  //       <h4 className='mb-2 text-truncate-line-2 '>
  //         <a href='pages/course-single.html' className='text-inherit'>
  //           {props.title}
  //         </a>
  //       </h4>

  //       <ul className='mb-3 list-inline'>
  //         <li className='list-inline-item'>
  //           <FaRegClock className='mr-1 mb-1' /> {props.duration}
  //         </li>
  //       </ul>
  //       <div className='lh-1'>
  //         <span className='text-warning'>
  //           <div className={ui.Stars}>4.5</div>
  //         </span>
  //       </div>
  //     </div>
  //     <div className={ui.cardFooter}>
  //       <div className='row align-items-center no-gutters'>
  //         <div className='col-auto pe-0'>
  //           <img
  //             src={
  //               props.contributor?.avatar
  //                 ? props.contributor.avatar
  //                 : '/images/ui/placeholder/avatar.placeholder.png'
  //             }
  //             className={`rounded-circle ${ui.avatarXS}`}
  //             alt=''
  //           />
  //         </div>
  //         <div className='col ml-2'>
  //           <span>
  //             {props.contributor?.name ? props.contributor.name : '...'}
  //           </span>
  //         </div>
  //         <div className='col-auto'>
  //           <a href='#!' className='text-muted bookmark'>
  //             <i className='fe fe-bookmark'></i>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Card;
