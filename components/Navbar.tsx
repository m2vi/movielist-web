import ui from '../styles/ui.module.scss';

import { IoSearch } from 'react-icons/io5';

export default () => {
  return (
    <nav className={ui.navbarOuter}>
      <ul className={ui.navbarInner + ' ' + ui.primaryNav}>
        <li className={ui.navItem}>
          <a className={`${ui.navLink} active`} aria-current='page' href='#'>
            Startseite
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            Serien
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            Filme
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            Neu released
          </a>
        </li>
      </ul>
      <ul className={ui.navbarInner + ' ' + ui.secondaryNav}>
        <li className={ui.navItem}>
          <a className={ui.navLink} aria-current='page' href='#'>
            <IoSearch />
          </a>
        </li>
        <li className={ui.navItem}>
          <a
            className={ui.navLink + ' ' + ui.avatarSelect}
            aria-current='page'
            href='#'
          >
            <img src='/images/user/all.svg' alt='Selected All' />
          </a>
        </li>
      </ul>
    </nav>
  );
};
