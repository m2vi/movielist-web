import ui from '../styles/ui.module.scss';
import dropdownStyles from '../styles/dropdown.module.scss';

import { IoSearch, IoNotifications } from 'react-icons/io5';
import { Component, useState } from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import {
  IoColorPaletteOutline,
  IoLogOutOutline,
  IoCogOutline,
  IoLanguageOutline,
  IoHelpCircleOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import { RiUserShared2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { BiKey } from 'react-icons/bi';
import { AiOutlineDatabase } from 'react-icons/ai';
import ColoredLogo from '../utils/coloredLogo';

function Searchbar() {
  const [doBlur, setDoBlur] = useState(false);

  const [searchbar, setSearchbar] = useState(false);

  const [isBlur, setBlur] = useState(true);
  const onBlur = () => (doBlur ? setSearchbar(false) : setBlur(false));

  return (
    <a
      className={searchbar ? ui.searchbar : ui.searchIcon}
      aria-current='page'
      href='#'
      onClick={(e) => {
        e.preventDefault();
        if (!searchbar) {
          setSearchbar(true);
        }
      }}
    >
      {searchbar ? (
        <div className={`input-group ${ui.searchbar} active`}>
          <span className='input-group-text' id='basic-addon1'>
            <IoSearch />
          </span>
          <input
            type='text'
            className='form-control'
            placeholder='Titles, people, genres'
            onBlur={onBlur}
            onFocus={() => setDoBlur(true)}
            autoFocus
          />
        </div>
      ) : (
        <IoSearch />
      )}
    </a>
  );
}

export default () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className={ui.navbarOuter}>
        <ul className={ui.navbarInner + ' ' + ui.primaryNav}>
          <li className={ui.navItem}>
            <a href='/'>
              <ColoredLogo light='#8743FF' dark='#4136F1' />
            </a>
          </li>
          <li className={ui.navItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={ui.navItem}>
            <Link href='/series'>Series</Link>
          </li>
          <li className={ui.navItem}>
            <Link href='/movies'>Movies</Link>
          </li>
          <li className={ui.navItem}>
            <Link href='/audiobooks'>Audiobooks</Link>
          </li>
          <li className={ui.navItem}>
            <Link href='/new'>New uploads</Link>
          </li>
        </ul>
        <ul className={ui.navbarInner + ' ' + ui.secondaryNav}>
          <li className={`${ui.navItem} ${ui.search}`}>
            <Searchbar />
          </li>
          <li className={ui.navItem}>
            <a className={ui.navLink} aria-current='page' href='#'>
              <IoNotifications />
            </a>
          </li>
          <li className={ui.navItem}>
            <a
              className={`${ui.navLink} ${ui.avatarSelect}`}
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
      <div
        className={`${dropdownStyles.dropdownMenuWrapper} ${
          dropdown ? dropdownStyles.show : dropdownStyles.hide
        }`}
      >
        <div className={dropdownStyles.dropdownMenu}>
          <div className={dropdownStyles.dropdownItem}>
            <VscAccount /> Your Items
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <RiUserShared2Line /> Share Access
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <BiKey /> Generate Token
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <AiOutlineDatabase /> Manage Storage
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <IoLogOutOutline /> Sign out
          </div>
        </div>
        <div className={dropdownStyles.dropdownMenu}>
          <div className={dropdownStyles.dropdownItem}>
            <IoColorPaletteOutline /> Apperance: Dark and Modern
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <IoLanguageOutline /> Language: British English
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <IoLocationOutline /> Location: Austria
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <IoCogOutline /> Settings
          </div>
          <div className={dropdownStyles.dropdownItem}>
            <IoHelpCircleOutline /> Help
          </div>
        </div>
        <div className={dropdownStyles.dropdownMenu}>
          <div className={dropdownStyles.dropdownItem}>Disable Logs: False</div>
        </div>
      </div>
    </>
  );
};
