import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Link = ({ filter, children }) => (
  <NavLink
    className="no-decoration"
    to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
    activeStyle={{
      textDecoration: 'none !important',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default Link