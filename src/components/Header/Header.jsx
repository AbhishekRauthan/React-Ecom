import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';

const Header = ({ currentUser }) => {
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
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            : <Link className="option" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  )
}

export default Header;
