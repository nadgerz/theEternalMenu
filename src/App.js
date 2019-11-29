import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';

import Header from './components/Header';
import Overview from './pages/Overview';

// import FormikLogin from './Login';
// import RecipeForm from './RecipeForm';

import './assets/CSS/app.css';

// import SearchParams from './SearchParams';
// import Recipe from './Recipe';

const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <Header />

      <main id={'main'}>
        <Overview />
        {/*<Router>*/}
        {/*<SearchParams path={'/'}/>*/}
        {/*<Recipe path={'/details/:id'}/>*/}
        {/*</Router>*/}
        {/*<FormikLogin />*/}
        {/*<FormikLogin email={'andrew@test.de'}/>*/}
        {/*<RecipeForm />*/}
      </main>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
