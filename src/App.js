import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
// import SearchParams from './SearchParams';
// import Recipe from './Recipe';


const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <div>
        <header>
          <Link to={'/'}>
            The Eternal Menu
          </Link>
        </header>

        <Router>
          <SearchParams path={'/'}/>
          {/*<Recipe path={'/details/:id'}/>*/}
        </Router>

      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));