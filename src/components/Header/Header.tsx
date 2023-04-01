import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/add">Your Videos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
