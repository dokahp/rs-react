import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.PureComponent {
  render() {
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
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
