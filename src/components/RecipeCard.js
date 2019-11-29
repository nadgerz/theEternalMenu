import React from 'react';
import HeartTag from './HeartTag';

const RecipeCard = props => {
  const { img, title } = props;

  return (
    <div className="recipe-card">
      <HeartTag />
      {/*{ img }*/}
      <div className={'recipe-card-title'}>
        <h5>{title}</h5>
      </div>

      <div className={'recipe-thumb'}>
        <img src={img} alt="a dish" />
        {/*<img src={require(`${image}`)}*/}
      </div>
    </div>
  );
};

export default RecipeCard;
