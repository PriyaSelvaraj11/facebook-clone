import React, { FC } from 'react';
import styles from '../../assets/css/Header.module.scss';

interface HeaderIconProps { 
  ActiveIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  InactiveIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  isActive ?: Boolean,
}

const HeaderIcon: FC<HeaderIconProps> = ({ ActiveIcon, InactiveIcon, isActive }) => {

  let icon;
  if(isActive) {
    icon = <ActiveIcon className={styles.headerIcon}></ActiveIcon>;
  } else {
    icon = <InactiveIcon className={styles.headerIcon}></InactiveIcon>;
  }
  return (<div className={`${styles.navContainer} ${isActive && styles.highlight}`}>
    {icon}
  </div>);
};

export default HeaderIcon;
