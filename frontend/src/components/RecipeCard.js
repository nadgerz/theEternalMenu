import React from 'react';
import { Link } from '@reach/router';

import HeartTag from './HeartTag';

import '../assets/CSS/components/RecipeCard.css';

const RecipeCard = props => {
  const { id, img, title, favourite } = props;

  return (
    <Link to={`recipe/${id}`} className="recipe-card">
      <HeartTag favourite={favourite}/>

      <div className={'recipe-card-title'}>
        <p>{title}</p>
      </div>

      <div className={'recipe-thumb'}>
        <img src={`data:image/jpeg;base64, ${img}`} alt="a dish"/>
      </div>
    </Link>

  );
};

export default RecipeCard;
