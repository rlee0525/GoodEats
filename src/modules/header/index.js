import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <ul className="logos">
            <li><Link to="/" className="logo-name">GoodEats</Link></li>
          </ul>
        </div>
        <div className="header-right">
          <ul className="portfolio-links">
            <li><a href="https://github.com/rlee0525">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;