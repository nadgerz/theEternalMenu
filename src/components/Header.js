import { Link } from '@reach/router';
import React from 'react';

import '../assets/CSS/Header.css';

const Header = () => {
  return (
    <header>
      <nav className="main-menu">
        <div className="site-branding">
          <Link to={'/'}>
            <h1 className={'hidden'}>The Eternal Menu</h1>
            TEM
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
