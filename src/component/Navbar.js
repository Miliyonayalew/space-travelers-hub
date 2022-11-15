import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <nav className="navBar">
      <h1 className="navBar__title">Space Travelers&apos; Hub</h1>
      <ul className="menuNav">
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
