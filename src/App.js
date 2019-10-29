import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import './assets/CSS/app.css';

// import SearchParams from './SearchParams';
// import Recipe from './Recipe';


const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <header>
        <nav className="burger-menu">
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
        <div className="site-branding">
          <Link to={'/'}>
            <h1>The Eternal Menu</h1>
          </Link>
        </div>
      </header>

      <main id={'main'}>
        <div className={'add-and-recents'}>

          <div className="add-new">
            <Link to="/">
              <div className="icon">+</div>
              Create New Recipe
            </Link>
          </div>

          <div className="recents">
            <h3>RECENTLY EDITED</h3>
            <div className="recent-dishes">
              <div className="recent-dish"></div>
              <div className="recent-dish"></div>
              <div className="recent-dish"></div>
            </div>
          </div>
          {/*<Router>*/}
          {/*<SearchParams path={'/'}/>*/}
          {/*<Recipe path={'/details/:id'}/>*/}
          {/*</Router>*/}

        </div>
      </main>
    </React.StrictMode>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));