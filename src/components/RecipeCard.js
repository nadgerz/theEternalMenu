import React from 'react';
import HeartTag from './HeartTag';

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <HeartTag />
      <div className={'recipe-card-title'}>
        <p>A Recipe Title A Recipe Title A Recipe Title</p>
      </div>
      <div className={'recipe-thumb'}></div>
    </div>
  );
};

export default RecipeCard;
