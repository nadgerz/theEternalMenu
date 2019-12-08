import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Router } from '@reach/router';

import Header from './components/Header';
import Overview from './components/pages/Overview';
import Recipe from './components/pages/Recipe';

import './assets/CSS/App.css';


const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <Header />

      <main id={'main'}>
        <Router>
          <Overview path={'/'} />
          <Recipe path={'recipe/:id'} />
        </Router>
        {/*<SearchParams path={'/'}/>*/}
        {/*<Details path={'/details/:id'}/>*/}
        {/*<FormikLogin />*/}
        {/*<FormikLogin email={'andrew@test.de'}/>*/}
        {/*<RecipeForm />*/}
      </main>
    </React.StrictMode>
  );
};

export default App;
