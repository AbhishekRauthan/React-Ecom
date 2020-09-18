import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" alt="" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header;
