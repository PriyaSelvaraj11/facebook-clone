import React, { FC } from 'react';
import '../../assets/css/NavBar.scss';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {

  const sideNavBarOptions = [
    {id:1, description: 'Priya Dharshini', redirectLink: '/', iconCssClass: 'friendsIcon'},
    {id:2, description: 'Find Friends', redirectLink: '/', iconCssClass: 'friendsIcon'},
    {id:4, description: 'Groups', redirectLink: '/', iconCssClass: 'groupIcon'},
    {id:6, description: 'Memories', redirectLink: '/', iconCssClass: 'memoriesIcon'},
    {id:7, description: 'News', redirectLink: '/', iconCssClass: 'newsIcon'},
    {id:8, description: 'Events', redirectLink: '/', iconCssClass: 'eventsIcon'},
    {id:3, description: 'Messenger', redirectLink: '/', iconCssClass: 'messengerIcon'},
  ]

  return (
  <div className="NavBar">
    {
      sideNavBarOptions.map(option => {
        return (
          <div className="navItem" key={option.id}>
            <img className={`icon ${option.iconCssClass}`} alt={option.description}/>
            <div className="description">{option.description}</div>
          </div>
        );
      })
    }
  </div>);
};

export default NavBar;
