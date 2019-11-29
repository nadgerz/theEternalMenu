import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';

const Overview = () => {
  return (
    <div id={'overview'} className={'recipes-and-filter'}>
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
          <div id={'add-recipe'} className="recipe-card add-recipe">
            <h3>
              <a href="/">Add a Recipe</a>
            </h3>
          </div>
          <RecipeCard />
        </div>
      </article>
    </div>
  );
};

export default Overview;
