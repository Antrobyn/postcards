import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


class Header extends PureComponent {

  render() {
    return (
      <header>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/postcards">Postcards</NavLink>
          <NavLink to="/cart">Shopping Cart</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;