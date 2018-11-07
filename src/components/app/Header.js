import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


class Header extends PureComponent {

  render() {
    return (
      <header>
        <nav>
          <h1><NavLink exact to="/">Home</NavLink></h1>
        </nav>
      </header>
    );
  }
}

export default Header;