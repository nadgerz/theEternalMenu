import React from 'react';
import HeartTag from './HeartTag';

import '../assets/CSS/components/RecipeCard.css';

const RecipeCard = props => {
  const { img, title, favourite } = props;

  return (
    <div className="recipe-card">
      <HeartTag favourite={favourite} />
      {/*{ img }*/}
      <div className={'recipe-card-title'}>
        <p>{title}</p>
      </div>

      <div className={'recipe-thumb'}>
        <img src={img} alt="a dish" />
        {/*<img src={require(`${image}`)}*/}
      </div>
    </div>
  );
};

export default RecipeCard;
