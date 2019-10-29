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
        {/*<Router>*/}
        {/*<SearchParams path={'/'}/>*/}
        {/*<Recipe path={'/details/:id'}/>*/}
        {/*</Router>*/}

      </main>
    </React.StrictMode>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));