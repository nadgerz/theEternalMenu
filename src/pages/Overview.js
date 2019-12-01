import React from 'react';

import AddRecipeCard from '../components/AddRecipeCard';
import Filters from '../components/Filters';
import RecipeCard from '../components/RecipeCard';

import mockData from '../assets/data/data';

import '../assets/CSS/pages/Overview.scss';

const Overview = () => {
  return (
    <div id={'overview'} className={'recipes-and-filter'}>
      {/* TODO: Filter will need to be passed props from user */}
      <Filters />

      <article id="recipes" className={'user-recipes'}>
        <h2>
          Your Recipes <span>{mockData.user.recipes.length} in total</span>
        </h2>

        <div className={'recipe-grid'}>
          <a href="/">
            <AddRecipeCard />
          </a>

          {mockData.user.recipes.map((recipe, index) => {
            return (
              <RecipeCard
                img={recipe.img}
                title={recipe.title}
                favourite={recipe.favourite}
                key={
                  recipe.title.toLowerCase().replace(/\s/g, '') + '_' + index
                }
              />
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Overview;
