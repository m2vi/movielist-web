import ui from '../styles/ui.module.scss';

import { FaRegClock } from 'react-icons/fa';
import { IoBookmarkOutline, IoAppsSharp } from 'react-icons/io5';

function Card(props: any) {
  return (
    <div className={`card mb-4 card-hover ${ui.card}`}>
      <a href='pages/course-single.html' className='card-img-top'>
        <img
          src='https://via.placeholder.com/825x490.png/1f1f1f/FFFFFF'
          alt=''
          className='card-img-top'
        />
      </a>
      <div className={ui.cardBody}>
        <h4 className='mb-2 text-truncate-line-2 '>
          <a href='pages/course-single.html' className='text-inherit'>
            {props.title}
          </a>
        </h4>

        <ul className='mb-3 list-inline'>
          <li className='list-inline-item'>
            <FaRegClock className='mr-1 mb-1' /> {props.duration}
          </li>
        </ul>
        <div className='lh-1'>
          <span className='text-warning'>
            <div className={ui.Stars}>4.5</div>
          </span>
        </div>
      </div>
      <div className={ui.cardFooter}>
        <div className='row align-items-center no-gutters'>
          <div className='col-auto pe-0'>
            <img
              src={
                props.contributor?.avatar
                  ? props.contributor.avatar
                  : '/images/ui/placeholder/avatar.placeholder.png'
              }
              className={`rounded-circle ${ui.avatarXS}`}
              alt=''
            />
          </div>
          <div className='col ml-2'>
            <span>
              {props.contributor?.name ? props.contributor.name : '...'}
            </span>
          </div>
          <div className='col-auto'>
            <a href='#!' className='text-muted bookmark'>
              <i className='fe fe-bookmark'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;