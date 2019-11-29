import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';

import Header from './components/Header';
// import FormikLogin from './Login';
// import RecipeForm from './RecipeForm';
import {
  CookingTimeIcon,
  ServingSizeIcon,
  HeartOutlineIcon,
} from './assets/SVG/svg';

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
        <div className={'recipes-and-filter'}>
          <aside id={'recipe-filter'}>
            <h2>Filter</h2>
            <div className={'cooking-time'}>
              <div className="filter-title">
                <CookingTimeIcon />
                <h6>Cooking Time</h6>
              </div>
              <div className="filter-slider"></div>
            </div>
            <div className={'serving-size'}>
              <div className="filter-title">
                <ServingSizeIcon />
                <h6>Serving Size</h6>
              </div>
              <div className="filter-slider"></div>
            </div>
          </aside>
          <article id="recipes">
            <h2>
              Recipes <span>{12} in total</span>
            </h2>
            <div className={'recipe-grid'}>
              <div className="recipe-card add-recipe">
                <h3>
                  <a href="/">Add a Recipe</a>
                </h3>
              </div>
              <div className="recipe-card">
                <div className={'heart-tag'}>
                  <div className={'heart-outline-icon'}>
                    <HeartOutlineIcon />
                  </div>
                </div>
                <div className={'recipe-card-title'}>
                  <p>A Recipe Title A Recipe Title A Recipe Title</p>
                  <div className="chevron"></div>
                </div>
                <div className={'recipe-thumb'}></div>
              </div>
            </div>
          </article>
        </div>
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
