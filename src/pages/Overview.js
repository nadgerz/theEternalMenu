import React from 'react';
import Filter from '../components/Filter';
import RecipeCard from '../components/RecipeCard';

import mockImage from '../assets/imgs/iu-1.jpeg';

const mockData = {
  user: {
    recipes: [
      {
        title: 'Eggs On Toast',
        imgs: [mockImage],
      },
      {
        title: 'Boiled Eggs',
      },
      {
        title: 'Scrambled Eggs',
      },
    ],
  },
};

const Overview = () => {
  return (
    <div id={'overview'} className={'recipes-and-filter'}>
      {/* TODO: Filter will need to be passed props from user */}
      <Filter />

      <article id="recipes">
        <h2>
          Recipes <span>{mockData.user.recipes.length} in total</span>
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
