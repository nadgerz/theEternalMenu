import React from 'react';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';

import Header from './components/Header';
import Overview from './components/pages/Overview';
// import Recipe from './pages/Recipe';

// import FormikLogin from './Login';
// import RecipeForm from './RecipeForm';

import './assets/CSS/App.css';

// import SearchParams from './SearchParams';
// import Recipe from './Recipe';

const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <Header />

      <main id={'main'}>
        {/*<Router>*/}
        <Overview />
        {/*<Recipe />*/}
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

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
