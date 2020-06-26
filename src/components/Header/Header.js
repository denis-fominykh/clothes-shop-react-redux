import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className="header header_display">
      <Link
        className="header__logo-container header__logo-container_size"
        to="/"
      >
        <Logo className="header__logo" />
      </Link>
      <div className="header__options header__options_display">
        <Link className="header__option header__option_size" to="/shop">
          SHOP
        </Link>
        <Link className="header__option header__option_size" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
