import React from 'react';
import Filters from '../components/Filters';
import RecipeCard from '../components/RecipeCard';

import mockImage from '../assets/imgs/iu-1.jpeg';
import mockImage2 from '../assets/imgs/iu-2.jpeg';
import { PlateAndCutleryIcon, AddIcon } from '../assets/SVG/svg';

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
            <div id={'add-recipe'} className="recipe-card">
              <div>
                <h3>
                  Add a <br /> Recipe
                </h3>
              </div>
              <div className={'add-recipe-icons'}>
                <PlateAndCutleryIcon className={'svg-plate-cutlery'} />
                <AddIcon />
              </div>
            </div>
          </a>

          <RecipeCard />
        </div>
      </article>
    </div>
  );
};

export default Overview;
