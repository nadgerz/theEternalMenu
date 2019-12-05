import React from 'react';
import HeartTag from './HeartTag';

import '../assets/CSS/components/RecipeCard.css';

const RecipeCard = props => {
  const { img, title, favourite } = props;

  return (
    <div className="recipe-card">
      <HeartTag favourite={favourite} />

      <div className={'recipe-card-title'}>
        <p>{title}</p>
      </div>

      <div className={'recipe-thumb'}>
        <img src={`data:image/jpeg;base64, ${img}`} alt="a dish" />
      </div>
    </div>
  );
};

export default RecipeCard;
