import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assests/logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navBar d-flex">
      <div className="logo d-flex">
        <img src={logo} alt="logo" />
        <h1 className="navBar__title">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="menuNav d-flex">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              active="active"
              className="active-link"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
