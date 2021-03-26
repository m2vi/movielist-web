import ui from '../styles/ui.module.scss';

import { IoSearch, IoNotifications } from 'react-icons/io5';
import { Component, useState } from 'react';
import Link from 'next/link';

export default () => {
  const [dropdown, setDropdown] = useState(false);
  console.log(dropdown);

  return (
    <nav className={ui.navbarOuter}>
      <ul className={ui.navbarInner + ' ' + ui.primaryNav}>
        <li className={ui.navItem}>
          <a className={`${ui.navLink} active`} aria-current='page' href='#'>
            Home
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            Series
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            Movies
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            Audiobooks
          </a>
        </li>
        <li className={ui.navItem}>
          <a className={ui.navLink} href='#'>
            New uploads
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
          <a className={ui.navLink} aria-current='page' href='#'>
            <IoNotifications />
          </a>
        </li>
        <li className={ui.navItem}>
          <a
            className={ui.navLink + ' ' + ui.avatarSelect}
            aria-current='page'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              dropdown ? setDropdown(false) : setDropdown(true);
            }}
          >
            <img
              src='https://cdn.discordapp.com/avatars/701400631662870609/209310a4575835949e4b1d4d951e0aaf.png?size=512'
              alt='m2v'
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
