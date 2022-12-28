import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../assets/css/Header.module.scss';
import {
  MagnifyingGlassIcon as SearchIcon,
} from '@heroicons/react/24/solid';
import {
  HomeIcon,
  UsersIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftIcon as ChatIcon,
  BellIcon,
  Squares2X2Icon as GridIcon,
  LinkIcon,
} from '@heroicons/react/20/solid';
import {
  HomeIcon as OutlineHomeIcon,
  UsersIcon as OutlineUsersIcon,
  UserGroupIcon as OutlineUserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';


import HeaderIcon from './HeaderIcon';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("logout")
    localStorage.removeItem('AUTH_TOKEN');
    navigate(`/`);
  };

  return (
    <div className={styles.header}>
      {/* Left section */}
      <div className="flex items-center">
        <img className={styles.logo} alt="Logo" />
        <div className="flex p-2 items-center rounded-full bg-gray-100 ml-1">
          <SearchIcon className="h-4 text-gray-600" />
          <input className="hidden md:inline-flex pl-1
           items-center bg-transparent outline-none flex-shrink border-0
        " type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Middle section */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon InactiveIcon={OutlineHomeIcon} ActiveIcon={HomeIcon} isActive />
          <HeaderIcon InactiveIcon={OutlineUsersIcon} ActiveIcon={UsersIcon} />
          <HeaderIcon InactiveIcon={OutlineUserGroupIcon} ActiveIcon={UserGroupIcon} />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/*  Profile pic */}
        <p className={styles.textButton}>Find Friends</p>
        <GridIcon className={styles.optionsIcon} />
        <ChatIcon className={styles.optionsIcon} />
        <BellIcon className={styles.optionsIcon} />
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <UserIcon className={styles.optionsIcon} />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-52">
            <li><a>Settings</a></li>
            <li><a><span onClick={() => logout()}>Logout</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Header;
