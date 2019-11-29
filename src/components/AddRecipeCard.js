import React from 'react';
import { AddIcon, PlateAndCutleryIcon } from '../assets/SVG/svg';

const AddRecipeCard = () => {
  return (
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
  );
};

export default AddRecipeCard;
