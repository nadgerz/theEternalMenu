import { Link } from '@reach/router';
import React from 'react';

import '../assets/CSS/Header.css';
import { MenuIcon } from '../assets/SVG/svg';

const Header = () => {
  return (
    <header>
      <h1 className={'hidden'}>The Eternal Menu</h1>

      <div className="main-menu">
        <div className="site-branding">
          <Link to={'/'}>
            TEM
            {/*<MenuIcon fill={'#403e37'}/>*/}
            <MenuIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
