import React from 'react';

import AddRecipeCard from '../components/AddRecipeCard';
import Filters from '../components/Filters';
import RecipeCard from '../components/RecipeCard';

import mockImage from '../assets/imgs/iu-1.jpeg';
import mockImage2 from '../assets/imgs/iu-2.jpeg';

const mockData = {
  user: {
    recipes: [
      {
        title: 'Eggs On Toast',
        imgs: [mockImage],
      },
      {
        title: 'Boiled Eggs',
        img: [mockImage2],
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
      <Filters />

      <article id="recipes">
        <h2>
          Recipes <span>{mockData.user.recipes.length} in total</span>
        </h2>

        <div className={'recipe-grid'}>
          <a href="/">
            <AddRecipeCard />
          </a>

          <RecipeCard />
        </div>
      </article>
    </div>
  );
};

export default Overview;
